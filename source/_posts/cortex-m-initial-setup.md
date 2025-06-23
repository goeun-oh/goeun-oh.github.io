---
title: Cortex-M 초기환경 세팅
date: 2025-06-23
categories:
  - Cortex-M
  - ARM
  - Embedded
tags:
  - STM32
  - GPIO
  - 초기환경
  - 구조체
  - 레지스터
layout: post
---

# Cortex-M 초기환경 세팅

STM32F411 보드를 사용하여 찐 바텀부터 설계하는 방법을 정리합니다.

## 개발 목표

아래 순서대로 LED 제어 프로그램을 만들어보겠습니다:

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

## 1. RCC 클럭 설정

### Clock Tree 이해

STM32에서는 RCC가 GPIOA에 CLK을 공급해 주어야 합니다.

**내부 CLOCK**
- **HSI (High Speed Internal Clock)**: system 동작 위한 CLOCK
- **LSI (Low Speed Internal Clock)**: RTC 내부 CLOCK

내부 CLOCK은 온도나 주변환경에 따라 CLOCK이 변하기도 합니다.

**외부 CLOCK**
내부 CLOCK에 비해 정확한 CLOCK을 제공합니다.

### RCC 레지스터 설정

**Register Map**
- RCC base addr: `0x4002 3800`
- AHB1 enable clock register offset: `0x30`
- 최종 주소: `0x4002 3830`

GPIOAEN을 1로 설정하면 GPIOA에 CLOCK을 넣어주게 됩니다.

```c
/*1. Enable clock access to GPIOA */
*(volatile uint32_t *)0x40023830 |= (1U <<0); 
```

## 2. GPIO 레지스터 설정

### GPIO Mode Register

**GPIO Mode Register 설정**
- Register addr: `0x40002000`
- Register value: `mode[11:10] = 2'b01` (Output mode)

**GPIO Output Type Register**
기본값이 push-pull이므로 별도 설정이 필요하지 않습니다.

### GPIO 설정 코드

```c
/*2. Set PA5 as output pin*/
*(volatile uint32_t *)0x40020000 |= (1U << 10);   // Set bit 10
*(volatile uint32_t *)0x40020000 &= ~(1U << 11);  // Clear bit 11
```

> **참고**: `1U`는 `unsigned int`를 의미합니다.

## 3. LED Toggle 구현

GPIO Output Data Register (ODR)를 사용하여 LED를 제어합니다.

```c
// LED ON
*(volatile uint32_t *)0x40020014 |= (1U << 5);
for(int i=0; i<100000; i++){}

// LED OFF
*(volatile uint32_t *)0x40020014 &= ~(1U << 5);
for(int i=0; i<100000; i++){}
```

## 4. 전체 코드

```c
#include <stdint.h>

int main(void)
{
   /*1. Enable clock access to GPIOA */
   // RCC clock control
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

## 5. 코드 개선: Define 활용

가독성을 높이기 위해 define을 사용하여 하드코딩된 주소를 매크로로 정의합니다:

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

## 6. 범용적 설계를 위한 베이스 주소 정의

GPIOA뿐만 아니라 모든 GPIO에 적용할 수 있도록 범용적으로 설계합니다:

```c
#define PERIPH_BASE (0x40000000UL)
#define APB1PERIPH_OFFSET (0x00000UL)
#define APB2PERIPH_OFFSET (0x10000UL)
#define AHB1PERIPH_OFFSET (0x20000UL)

#define APB1PERIPH_BASE (PERIPH_BASE + APB1PERIPH_OFFSET)
#define APB2PERIPH_BASE (PERIPH_BASE + APB2PERIPH_OFFSET)
#define AHB1PERIPH_BASE (PERIPH_BASE + AHB1PERIPH_OFFSET)

#define GPIOA_OFFSET (0x0000UL)
#define GPIOB_OFFSET (0x0400UL)
#define GPIOC_OFFSET (0x0800UL)
#define GPIOD_OFFSET (0x0C00UL)

#define GPIOA_BASE (AHB1PERIPH_BASE + GPIOA_OFFSET)
#define GPIOB_BASE (AHB1PERIPH_BASE + GPIOB_OFFSET)
#define GPIOC_BASE (AHB1PERIPH_BASE + GPIOC_OFFSET)
#define GPIOD_BASE (AHB1PERIPH_BASE + GPIOD_OFFSET)
```

## 7. 구조체 사용의 중요성

### 구조체 사용 전의 문제점

각 GPIO별로 모든 레지스터를 개별적으로 정의해야 합니다:

```c
// GPIOA 레지스터들
#define GPIOA_MODER   *(volatile uint32_t *)(GPIOA_BASE + 0x00)
#define GPIOA_OTYPER  *(volatile uint32_t *)(GPIOA_BASE + 0x04)
#define GPIOA_OSPEEDR *(volatile uint32_t *)(GPIOA_BASE + 0x08)
#define GPIOA_PUPDR   *(volatile uint32_t *)(GPIOA_BASE + 0x0C)
#define GPIOA_IDR     *(volatile uint32_t *)(GPIOA_BASE + 0x10)
#define GPIOA_ODR     *(volatile uint32_t *)(GPIOA_BASE + 0x14)
// ... 계속

// GPIOB 레지스터들
#define GPIOB_MODER   *(volatile uint32_t *)(GPIOB_BASE + 0x00)
#define GPIOB_OTYPER  *(volatile uint32_t *)(GPIOB_BASE + 0x04)
// ... 계속
```

### 구조체 사용 후의 개선

하나의 구조체로 모든 GPIO에 적용할 수 있습니다:

```c
typedef struct{
   volatile uint32_t MODER;      // 0x00
   volatile uint32_t OTYPER;     // 0x04
   volatile uint32_t OSPEEDR;    // 0x08
   volatile uint32_t PUPDR;      // 0x0C
   volatile uint32_t IDR;        // 0x10
   volatile uint32_t ODR;        // 0x14
   volatile uint32_t BSRR;       // 0x18
   volatile uint32_t LCKR;       // 0x1C
   volatile uint32_t AFR[2];     // 0x20, 0x24 (AFRL, AFRH)
}GPIO_TypeDef;

#define GPIOA ((GPIO_TypeDef *)(GPIOA_BASE))
#define GPIOB ((GPIO_TypeDef *)(GPIOB_BASE))
#define GPIOC ((GPIO_TypeDef *)(GPIOC_BASE))
```

### 구조체를 사용한 최종 코드

```c
#include <stdint.h>
#include "stm32f411xe.h"

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
      GPIOA->ODR |= (1U <<5);
      delay();
      
      /*4. Set PA5 low */
      GPIOA->ODR &= ~(1U <<5);
      delay();
   }
}

void delay(){
    for(int i = 0; i<100000; i++){}
}
```

## 8. SW Stack과 폴더 분리

### SW Stack 개념

SW의 흐름은 위에서 아래로 진행됩니다. SW가 HW를 제어해야 하는 구조입니다.

### 폴더 구조 분리

GPIO 관련 기능들을 별도 폴더로 분리하여 모듈화를 진행합니다:

```
Project/
├── Src/
│   ├── main.c
│   └── driver/
│       ├── GPIO/
│       │   ├── GPIO.h
│       │   └── GPIO.c
│       └── LedBar/
│           ├── LedBar.h
│           └── LedBar.c
```

이를 통해 코드의 재사용성과 유지보수성을 크게 향상시킬 수 있습니다.

## 마무리

이번 포스트에서는 STM32F411에서 GPIO를 제어하기 위한 기본적인 초기환경 설정 방법을 살펴보았습니다. 레지스터 직접 제어부터 구조체를 활용한 모듈화까지 단계적으로 개선해나가는 과정을 통해 임베디드 프로그래밍의 기초를 다질 수 있었습니다.

다음 포스트에서는 이를 바탕으로 더 복잡한 기능들을 구현해보겠습니다.
