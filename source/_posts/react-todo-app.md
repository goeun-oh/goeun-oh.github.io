---
title: 첫 번째 프로젝트 - React Todo App
date: 2024-12-16 10:30:00
tags: 
  - React
  - JavaScript
  - Frontend
categories:
  - 프로젝트
---

## 프로젝트 개요

React를 사용해서 만든 첫 번째 개인 프로젝트인 Todo 애플리케이션입니다. 
사용자가 할 일을 추가하고, 완료 처리하며, 삭제할 수 있는 기본적인 CRUD 기능을 구현했습니다.

<!-- more -->

## 사용된 기술

- **Frontend**: React, CSS3, HTML5
- **상태 관리**: React Hooks (useState, useEffect)
- **스타일링**: CSS Modules
- **배포**: Netlify

## 주요 기능

### 1. 할 일 추가
사용자가 입력 필드에 할 일을 입력하고 엔터키를 누르거나 추가 버튼을 클릭하면 새로운 할 일이 목록에 추가됩니다.

```javascript
const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
    createdAt: new Date()
  };
  setTodos([...todos, newTodo]);
};
```

### 2. 완료 상태 토글
체크박스를 클릭하여 할 일의 완료 상태를 변경할 수 있습니다.

```javascript
const toggleTodo = (id) => {
  setTodos(todos.map(todo => 
    todo.id === id 
      ? { ...todo, completed: !todo.completed }
      : todo
  ));
};
```

### 3. 할 일 삭제
삭제 버튼을 클릭하여 특정 할 일을 목록에서 제거할 수 있습니다.

## 배운 점

이 프로젝트를 통해 다음과 같은 것들을 학습할 수 있었습니다:

- React의 기본 개념 (컴포넌트, state, props)
- React Hooks의 활용법
- 이벤트 핸들링
- 배열과 객체의 불변성 유지
- CSS Modules를 통한 스타일 관리

## 개선 사항

향후 다음과 같은 기능들을 추가할 예정입니다:

- [ ] 로컬 스토리지를 활용한 데이터 영속화
- [ ] 할 일 편집 기능
- [ ] 카테고리별 분류
- [ ] 검색 기능
- [ ] 반응형 디자인 개선

## GitHub 링크

[프로젝트 저장소 보기](https://github.com/goeun-oh/react-todo-app)

---

*이 프로젝트는 React 학습의 첫 단계였으며, 기본기를 탄탄히 다지는 데 큰 도움이 되었습니다.*
