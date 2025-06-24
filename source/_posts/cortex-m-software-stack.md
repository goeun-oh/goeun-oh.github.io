---
title: 6. SW Stack과 모듈화
date: 2025-06-23
categories:
  - Cortex-M
tags:
  - SW Stack
  - 모듈화
  - 폴더분리
  - 계층구조
  - ARM
  - Embedded
layout: post
---

# SW Stack과 모듈화

이번 포스트에서는 ARM 레포지토리에서 실제로 다룬 SW Stack 개념과 폴더 분리를 통한 모듈화 방법을 알아본다.

## 📁 폴더 분리의 필요성

### GPIO 관련 기능 분리

기존에 main.c에 모든 코드가 집중되어 있던 것을 GPIO 관련된 기능들을 따로 분리한다.

**분리 전 문제점:**
- 모든 코드가 main.c에 집중
- 기능별 구분이 어려움
- 재사용성 낮음
- 유지보수 어려움

**분리 후 장점:**
- 기능별 명확한 구분
- 코드 재사용 가능
- 유지보수 용이
- 협업 효율성 향상

## 🏗️ SW Stack 개념

### SW의 흐름과 계층 구조

SW의 흐름은 위에서 아래로 진행된다. SW가 HW를 제어하는 계층적 구조다.

![SW Stack 구조](https://raw.githubusercontent.com/goeun-oh/ARM/main/0619/0.GPIO_BTN_%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0.md%7B237EF5FA-4218-4683-8031-73F87911D2AB%7D.png)

### SW Stack 구조도

```
+------------------------+
|         SW            |
|  +-----------------+  |
|  |   Application   |  | <- 애플리케이션 레이어
|  +-----------------+  |
|  |     API/HAL     |  | <- 하드웨어 추상화 계층
|  +-----------------+  |
|  |     Driver      |  | <- 드라이버 계층
|  +-----------------+  |
+------------------------+
|         HW            | <- 하드웨어
+------------------------+
```

## 📂 폴더 구조 설계

### 계층별 폴더 분리

```
project/
├── App/                 # 애플리케이션 계층
│   ├── main.c
│   └── app_config.h
├── HAL/                 # 하드웨어 추상화 계층
│   ├── gpio_hal.c
│   ├── gpio_hal.h
│   ├── led_hal.c
│   └── led_hal.h
├── Driver/              # 드라이버 계층
│   ├── gpio_driver.c
│   ├── gpio_driver.h
│   └── system_config.h
└── Hardware/            # 하드웨어 정의
    ├── stm32f411xx.h
    └── memory_map.h
```

## 🔧 GPIO 모듈 분리 실습

### 1. GPIO 드라이버 계층 (gpio_driver.h)

```c
#ifndef GPIO_DRIVER_H
#define GPIO_DRIVER_H

#include <stdint.h>

// GPIO 베이스 주소 정의
#define GPIOA_BASE    0x40020000
#define GPIOB_BASE    0x40020400
#define GPIOC_BASE    0x40020800

// GPIO 레지스터 구조체
typedef struct {
    volatile uint32_t MODER;    // Mode register
    volatile uint32_t OTYPER;   // Output type register
    volatile uint32_t OSPEEDR;  // Speed register
    volatile uint32_t PUPDR;    // Pull-up/pull-down register
    volatile uint32_t IDR;      // Input data register
    volatile uint32_t ODR;      // Output data register
    volatile uint32_t BSRR;     // Bit set/reset register
    volatile uint32_t LCKR;     // Lock register
    volatile uint32_t AFR[2];   // Alternate function registers
} GPIO_TypeDef;

// GPIO 포트 정의
#define GPIOA  ((GPIO_TypeDef*)GPIOA_BASE)
#define GPIOB  ((GPIO_TypeDef*)GPIOB_BASE)
#define GPIOC  ((GPIO_TypeDef*)GPIOC_BASE)

// 함수 선언
void gpio_clock_enable(GPIO_TypeDef* gpio);
void gpio_set_mode(GPIO_TypeDef* gpio, uint8_t pin, uint8_t mode);
void gpio_write_pin(GPIO_TypeDef* gpio, uint8_t pin, uint8_t state);

#endif
```

### 2. GPIO 드라이버 계층 (gpio_driver.c)

```c
#include "gpio_driver.h"

// RCC 레지스터 주소
#define RCC_BASE      0x40023800
#define RCC_AHB1ENR   (*(volatile uint32_t*)(RCC_BASE + 0x30))

void gpio_clock_enable(GPIO_TypeDef* gpio) {
    if (gpio == GPIOA) {
        RCC_AHB1ENR |= (1 << 0);  // GPIOA 클록 활성화
    } else if (gpio == GPIOB) {
        RCC_AHB1ENR |= (1 << 1);  // GPIOB 클록 활성화
    } else if (gpio == GPIOC) {
        RCC_AHB1ENR |= (1 << 2);  // GPIOC 클록 활성화
    }
}

void gpio_set_mode(GPIO_TypeDef* gpio, uint8_t pin, uint8_t mode) {
    gpio->MODER &= ~(3 << (pin * 2));      // 기존 모드 클리어
    gpio->MODER |= (mode << (pin * 2));    // 새 모드 설정
}

void gpio_write_pin(GPIO_TypeDef* gpio, uint8_t pin, uint8_t state) {
    if (state) {
        gpio->BSRR = (1 << pin);           // Set pin
    } else {
        gpio->BSRR = (1 << (pin + 16));    // Reset pin
    }
}
```

### 3. LED HAL 계층 (led_hal.h)

```c
#ifndef LED_HAL_H
#define LED_HAL_H

// LED 상태 정의
typedef enum {
    LED_OFF = 0,
    LED_ON  = 1
} LED_State_t;

// LED 초기화 및 제어 함수
void led_init(void);
void led_set_state(LED_State_t state);
void led_toggle(void);

#endif
```

### 4. LED HAL 계층 (led_hal.c)

```c
#include "led_hal.h"
#include "gpio_driver.h"

// LED 핀 정의
#define LED_PORT    GPIOA
#define LED_PIN     5

void led_init(void) {
    // GPIO 클록 활성화
    gpio_clock_enable(LED_PORT);
    
    // LED 핀을 출력 모드로 설정
    gpio_set_mode(LED_PORT, LED_PIN, 1);  // 1 = Output mode
}

void led_set_state(LED_State_t state) {
    gpio_write_pin(LED_PORT, LED_PIN, state);
}

void led_toggle(void) {
    static LED_State_t current_state = LED_OFF;
    current_state = (current_state == LED_OFF) ? LED_ON : LED_OFF;
    led_set_state(current_state);
}
```

### 5. 애플리케이션 계층 (main.c)

```c
#include "led_hal.h"

// 간단한 딜레이 함수
void delay(volatile uint32_t count) {
    while(count--);
}

int main(void) {
    // LED 초기화
    led_init();
    
    while(1) {
        led_toggle();        // LED 토글
        delay(1000000);      // 딜레이
    }
    
    return 0;
}
```

## 🎯 모듈화의 장점

### 1. **코드 재사용성**
- GPIO 드라이버는 다른 프로젝트에서도 사용 가능
- LED HAL은 다른 LED 프로젝트에서 재사용 가능

### 2. **유지보수성**
- 각 계층별로 독립적인 수정 가능
- 버그 발생 시 해당 계층만 집중 디버깅

### 3. **확장성**
- 새로운 하드웨어 추가 시 드라이버 계층만 수정
- 새로운 기능 추가 시 해당 계층에만 추가

### 4. **협업 효율성**
- 계층별로 업무 분담 가능
- 인터페이스가 명확해 협업 시 충돌 최소화

## 📝 계층 간 통신 규칙

### 1. **단방향 의존성**
- 상위 계층이 하위 계층을 호출
- 하위 계층은 상위 계층을 직접 호출하지 않음

### 2. **인터페이스 표준화**
- 각 계층 간 명확한 인터페이스 정의
- 헤더 파일을 통한 함수 원형 제공

### 3. **데이터 캡슐화**
- 각 계층의 내부 구현은 숨김
- 공개 인터페이스만을 통한 접근

## 🚀 실제 프로젝트 적용 팁

### 1. **점진적 리팩토링**
```c
// Before: 모든 코드가 main.c에
int main(void) {
    // GPIO 클록 설정
    RCC_AHB1ENR |= (1 << 0);
    
    // GPIO 모드 설정
    GPIOA->MODER &= ~(3 << 10);
    GPIOA->MODER |= (1 << 10);
    
    while(1) {
        GPIOA->BSRR = (1 << 5);
        delay(1000000);
        GPIOA->BSRR = (1 << 21);
        delay(1000000);
    }
}

// After: 계층별 분리
int main(void) {
    led_init();
    
    while(1) {
        led_toggle();
        delay(1000000);
    }
}
```

### 2. **설정 파일 활용**
```c
// config.h
#define LED1_PORT    GPIOA
#define LED1_PIN     5

#define LED2_PORT    GPIOB
#define LED2_PIN     3
```

### 3. **에러 처리 추가**
```c
typedef enum {
    HAL_OK,
    HAL_ERROR,
    HAL_BUSY,
    HAL_TIMEOUT
} HAL_StatusTypeDef;

HAL_StatusTypeDef led_init(void);
```

## 📚 참고 자료

이 포스트는 다음 GitHub 레포지토리의 실습 내용을 바탕으로 작성되었습니다:
- [ARM Repository](https://github.com/goeun-oh/ARM)

다음 포스트에서는 더 복잡한 하드웨어 추상화 계층 구현에 대해 알아보겠습니다.
