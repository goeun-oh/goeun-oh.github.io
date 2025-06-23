---
title: 5-3. 코드 개선 과정 - 고급 기법과 성능
date: 2025-06-23
categories:
  - Cortex-M
  - ARM
  - Embedded
tags:
  - 고급기법
  - 성능최적화
  - BSRR
  - 비트필드
layout: post
---

# 코드 개선 과정 - 고급 기법과 성능

이번 포스트에서는 구조체 기반 코드의 고급 활용 기법과 성능 최적화 방법을 다룬다.

## 🔧 고급 활용 기법

### BSRR 레지스터 활용

BSRR(Bit Set/Reset Register)을 사용하면 원자적 연산이 가능하다:

```c
// 기존 방식 (Read-Modify-Write, 3단계 연산)
GPIOA->ODR |= (1U << 5);   // 1. 읽기 → 2. 수정 → 3. 쓰기
GPIOA->ODR &= ~(1U << 5);  // 1. 읽기 → 2. 수정 → 3. 쓰기

// BSRR 방식 (원자적 연산, 1단계)
GPIOA->BSRR = (1U << 5);       // Set PA5 (직접 쓰기)
GPIOA->BSRR = (1U << (5+16));  // Reset PA5 (직접 쓰기)
```

**BSRR 레지스터 구조:**
```
Bit 31-16: Reset bits (1 쓰면 해당 핀 Reset)
Bit 15-0:  Set bits   (1 쓰면 해당 핀 Set)

예시: BSRR = 0x00100020
- Bit 20 (16+4): GPIOA 핀 4를 Reset
- Bit 5: GPIOA 핀 5를 Set
```

### 다중 핀 제어

구조체를 사용하면 다중 핀 제어가 효율적이다:

```c
// 여러 핀을 한 번에 설정
GPIOA->ODR |= (1U << 5) | (1U << 6) | (1U << 7);  // PA5, PA6, PA7 동시 ON

// BSRR을 사용한 다중 핀 제어 (더 효율적)
GPIOA->BSRR = (1U << 5) | (1U << 6);  // PA5, PA6 Set
GPIOA->BSRR = (1U << (7+16));         // PA7 Reset

// 동시에 Set과 Reset (가장 효율적)
GPIOA->BSRR = (1U << 5) | (1U << 6) | (1U << (7+16));  // PA5,6 Set, PA7 Reset
```

### 비트 필드 매크로 정의

더욱 명확한 코드를 위해 비트 위치와 마스크를 정의한다:

```c
// GPIO MODER 레지스터 비트 정의
#define GPIO_MODER_INPUT    (0x00)
#define GPIO_MODER_OUTPUT   (0x01)
#define GPIO_MODER_AF       (0x02)
#define GPIO_MODER_ANALOG   (0x03)

// 핀별 비트 위치 계산 매크로
#define GPIO_MODER_PIN(pin) ((pin) * 2)
#define GPIO_MODER_MASK(pin) (0x3U << GPIO_MODER_PIN(pin))

// 개선된 핀 설정 함수
void GPIO_SetMode(GPIO_TypeDef *GPIOx, uint32_t pin, uint32_t mode)
{
    uint32_t pos = GPIO_MODER_PIN(pin);
    GPIOx->MODER &= ~(0x3U << pos);     // 기존 값 클리어
    GPIOx->MODER |= (mode << pos);      // 새 값 설정
}

// 핀 읽기 함수
uint32_t GPIO_ReadPin(GPIO_TypeDef *GPIOx, uint32_t pin)
{
    return ((GPIOx->IDR & (1U << pin)) ? 1 : 0);
}

// 핀 쓰기 함수  
void GPIO_WritePin(GPIO_TypeDef *GPIOx, uint32_t pin, uint32_t value)
{
    if (value) {
        GPIOx->BSRR = (1U << pin);        // Set
    } else {
        GPIOx->BSRR = (1U << (pin + 16)); // Reset
    }
}
```

## 🚀 개선된 최종 코드

### 헬퍼 함수를 사용한 버전

```c
#include <stdint.h>

// 베이스 주소 정의
#define PERIPH_BASE (0x40000000UL)
#define AHB1PERIPH_OFFSET (0x20000UL)
#define AHB1PERIPH_BASE (PERIPH_BASE + AHB1PERIPH_OFFSET)
#define GPIOA_BASE (AHB1PERIPH_BASE + 0x0000UL)
#define RCC_AHB1ENR *(volatile uint32_t *)0x40023830

// GPIO 구조체 정의
typedef struct{
   volatile uint32_t MODER;
   volatile uint32_t OTYPER;
   volatile uint32_t OSPEEDR;
   volatile uint32_t PUPDR;
   volatile uint32_t IDR;
   volatile uint32_t ODR;
   volatile uint32_t BSRR;
   volatile uint32_t LCKR;
   volatile uint32_t AFR[2];
}GPIO_TypeDef;

#define GPIOA ((GPIO_TypeDef *)(GPIOA_BASE))

// GPIO 모드 정의
#define GPIO_MODER_OUTPUT   (0x01)
#define GPIO_MODER_PIN(pin) ((pin) * 2)

// 헬퍼 함수들
void GPIO_SetMode(GPIO_TypeDef *GPIOx, uint32_t pin, uint32_t mode);
void GPIO_WritePin(GPIO_TypeDef *GPIOx, uint32_t pin, uint32_t value);
void delay();

int main(void)
{
    /*1. Enable clock access to GPIOA */
    RCC_AHB1ENR |= (1U << 0);

    /*2. Set PA5 as output pin */
    GPIO_SetMode(GPIOA, 5, GPIO_MODER_OUTPUT);

    while(1)
    {
        /*3. Toggle PA5 using BSRR */
        GPIO_WritePin(GPIOA, 5, 1);  // Set
        delay();
        GPIO_WritePin(GPIOA, 5, 0);  // Reset
        delay();
    }
}

// 함수 구현
void GPIO_SetMode(GPIO_TypeDef *GPIOx, uint32_t pin, uint32_t mode)
{
    uint32_t pos = GPIO_MODER_PIN(pin);
    GPIOx->MODER &= ~(0x3U << pos);     // 기존 값 클리어
    GPIOx->MODER |= (mode << pos);      // 새 값 설정
}

void GPIO_WritePin(GPIO_TypeDef *GPIOx, uint32_t pin, uint32_t value)
{
    if (value) {
        GPIOx->BSRR = (1U << pin);        // Set
    } else {
        GPIOx->BSRR = (1U << (pin + 16)); // Reset
    }
}

void delay(){
    for(int i = 0; i<100000; i++){}
}
```

## 📊 성능과 메모리 분석

### 메모리 사용량 비교

구조체를 사용해도 실제 메모리 사용량은 변하지 않는다:

```c
// Define 방식
#define GPIOA_ODR *(volatile uint32_t *)0x40020014
GPIOA_ODR |= (1U << 5);

// 구조체 방식  
GPIOA->ODR |= (1U << 5);

// 둘 다 컴파일 후 동일한 어셈블리 코드 생성
```

### 컴파일 결과 비교

두 방식 모두 최적화 후에는 동일한 어셈블리 코드를 생성한다:

```assembly
; Define 방식과 구조체 방식 모두 다음과 같이 컴파일됨

; 최적화 전 (Debug 모드)
ldr r3, =0x40020014    ; GPIOA ODR 주소 로드
ldr r2, [r3]           ; 현재 값 읽기
orr r2, r2, #32        ; 비트 5 설정 (1 << 5)
str r2, [r3]           ; 값 쓰기

; 최적화 후 (Release 모드, -O2)
mov r2, #32            ; 즉시값 32 (1 << 5)
str r2, [r3, #24]      ; GPIOA->BSRR에 직접 쓰기 (더 효율적)
```

### BSRR vs ODR 성능 비교

**ODR 사용 (Read-Modify-Write):**
```c
GPIOA->ODR |= (1U << 5);  // 3 cycles: Read + Modify + Write
```

**BSRR 사용 (Direct Write):**
```c
GPIOA->BSRR = (1U << 5);  // 1 cycle: Write only
```

**성능 차이:**
- BSRR이 ODR보다 약 **3배 빠르다**
- 원자적 연산으로 **인터럽트 안전성** 보장
- 다중 핀 제어 시 **더욱 효율적**

## 🛡️ 인터럽트 안전성

### 문제 상황

```c
// 인터럽트가 발생할 수 있는 상황
GPIOA->ODR |= (1U << 5);   // 3단계 연산 중간에 인터럽트 발생 가능

// 만약 인터럽트에서 같은 레지스터를 수정한다면?
void interrupt_handler() {
    GPIOA->ODR |= (1U << 6);  // 충돌 가능성!
}
```

**문제점:**
1. **경쟁 상태(Race Condition)**: 메인 코드와 인터럽트가 동시에 ODR 수정
2. **데이터 손실**: 중간에 끼어든 수정으로 인한 값 손실
3. **예측 불가능한 동작**: 타이밍에 따라 결과가 달라짐

### BSRR을 사용한 해결

```c
// 원자적 연산으로 안전함
GPIOA->BSRR = (1U << 5);   // 1단계 연산, 인터럽트 안전

void interrupt_handler() {
    GPIOA->BSRR = (1U << 6);  // 충돌 없음! 각자 독립적으로 동작
}
```

**장점:**
1. **원자성**: 단일 쓰기 연산으로 완료
2. **안전성**: 인터럽트와 메인 코드가 서로 영향 없음
3. **효율성**: 더 빠른 실행 속도

## 💡 핵심 개념 정리

### 구조체와 하드웨어의 일치

STM32의 실제 하드웨어 레지스터 배치와 구조체가 정확히 일치한다:

```c
// 하드웨어 레지스터 주소    구조체 멤버
// 0x40020000         ←→    MODER
// 0x40020004         ←→    OTYPER  
// 0x40020008         ←→    OSPEEDR
// 0x4002000C         ←→    PUPDR
// 0x40020010         ←→    IDR
// 0x40020014         ←→    ODR
// 0x40020018         ←→    BSRR
```

### 타입 안전성의 실제 효과

```c
// 컴파일 타임에 에러 감지
GPIOA->INVALID_REGISTER = 0;  // 컴파일 에러!
GPIOA->MODER = "string";      // 타입 에러!

// IDE 자동완성으로 개발 효율성 향상
GPIOA->  // 자동으로 사용 가능한 멤버들을 표시
```

## 📋 정리

이번 포스트에서는 구조체 기반 코드의 고급 기법을 다뤘다:

1. **BSRR 활용**: 원자적 연산으로 성능과 안전성 향상
2. **다중 핀 제어**: 효율적인 다중 GPIO 제어 방법
3. **비트 필드 매크로**: 가독성과 유지보수성 향상
4. **성능 분석**: 메모리 사용량과 컴파일 결과 비교
5. **인터럽트 안전성**: 원자적 연산의 중요성

**핵심 개선 효과:**
- 성능 3배 향상 (BSRR 사용)
- 인터럽트 안전성 확보
- 타입 안전성으로 버그 예방
- IDE 지원으로 개발 효율성 증대

다음 포스트에서는 실제 프로젝트 적용 예시와 디버깅 기법을 알아보겠다.

---

**이전 포스트**: [5-2. 코드 개선 과정 - 구조체 활용](/posts/cortex-m-code-improvement-struct)  
**다음 포스트**: [5-4. 코드 개선 과정 - 실제 프로젝트 적용](/posts/cortex-m-code-improvement-project)
