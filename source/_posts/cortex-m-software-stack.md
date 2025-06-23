---
title: 6. SW Stack과 모듈화
date: 2025-06-23
categories:
  - Cortex-M
  - ARM
  - Embedded
tags:
  - SW Stack
  - 모듈화
  - 폴더분리
  - 계층구조
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
|  |     main        |  |  ← System 초기화, Application 실행
|  |  +-----------+  |  |
|  |  |Application|  |  |  ← 비즈니스 로직 처리
|  |  +-----------+  |  |
|  |  |  Driver   |  |  |  ← 하드웨어 추상화 계층
|  |  +-----------+  |  |
|  |  | Interface |  |  |  ← 하드웨어 직접 제어
|  |  +-----------+  |  |
|  +-----------------+  |
+------------------------+
+------------------------+
|         HW            |  ← 실제 하드웨어
+------------------------+
```

### 각 계층의 역할

**main 계층:**
- `system` 초기화
- `application` 실행 기능 외에는 고려하지 않는다

**Application 계층:**
- 실제 애플리케이션 로직 구현
- 비즈니스 요구사항 처리

**Driver 계층:**
- 하드웨어 추상화
- 재사용 가능한 기능 제공

**Interface 계층:**
- 하드웨어 직접 제어
- 레지스터 수준 접근

## 🚫 잘못된 접근 방식

### Application에서 Interface 직접 접근 문제

Application에서 바로 GPIO(Interface)로 접근하는 것은 지양해야 한다.

**문제점:**
- GPIO는 하드웨어에 가까운 부분이기 때문에, Application에서 직접 접근하는 것은 좋지 않다
- 단지 Driver만 수정하면 되는 것이 Interface까지 수정해야 되어 번거로워진다

### 네트워크 스택 예시

인터넷의 'software stack'에서도 동일한 원칙이 적용된다.

![네트워크 스택 예시](https://raw.githubusercontent.com/goeun-oh/ARM/main/0619/0.GPIO_BTN_%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0.md%7BC210C9A6-E664-471B-8447-DBD93432D92B%7D.png)

Application에서 바로 MAC이나 PHY에 접근하지 않는다.

## 💡 올바른 설계 원칙

### 인접한 Layer를 통한 통신

**핵심 원칙:** Application에서 인접한 Layer는 Driver다.

**인접한 Layer를 통해 메시지를 송수신해야 한다**

이렇게 만들어야 재사용성이 좋다.

## 🔧 실제 적용: GPIO 버튼 추가

### 기존 문제상황

기존의 LED Shifter 기능에서 BTN 기능을 추가하여 BTN을 누르면 LED가 반대 방향으로 SHIFT 하도록 하려고 했다.

하지만 기존에 구현했던 것은 버튼을 누르고 있을 때 LED가 멈추는 문제가 있었다.

### BTN 기능 추가를 위한 SW Stack

![BTN 기능 SW Stack](https://raw.githubusercontent.com/goeun-oh/ARM/main/0619/0.GPIO_BTN_%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0.mdimage-1.png)

### ap_main 계층 추가

`ap_main`을 만들어서 SW Stack Layer를 하나 더 추가한다.

`main.c`의 기능:
- `system` 초기화
- `application` 실행 기능 외에는 고려하지 않는다

## 🔘 버튼 하드웨어 이해

### BTN(Push Switch, Tact Switch) 분석

Schematic으로 우리가 가진 BTN이 HW적으로 어떤 형태인지 알 수 있다.

![버튼 회로도](https://raw.githubusercontent.com/goeun-oh/ARM/main/0619/0.GPIO_BTN_%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0.mdimage.png)

BTN이 Pullup 되어있다:
- BTN이 눌리지 않은 상태: `3.3V` (HIGH)
- BTN이 눌린 상태: `0V` (LOW)

### Chattering(Bounce) 현상

이상적으로 0 또는 1로 변화하면 완벽하지만 노이즈가 껴서 Chattering(Bounce) 현상이 발생한다.

![Chattering 현상](https://raw.githubusercontent.com/goeun-oh/ARM/main/0619/0.GPIO_BTN_%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0.md%7B7AD34572-2C74-4F83-A793-2E73188AF847%7D.png)

이러한 Noise 또한 고려하면서 코드를 짜야한다. (debounce 코드를 작성해야한다)

## 🔍 버튼 상태 감지 구현

### 버튼 상태 정의

**BTN의 상태:**
1. Button Normal 상태: RELEASED(`1`) 상태
2. Button Push: PUSHED(`0`) 상태

### GPIO READ 함수 구현

버튼의 상태를 받고 싶다. `Button_GetState()`: 버튼의 상태를 받아오는 함수

```c
uint32_t GPIO_ReadPin(GPIO_TypeDef *GPIOx, uint32_t pinNum){
    return ((GPIOx -> IDR & (1U << pinNum))? 1:0); //0이면 0이나가고, 0이 아닌 값이면 1이나간다
}
```

### Button Get State 함수

```c
button_state_t Button_GetState(){
 static uint32_t prevState = RELEASED; //전원을 처음에 넣으면 초기값이 HIGH
 uint32_t curState;
 curState= GPIO_ReadPin(GPIOC, 13);

 //처음 누른 경우
 if ((prevState == RELEASED) && (curState == PUSHED)){
  prevState = PUSHED;
  return ACT_PUSHED;
 } else if ((prevState == PUSHED) &&(curState == RELEASE)){
  prevState = RELEASED;
  return ACT_RELEASED;
 }
 return NO_ACT;
}
```

**static 변수 사용 이유:**
- Scope를 벗어나도 메모리 공간이 반환되지 않는다
- 메모리 재할당을 안하니 이전 값이 계속 유지된다

## 💻 C언어의 한계

### Edge Detect의 한계

- C언어 코드만으로는 edge detect 하는게 없다
- C언어로 CLK edge 동기화를 할 수 없다

이러한 한계 때문에 소프트웨어적으로 상태 변화를 감지해야 한다.

## 📋 정리

이번 포스트에서는 SW Stack과 모듈화의 중요성을 다뤘다:

1. **폴더 분리**: GPIO 관련 기능을 별도로 분리
2. **SW Stack**: 계층적 구조로 소프트웨어 설계
3. **올바른 접근**: 인접한 Layer를 통한 통신
4. **실제 적용**: 버튼 기능 추가 사례
5. **하드웨어 이해**: Chattering 현상과 대응

**핵심 원칙:**
- Application에서 Interface로 직접 접근 금지
- 인접한 계층을 통한 통신
- 재사용성을 고려한 모듈화
- 하드웨어 특성을 고려한 소프트웨어 설계

다음 포스트에서는 STM32CubeIDE를 활용한 고급 초기환경 설정을 알아보겠다.

---

**이전 포스트**: [5-4. 코드 개선 과정 - 실제 프로젝트 적용](/posts/cortex-m-code-improvement-project)  
**다음 포스트**: [7. 고급 초기환경 설정](/posts/cortex-m-advanced-setup)
