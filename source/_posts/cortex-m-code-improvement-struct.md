---
title: 5-2. 코드 개선 과정 - 구조체 활용
date: 2025-06-23
categories:
  - Cortex-M
  - ARM
  - Embedded
tags:
  - 구조체
  - 코드개선
  - 모듈화
  - 타입안전성
layout: post
---

# 코드 개선 과정 - 구조체 활용

이번 포스트에서는 Define 방식의 한계를 극복하고 구조체를 활용하여 더욱 체계적이고 재사용 가능한 코드를 만드는 방법을 다룬다.

## 🚨 Define 방식의 한계

### 기존 Define 방식의 문제점

이전 포스트에서 개선한 코드도 여전히 다음과 같은 문제가 있다:

```c
// 문제가 있는 방식 - 반복적이고 비효율적
#define GPIOA_MODER   *(volatile uint32_t *)(GPIOA_BASE + 0x00)
#define GPIOA_OTYPER  *(volatile uint32_t *)(GPIOA_BASE + 0x04)
#define GPIOA_OSPEEDR *(volatile uint32_t *)(GPIOA_BASE + 0x08)
#define GPIOA_PUPDR   *(volatile uint32_t *)(GPIOA_BASE + 0x0C)
#define GPIOA_IDR     *(volatile uint32_t *)(GPIOA_BASE + 0x10)
#define GPIOA_ODR     *(volatile uint32_t *)(GPIOA_BASE + 0x14)
#define GPIOA_BSRR    *(volatile uint32_t *)(GPIOA_BASE + 0x18)
#define GPIOA_LCKR    *(volatile uint32_t *)(GPIOA_BASE + 0x1C)
#define GPIOA_AFRL    *(volatile uint32_t *)(GPIOA_BASE + 0x20)
#define GPIOA_AFRH    *(volatile uint32_t *)(GPIOA_BASE + 0x24)

// GPIOB에 대해서도 동일하게 반복
#define GPIOB_MODER   *(volatile uint32_t *)(GPIOB_BASE + 0x00)
#define GPIOB_OTYPER  *(volatile uint32_t *)(GPIOB_BASE + 0x04)
#define GPIOB_OSPEEDR *(volatile uint32_t *)(GPIOB_BASE + 0x08)
// ... 계속 반복

// GPIOC, GPIOD, GPIOE... 모두 동일하게 반복해야 함
```

**주요 문제점:**
1. **반복적 정의**: 각 GPIO마다 동일한 패턴 반복
2. **확장성 부족**: 새 GPIO 추가 시 많은 코드 작성 필요
3. **유지보수 어려움**: 레지스터 구조 변경 시 모든 정의 수정 필요
4. **타입 안전성 없음**: 컴파일러가 잘못된 사용을 감지하기 어려움

## 📦 구조체 사용의 중요성

### 구조체를 사용한 해결책

하나의 구조체 정의로 모든 GPIO에 적용할 수 있다:

```c
// GPIO 레지스터 구조체 정의
typedef struct{
   volatile uint32_t MODER;      // 0x00 - Mode register
   volatile uint32_t OTYPER;     // 0x04 - Output type register  
   volatile uint32_t OSPEEDR;    // 0x08 - Output speed register
   volatile uint32_t PUPDR;      // 0x0C - Pull-up/pull-down register
   volatile uint32_t IDR;        // 0x10 - Input data register
   volatile uint32_t ODR;        // 0x14 - Output data register
   volatile uint32_t BSRR;       // 0x18 - Bit set/reset register
   volatile uint32_t LCKR;       // 0x1C - Configuration lock register
   volatile uint32_t AFR[2];     // 0x20, 0x24 - Alternate function registers (AFRL, AFRH)
}GPIO_TypeDef;
```

### 구조체 멤버 설명

**주요 레지스터별 용도:**

**MODER (Mode Register)**
- 각 핀의 모드 설정 (Input/Output/AF/Analog)
- 2비트씩 할당 (핀 0: [1:0], 핀 1: [3:2], ...)

**OTYPER (Output Type Register)**  
- Output 타입 설정 (Push-pull/Open-drain)
- 1비트씩 할당

**ODR (Output Data Register)**
- 출력 데이터 설정
- 1비트씩 할당 (1: High, 0: Low)

**IDR (Input Data Register)**
- 입력 데이터 읽기
- 읽기 전용 레지스터

**BSRR (Bit Set/Reset Register)**
- 원자적 비트 설정/리셋
- 상위 16비트: Reset, 하위 16비트: Set

**AFR[2] (Alternate Function Register)**
- 대체 기능 설정
- AFR[0]: 핀 0-7, AFR[1]: 핀 8-15

## 🎯 구조체 포인터 정의

### 각 GPIO를 구조체 포인터로 정의

```c
// 구조체 포인터로 각 GPIO 정의
#define GPIOA ((GPIO_TypeDef *)(GPIOA_BASE))
#define GPIOB ((GPIO_TypeDef *)(GPIOB_BASE))
#define GPIOC ((GPIO_TypeDef *)(GPIOC_BASE))
#define GPIOD ((GPIO_TypeDef *)(GPIOD_BASE))
#define GPIOE ((GPIO_TypeDef *)(GPIOE_BASE))
```

### 포인터 타입 캐스팅 이해

```c
#define GPIOA ((GPIO_TypeDef *)(GPIOA_BASE))
```

**동작 원리:**
1. `GPIOA_BASE`: 32비트 정수 주소값
2. `(GPIO_TypeDef *)`: GPIO_TypeDef 구조체 포인터로 타입 캐스팅
3. `GPIOA->MODER`: 구조체 멤버 접근 연산자 사용

**메모리 매핑:**
```
GPIOA_BASE (0x40020000) ──┐
                          │
                          ▼
┌─────────────────────────────┐
│ MODER    (0x40020000)      │ ← GPIOA->MODER
│ OTYPER   (0x40020004)      │ ← GPIOA->OTYPER  
│ OSPEEDR  (0x40020008)      │ ← GPIOA->OSPEEDR
│ PUPDR    (0x4002000C)      │ ← GPIOA->PUPDR
│ IDR      (0x40020010)      │ ← GPIOA->IDR
│ ODR      (0x40020014)      │ ← GPIOA->ODR
│ BSRR     (0x40020018)      │ ← GPIOA->BSRR
│ LCKR     (0x4002001C)      │ ← GPIOA->LCKR
│ AFR[0]   (0x40020020)      │ ← GPIOA->AFR[0]
│ AFR[1]   (0x40020024)      │ ← GPIOA->AFR[1]
└─────────────────────────────┘
```

## 🚀 구조체를 사용한 최종 코드

### 완성된 코드

```c
#include <stdint.h>
#include "stm32f411xe.h"  // STM32 표준 헤더 파일

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

// GPIO 포인터 정의
#define GPIOA ((GPIO_TypeDef *)(GPIOA_BASE))

void delay();

int main(void)
{
   /*1. Enable clock access to GPIOA */
   RCC_AHB1ENR |= (1U << 0);

   /*2. Set PA5 as output pin */
   GPIOA->MODER |= (1U << 10);
   GPIOA->MODER &= ~(1U << 11);

   while(1)
   {
      /*3. Set PA5 high */
      GPIOA->ODR |= (1U << 5);
      delay();
      
      /*4. Set PA5 low */
      GPIOA->ODR &= ~(1U << 5);
      delay();
   }
}

void delay(){
    for(int i = 0; i<100000; i++){}
}
```

## ✨ 구조체 사용의 장점

### 1. 간결성과 재사용성

**Before (Define 방식):**
```c
// 각 GPIO마다 개별 정의 필요 (40줄 이상)
#define GPIOA_ODR *(volatile uint32_t *)(GPIOA_BASE + 0x14)
#define GPIOB_ODR *(volatile uint32_t *)(GPIOB_BASE + 0x14)
#define GPIOC_ODR *(volatile uint32_t *)(GPIOC_BASE + 0x14)
// ... 계속
```

**After (구조체 방식):**
```c
// 하나의 구조체로 모든 GPIO 커버 (10줄)
GPIOA->ODR
GPIOB->ODR  
GPIOC->ODR
```

### 2. 확장성

새로운 GPIO 포트 추가가 매우 쉽다:

```c
// 새 GPIO 추가 (단 한 줄!)
#define GPIOF ((GPIO_TypeDef *)(GPIOF_BASE))

// 즉시 모든 레지스터 사용 가능
GPIOF->MODER = 0x12345678;
GPIOF->ODR |= (1U << 3);
```

### 3. 타입 안전성

IDE와 컴파일러가 타입 검사를 수행한다:

```c
// 잘못된 사용 시 컴파일 에러 발생
GPIOA->INVALID_REGISTER = 0;  // 컴파일 에러!

// IDE에서 자동완성 지원
GPIOA->  // 여기서 자동완성으로 사용 가능한 멤버들을 보여줌
```

### 4. 가독성 향상

```c
// 구조체 멤버 접근이 더 직관적
GPIOA->MODER |= (1U << 10);   // 명확한 의미
GPIOA->ODR ^= (1U << 5);      // 토글 의미 명확
```

## 💡 핵심 개념 정리

### 구조체와 메모리 매핑의 관계

구조체는 메모리에 연속적으로 배치된다:

```c
typedef struct{
   volatile uint32_t MODER;    // +0x00
   volatile uint32_t OTYPER;   // +0x04
   volatile uint32_t OSPEEDR;  // +0x08
   // ...
}GPIO_TypeDef;
```

이는 STM32의 실제 하드웨어 레지스터 배치와 정확히 일치한다.

### volatile 키워드의 지속적 중요성

구조체에서도 `volatile`은 여전히 중요하다:

```c
volatile uint32_t MODER;  // 컴파일러 최적화 방지
```

**이유:**
- 하드웨어 레지스터는 언제든지 값이 변경될 수 있다
- 컴파일러가 레지스터 읽기를 건너뛰지 않도록 한다

## 📋 정리

이번 포스트에서는 구조체를 활용한 코드 개선을 다뤘다:

1. **Define 방식의 한계**: 반복적이고 확장성 부족
2. **구조체 정의**: 하나의 구조체로 모든 GPIO 커버
3. **포인터 활용**: 타입 캐스팅을 통한 메모리 매핑
4. **장점 확인**: 간결성, 확장성, 타입 안전성, 가독성

**핵심 개선 효과:**
- 코드량 80% 감소
- 새 GPIO 추가 시간 90% 단축
- 컴파일 시 타입 안전성 확보
- IDE 자동완성 지원

다음 포스트에서는 구조체의 고급 활용법과 성능 분석을 알아보겠다.

---

**이전 포스트**: [5-1. 코드 개선 과정 - Define과 베이스 주소](/posts/cortex-m-code-improvement-basic)  
**다음 포스트**: [5-3. 코드 개선 과정 - 고급 기법과 성능](/posts/cortex-m-code-improvement-advanced)
