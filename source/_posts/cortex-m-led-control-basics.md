---
title: 4. 바텀부터 LED 제어하기
date: 2025-06-23
categories:
  - Cortex-M
  - ARM
  - Embedded
tags:
  - 레지스터
  - GPIO
  - RCC
  - LED제어
layout: post
---

# 바텀부터 LED 제어하기

이번 포스트에서는 STM32CubeIDE의 HAL 라이브러리를 사용하지 않고, 레지스터를 직접 제어하여 LED를 제어하는 방법을 알아본다.

## 🎯 개발 목표

아래 순서대로 LED 제어 프로그램을 구현한다:

```c
#include <stdint.h>

int main(void)
{
    /*1. Enable clock access to GPIOA */
    /*2. Set PA5 as output pin*/
    
    while(1){
        /*3. Set PA5 high*/
        /*4. Set PA5 low*/
    }
}
```

## ⚡ 1단계: RCC 클럭 설정

### Clock Tree 이해

STM32에서는 RCC가 GPIOA에 클럭을 공급해야 한다.

![Clock Tree](https://raw.githubusercontent.com/goeun-oh/ARM/main/0618/1.%EA%B5%AC%EC%A1%B0%EC%B2%B4/image.png)

**클럭 종류:**

**내부 CLOCK**
- **HSI (High Speed Internal Clock)**: System 동작용 CLOCK
- **LSI (Low Speed Internal Clock)**: RTC 내부 CLOCK
- 특징: 온도나 주변환경에 따라 클럭이 변할 수 있음

**외부 CLOCK**
- 내부 클럭에 비해 정확한 클럭 제공
- 안정적인 동작 보장

### RCC 레지스터 설정

**메모리 맵:**

![RCC 레지스터](https://raw.githubusercontent.com/goeun-oh/ARM/main/0618/1.%EA%B5%AC%EC%A1%B0%EC%B2%B4/image-3.png)

- **RCC Base Address**: `0x4002 3800`
- **AHB1ENR Offset**: `0x30`
- **최종 주소**: `0x4002 3830`

GPIOAEN을 1로 설정하면 GPIOA에 클럭이 공급된다.

```c
/*1. Enable clock access to GPIOA */
*(volatile uint32_t *)0x40023830 |= (1U << 0); 
```

## 📍 2단계: GPIO 레지스터 설정

### GPIO Mode Register 설정

![GPIO Mode Register](https://raw.githubusercontent.com/goeun-oh/ARM/main/0618/1.%EA%B5%AC%EC%A1%B0%EC%B2%B4/image-4.png)

**설정 값:**
- **Register Address**: `0x4002 0000`
- **설정 값**: `MODER[11:10] = 2'b01` (Output mode)

```c
/*2. Set PA5 as output pin*/
*(volatile uint32_t *)0x40020000 |= (1U << 10);   // Set bit 10
*(volatile uint32_t *)0x40020000 &= ~(1U << 11);  // Clear bit 11
```

> **참고**: `1U`는 `unsigned int`를 의미한다.

### GPIO Output Type Register

![GPIO Output Type Register](https://raw.githubusercontent.com/goeun-oh/ARM/main/0618/1.%EA%B5%AC%EC%A1%B0%EC%B2%B4/image-5.png)

기본값이 **Push-Pull**이므로 별도 설정이 필요하지 않다.

## 🔄 3단계: LED Toggle 구현

GPIO Output Data Register (ODR)를 사용하여 LED를 제어한다.

![GPIO ODR Register](https://raw.githubusercontent.com/goeun-oh/ARM/main/0618/1.%EA%B5%AC%EC%A1%B0%EC%B2%B4/image-6.png)

```c
// LED ON
*(volatile uint32_t *)0x40020014 |= (1U << 5);
for(int i=0; i<100000; i++){}

// LED OFF
*(volatile uint32_t *)0x40020014 &= ~(1U << 5);
for(int i=0; i<100000; i++){}
```

## 📝 4단계: 전체 코드

```c
#include <stdint.h>

int main(void)
{
   /*1. Enable clock access to GPIOA */
   *(volatile uint32_t *)0x40023830 |= (1U << 0); // RCC AHB1ENR

   /*2. Set PA5 as output pin */
   *(volatile uint32_t *)0x40020000 |= (1U << 10);// GPIOA_MODER output mode
   *(volatile uint32_t *)0x40020000 &= ~(1U << 11);// GPIOA_MODER output mode

   while(1)
   {
      /*3. Set PA5 high */
      *(volatile uint32_t *)0x40020014 |= (1U <<5);
      for(int i = 0; i<100000; i++){}
      
      /*4. Set PA5 low */
      *(volatile uint32_t *)0x40020014 &= ~(1U <<5);
      for(int i = 0; i<100000; i++){}
   }
}
```

## 🔧 5단계: 코드 개선 - Define 활용

하드코딩된 주소를 매크로로 정의하여 가독성을 높인다:

```c
#include <stdint.h>

#define RCC_AHB1ENR *(volatile uint32_t *)0x40023830
#define GPIOA_MODER *(volatile uint32_t *)0x40020000
#define GPIOA_ODR *(volatile uint32_t *)0x40020014

void delay();

int main(void)
{
   /*1. Enable clock access to GPIOA */
   RCC_AHB1ENR |= (1U << 0);

   /*2. Set PA5 as output pin */
   GPIOA_MODER |= (1U << 10);
   GPIOA_MODER &= ~(1U << 11);

   while(1)
   {
      /*3. Set PA5 high */
      GPIOA_ODR |= (1U <<5);
      delay();
      
      /*4. Set PA5 low */
      GPIOA_ODR &= ~(1U <<5);
      delay();
   }
}

void delay(){
    for(int i = 0; i<100000; i++){}
}
```

## 🏗️ 6단계: 범용적 설계를 위한 베이스 주소 정의

모든 GPIO에 적용할 수 있도록 범용적으로 설계한다:

![Memory Map](https://raw.githubusercontent.com/goeun-oh/ARM/main/0618/1.%EA%B5%AC%EC%A1%B0%EC%B2%B4/image-7.png)

```c
#define PERIPH_BASE         (0x40000000UL)
#define APB1PERIPH_OFFSET   (0x00000UL)
#define APB2PERIPH_OFFSET   (0x10000UL)
#define AHB1PERIPH_OFFSET   (0x20000UL)

#define APB1PERIPH_BASE     (PERIPH_BASE + APB1PERIPH_OFFSET)
#define APB2PERIPH_BASE     (PERIPH_BASE + APB2PERIPH_OFFSET)
#define AHB1PERIPH_BASE     (PERIPH_BASE + AHB1PERIPH_OFFSET)

#define GPIOA_OFFSET        (0x0000UL)
#define GPIOB_OFFSET        (0x0400UL)
#define GPIOC_OFFSET        (0x0800UL)
#define GPIOD_OFFSET        (0x0C00UL)
#define RCC_OFFSET          (0x3800UL)

#define GPIOA_BASE          (AHB1PERIPH_BASE + GPIOA_OFFSET)
#define GPIOB_BASE          (AHB1PERIPH_BASE + GPIOB_OFFSET)
#define GPIOC_BASE          (AHB1PERIPH_BASE + GPIOC_OFFSET)
#define GPIOD_BASE          (AHB1PERIPH_BASE + GPIOD_OFFSET)
#define RCC_BASE            (AHB1PERIPH_BASE + RCC_OFFSET)
```

## 💡 주요 개념 정리

### volatile 키워드의 중요성

```c
*(volatile uint32_t *)0x40023830 |= (1U << 0);
```

**volatile**을 사용하는 이유:
- 컴파일러 최적화 방지
- 메모리 맵드 레지스터는 하드웨어에 의해 값이 변경될 수 있음
- 매번 메모리에서 값을 읽어와야 함을 보장

### 비트 연산의 활용

**비트 설정 (Set bit):**
```c
register |= (1U << bit_position);  // 해당 비트를 1로 설정
```

**비트 클리어 (Clear bit):**
```c
register &= ~(1U << bit_position); // 해당 비트를 0으로 설정
```

**비트 토글 (Toggle bit):**
```c
register ^= (1U << bit_position);  // 해당 비트를 반전
```

## 🧪 테스트 및 검증

### 예상 동작

1. **초기화**: RCC에서 GPIOA 클럭 활성화
2. **설정**: PA5 핀을 Output 모드로 설정
3. **동작**: LED가 약 0.1초 간격으로 깜박임

### 디버깅 팁

**1. 클럭 설정 확인**
```c
// RCC AHB1ENR 레지스터 값 확인
uint32_t rcc_value = *(volatile uint32_t *)0x40023830;
// GPIOA 클럭이 활성화되었는지 확인 (bit 0이 1인지)
```

**2. GPIO 모드 확인**
```c
// GPIOA MODER 레지스터 값 확인
uint32_t moder_value = *(volatile uint32_t *)0x40020000;
// PA5가 output 모드로 설정되었는지 확인 (bit 10=1, bit 11=0)
```

## 📋 정리

이번 포스트에서는 레지스터 직접 제어를 통한 LED 제어 방법을 다뤘다:

1. **RCC 설정**: GPIOA 클럭 활성화
2. **GPIO 설정**: PA5를 Output 모드로 설정
3. **LED 제어**: ODR 레지스터를 통한 ON/OFF 제어
4. **코드 개선**: Define을 활용한 가독성 향상
5. **범용 설계**: 베이스 주소를 활용한 확장 가능한 구조

다음 포스트에서는 구조체를 활용하여 더욱 체계적인 코드 구조를 만들어보겠다.

---

**이전 포스트**: [3. 개발 환경 구성](/posts/cortex-m-development-environment)  
**다음 포스트**: [5. 코드 개선 과정](/posts/cortex-m-code-improvement)
