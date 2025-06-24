---
title: Bear app으로 메모를 마이그레이션하는 개발자의 해결법 (PenCake to Bear)
date: 2020-08-20
categories:
  - 개발
  - 소프트웨어팁
tags:
  - Bear
  - 마이그레이션
  - 메모앱
  - PenCake
  - 개발자도구
layout: post
toc: true
---

# Bear app으로 메모를 마이그레이션하는 개발자의 해결법 (PenCake to Bear)

하루에 한 줄이라도 일기를 쓰는 습관을 들였다. 그렇게 2012년 evernote부터 시작하여, dayone, pencake 등의 앱들 거쳐갔다. 문득 이 앱들이 펀가 조금씩 체 성에 차지 않았던 것 같다.

## Bear 간략 이유

Bear는 마크다운을 지원하는 깔끔한 메모 앱이다. 개발자들에게 인기가 많은 이유는 다음과 같다:

- **마크다운 완벽 지원**: 코드 블록, 테이블, 링크 등 모든 마크다운 문법 지원
- **태그 시스템**: 폴더 대신 태그로 메모를 분류하는 유연한 시스템
- **빠른 검색**: 전체 텍스트 검색과 태그 검색이 매우 빠름
- **크로스 플랫폼**: Mac, iOS, iPadOS에서 완벽한 동기화
- **테마 지원**: 다양한 테마로 개인 취향에 맞는 환경 구성

특히 개발자에게 중요한 것은 코드 하이라이팅과 마크다운 지원이다. Bear는 이 두 가지를 모두 완벽하게 지원한다.

## Bear 단점

하지만 Bear에도 몇 가지 아쉬운 점들이 있다:

- **구독 모델**: Pro 기능을 사용하려면 월 구독료를 지불해야 함
- **플랫폼 제한**: Windows나 Android 지원 없음 (Apple 생태계에만 존재)
- **웹 버전 없음**: 브라우저에서 접근할 수 없음
- **동기화 제한**: 무료 버전에서는 기기 간 동기화 불가
- **익스포트 제한**: 일부 고급 익스포트 기능은 Pro 버전에서만 가능

이런 단점들을 고려해도 Bear의 장점이 더 크다고 판단했다.

## 마이그레이션을 잘 하는 방법이 없을까?

기존 PenCake에서 Bear로 옮기는 과정에서 여러 방법을 시도해봤다:

### 1. 수동 복사 붙여넣기
- **장점**: 확실하고 안전함
- **단점**: 메모가 많으면 시간이 오래 걸림
- **적합한 경우**: 메모가 50개 이하일 때

### 2. CSV 익스포트/임포트
- **장점**: 대량 데이터 처리 가능
- **단점**: 포맷이 맞지 않으면 데이터 손실 가능
- **적합한 경우**: 단순한 텍스트 메모가 대부분일 때

### 3. ENEX 파일 활용
- **장점**: 메타데이터(날짜, 태그 등) 보존 가능
- **단점**: 중간 변환 과정 필요
- **적합한 경우**: 체계적으로 정리된 메모가 많을 때

결국 ENEX 방식을 선택했다. 이유는 메모의 메타데이터를 최대한 보존하면서도 효율적으로 마이그레이션할 수 있기 때문이다.

## enex를 이용한 마이그레이션

ENEX(Evernote Export Format)는 Evernote에서 개발한 표준 포맷이다. 많은 메모 앱들이 이 포맷을 지원한다.

### ENEX 파일 구조 이해하기

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE en-export SYSTEM "http://xml.evernote.com/pub/evernote-export3.dtd">
<en-export export-date="20201020T120000Z" application="PenCake" version="1.0">
  <note>
    <title>메모 제목</title>
    <content><![CDATA[
      <en-note>
        메모 내용
      </en-note>
    ]]></content>
    <created>20200820T090000Z</created>
    <updated>20200820T090000Z</updated>
    <tag>개발</tag>
    <tag>아이디어</tag>
  </note>
</en-export>
```

### 마이그레이션 단계

1. **PenCake에서 ENEX 익스포트**
   - PenCake 설정 → 익스포트 → ENEX 선택
   - 전체 메모 또는 선택한 메모만 익스포트 가능

2. **ENEX 파일 전처리**
   - HTML 태그 제거
   - 마크다운으로 변환
   - 메타데이터 추출

3. **Bear로 임포트**
   - Bear에서 File → Import Notes 선택
   - 변환된 파일들을 일괄 임포트

## js script

ENEX 파일을 Bear가 읽을 수 있는 형태로 변환하는 JavaScript 스크립트를 작성했다:

```javascript
const fs = require('fs');
const xml2js = require('xml2js');
const TurndownService = require('turndown');

class ENEXToBearConverter {
    constructor() {
        this.turndownService = new TurndownService({
            headingStyle: 'atx',
            codeBlockStyle: 'fenced'
        });
        
        // Bear 태그 형식으