---
title: Cortex-M 초기환경 세팅 가이드
date: 2025-06-23
categories:
  - Cortex-M
  - ARM
  - Embedded
tags:
  - STM32
  - 초기환경
  - 가이드
layout: post
toc: true
---

# Cortex-M 초기환경 세팅 가이드

STM32F411 Nucleo-64 보드를 사용하여 초기환경 설정부터 고급 기능까지 단계별로 정리한다.

## 📚 학습 로드맵

이 가이드는 총 7개의 주요 섹션으로 구성되어 있으며, 각 섹션은 독립적인 포스트로 작성되어 있다.

### 1️⃣ [STM32 보드 소개](/posts/cortex-m-board-introduction)
- STM32F411RE Nucleo-64 보드 스펙 소개
- 핀 맵과 LED 연결 확인
- System Architecture 이해
- RCC의 역할과 저전력 설계 개념

### 2️⃣ [STM32CubeIDE 프로젝트 생성](/posts/cortex-m-project-setup)
- STM32CubeIDE 기본 프로젝트 설정
- RCC 클럭 설정 (HSI vs HSE)
- SYS 디버깅 설정
- GPIO 기본 설정

### 3️⃣ [개발 환경 구성](/posts/cortex-m-development-environment)
- STM32CubeCLT 설치 및 설정
- 컴파일러와 링커 도구 확인
- 프로젝트 매니저 설정
- 빌드 환경 구성

### 4️⃣ [바텀부터 LED 제어하기](/posts/cortex-m-led-control-basics)
- 레지스터 직접 제어를 통한 LED 제어
- RCC 클럭 설정 실습
- GPIO 모드 레지스터 설정
- LED Toggle 구현

### 5️⃣ [코드 개선 과정](/posts/cortex-m-code-improvement)
- Define을 활용한 가독성 향상
- 범용적 설계를 위한 베이스 주소 정의
- 구조체 사용의 중요성과 장점
- 최종 개선된 코드 구현

### 6️⃣ [SW Stack과 모듈화](/posts/cortex-m-software-stack)
- SW Stack 개념과 계층 구조
- 인접 Layer를 통한 통신 원칙
- 폴더 구조 분리와 모듈화
- Driver 패턴 구현

### 7️⃣ [고급 초기환경 설정](/posts/cortex-m-advanced-setup)
- STM32CubeIDE를 활용한 고급 설정
- Timer 설정과 인터럽트 구성
- 실제 프로젝트 환경 구성
- 프로덕션 레벨 설정

## 🎯 학습 목표

이 가이드를 통해 다음을 습득할 수 있다:

- **기초**: STM32 하드웨어 구조와 레지스터 이해
- **실습**: 레지스터 직접 제어를 통한 하드웨어 제어
- **설계**: 구조체와 모듈화를 통한 코드 개선
- **아키텍처**: SW Stack을 고려한 체계적인 코드 구조
- **도구**: STM32CubeIDE와 개발 도구 활용

## 💡 추천 학습 순서

1. **순차 학습**: 1번부터 7번까지 순서대로 학습하는 것을 권장한다
2. **실습 중심**: 각 섹션의 코드를 직접 작성하고 테스트해본다
3. **응용**: 기본 LED 제어를 다른 GPIO 제어로 확장해본다
4. **복습**: 구조체와 모듈화 개념은 반복 학습이 중요하다

---

*각 섹션의 링크를 클릭하여 상세 내용을 확인할 수 있다.*
