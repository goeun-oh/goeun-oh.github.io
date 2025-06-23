---
title: 7. 고급 초기환경 설정 (STM32CubeIDE 활용)
date: 2025-06-23
categories:
  - Cortex-M
  - ARM
  - Embedded
tags:
  - STM32CubeIDE
  - 고급설정
  - Timer
  - 환경구성
layout: post
---

# 고급 초기환경 설정 (STM32CubeIDE 활용)

이번 포스트에서는 Empty Project 말고 STM32CubeIDE에서 제공하는 기능을 이용해서 개발을 진행하는 고급 환경구성 방법을 다룬다.

## 🎯 고급 환경구성 개요

이제 Empty Project 말고 STM32CubeIDE에서 제공하는 것을 이용해서 개발을 진행한다.

이를 통해 더욱 체계적이고 효율적인 개발 환경을 구축할 수 있다.

## ⚙️ 1. RCC 설정

### HSE와 HSI 비교

![RCC 설정](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.mdimage-1.png)

**HSI vs HSE:**
- **HSI**: 16MHz로 고정 (내부 클럭)
- **HSE**: 외부 클럭 (8MHz, 우리가 사용하는 보드 외부 클럭은 8MHz)

**설정 방법:**
- HSE를 사용하도록 설정
- HSE를 8MHz로 설정

### PLL 설정과 클럭 분배

해당 clock이 PLL 회로로 들어가 클럭을 100MHz로 뻥튀기한다.

HCLK이 APB Prescaler를 거쳐 Peripheral Clock이 된다:
- **Timer는 100MHz로 설정된다**

![클럭 분배](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.md/image-2.png)

## 🔧 2. Debugging 설정

### Serial Wire 설정

Debugging용 Wire를 Serial Wire로 설정한다.

![디버깅 설정](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.mdimage-3.png)

**Serial Wire Debug의 장점:**
- JTAG보다 적은 핀 사용
- 효율적인 디버깅 인터페이스
- STM32에서 표준으로 사용

## 📍 3. GPIO 설정

### GPIO 핀 구성

다음과 같이 GPIO를 설정한다:

![GPIO 설정 과정](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.md%7BEAF31B8D-8800-478B-8202-5B7206C3FE05%7D.png)

### 설정 완료 확인

설정이 완료된 모습:

![설정 완료](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.md%7B029A8A1D-15A5-4883-BF37-56B66B5AEA89%7D.png)

**GPIO 설정 요점:**
- 사용할 핀들을 적절한 모드로 설정
- Input/Output/AF/Analog 모드 선택
- Pull-up/Pull-down 설정
- Output 타입 및 속도 설정

## ⏰ 4. Timer 설정

### Timer 기본 설정

다음과 같이 Timer를 설정한다:

![Timer 설정](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.mdimage-4.png)

**Timer 설정 목적:**
- 정확한 타이밍 제어
- 주기적인 인터럽트 발생
- PWM 신호 생성

### NVIC 설정

Timer Interrupt를 활성화하기 위해 NVIC를 활성화한다:

![NVIC 설정](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.mdimage-5.png)

**NVIC(Nested Vectored Interrupt Controller):**
- 인터럽트 우선순위 관리
- 중첩 인터럽트 처리
- 효율적인 인터럽트 핸들링

## 📁 5. Project Manager 설정

### Code Generator 설정

Code generator에서 **"Generate peripheral initialization as a pair of '.c/.h' files per peripheral"**를 선택한다:

![Project Manager 설정](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.mdimage-6.png)

**이 설정의 장점:**
- 관련 파일이 각각 따로 만들어져 보기 편하다
- 주변장치별로 파일이 분리되어 유지보수 용이
- 코드 구조가 명확해짐

## 🚀 6. 프로젝트 생성

### 최종 생성

다 했으면 톱니바퀴 아이콘을 눌러서 프로젝트를 생성한다:

![프로젝트 생성](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/stm32_%ED%99%98%EA%B2%BD%EA%B5%AC%EC%84%B1.mdimage-7.png)

**생성 과정:**
1. 설정 검증
2. 코드 생성
3. 프로젝트 파일 구성
4. 초기화 코드 생성

## 🛠️ 컴파일 환경 구성

### STM32CubeCLT 설치

컴파일 하기 위한 프로그램 설치 (STM32CubeCLT_1.18.0):

![STM32CubeCLT 설치](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/Complie_Program.md%7B4891395B-74F4-42E2-9F0B-89D3EB8411DC%7D.png)

### 컴파일러 확인

**컴파일러 (`arm-none-eabi-gcc`):**

![컴파일러](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/Complie_Program.md%7B782895A3-CB33-45A2-96B4-6BCC6A7B0D99%7D.png)

**링커 (`arm-none-eabi-ld`):**

![링커](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/Complie_Program.md%7B73540C4A-7896-45E1-857B-009D7E81AF08%7D.png)

### 설치 확인

CMD에서 STM32와 Version 확인:

![버전 확인](https://raw.githubusercontent.com/goeun-oh/ARM/main/0623/Complie_Program.md%7B2EE09E95-4964-4D1B-9DBF-70E5128423D7%7D.png)

## 📊 생성된 프로젝트 구조

### 파일 구조

STM32CubeIDE가 생성하는 표준 프로젝트 구조:

```
Project/
├── Core/
│   ├── Inc/
│   │   ├── main.h
│   │   ├── stm32f4xx_hal_conf.h
│   │   ├── stm32f4xx_it.h
│   │   └── gpio.h (설정에 따라 생성)
│   └── Src/
│       ├── main.c
│       ├── stm32f4xx_hal_msp.c
│       ├── stm32f4xx_it.c
│       ├── system_stm32f4xx.c
│       └── gpio.c (설정에 따라 생성)
├── Drivers/
│   ├── CMSIS/
│   └── STM32F4xx_HAL_Driver/
└── Middlewares/ (필요시)
```

### 주요 파일 설명

**main.c:**
- 메인 애플리케이션 로직
- 사용자 코드 영역 제공

**stm32f4xx_hal_msp.c:**
- MSP(MCU Support Package) 초기화
- 저수준 하드웨어 초기화

**stm32f4xx_it.c:**
- 인터럽트 핸들러 구현
- 시스템 인터럽트와 사용자 인터럽트

**gpio.c/gpio.h:**
- GPIO 초기화 코드
- 주변장치별 파일 분리 시 생성

## 💡 고급 환경구성의 장점

### 1. 자동 코드 생성

- 초기화 코드 자동 생성
- 에러 없는 기본 설정
- 표준 HAL 라이브러리 활용

### 2. 시각적 설정

- GUI를 통한 직관적 설정
- 실시간 설정 확인
- 핀 충돌 자동 감지

### 3. 유지보수성

- 설정 변경이 용이
- 코드 재생성 가능
- 표준화된 구조

### 4. 호환성

- ST 공식 지원
- 다양한 STM32 시리즈 지원
- 업데이트와 버그 수정

## 📋 정리

이번 포스트에서는 STM32CubeIDE를 활용한 고급 초기환경 설정을 다뤘다:

1. **RCC 설정**: HSE 사용과 PLL을 통한 클럭 설정
2. **디버깅 설정**: Serial Wire Debug 인터페이스 설정
3. **GPIO 설정**: 시각적 인터페이스를 통한 핀 설정
4. **Timer 설정**: Timer와 NVIC 인터럽트 설정
5. **프로젝트 관리**: 주변장치별 파일 분리 설정
6. **컴파일 환경**: STM32CubeCLT 도구 설치

**핵심 장점:**
- 자동화된 코드 생성
- 시각적이고 직관적인 설정
- 에러 없는 기본 구성
- 표준화된 프로젝트 구조

이제 초기환경 세팅의 전 과정을 완료했다. 다음 단계에서는 이를 바탕으로 더 복잡한 기능들을 구현할 수 있다.

---

**이전 포스트**: [6. SW Stack과 모듈화](/posts/cortex-m-software-stack)

---

## 🎉 초기환경 세팅 시리즈 완료!

축하한다! Cortex-M 초기환경 세팅의 모든 과정을 완료했다. 이제 다음 단계로 넘어가 더 고급 기능들을 구현해보자.
