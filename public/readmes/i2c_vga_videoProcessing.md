# I2C 통신 기반 듀얼 FPGA 탁구 게임

2025.06.03 ~ 2025.06.12 (4人 팀 프로젝트)

## 요약
I2C 통신을 활용한 듀얼 FPGA 기반 탁구 게임 시스템 구현  
<div style="display: flex; justify-content: center; gap: 20px; align-items: center;">
    <img src="images/projects/gifs/vga_i2c/vga1.gif" alt="VGA 게임 화면" style="max-width: 400px; width: 40%;" />
    <img src="images/projects/gifs/vga_i2c/vga2.gif" alt="VGA 게임 화면" style="max-width: 600px; width: 60%;" />
</div>

- 2개의 FPGA 보드가 I2C 통신으로 공의 정보를(좌표, 속도, 종류 등) 실시간으로 주고받으며 양방향 탁구 게임을 구성
- VGA 출력 회로를 설계해 사용자가 실제 패들로 화면 속 공을 튕기는 인터랙션을 구현하고, 충돌 시의 애니메이션 구현
- 공 종류에 따른 중력 적용, 포물선 운동 및 충돌 판정을 반영한 물리 시뮬레이션으로 자연스러운 공의 움직임을 표현

## 역할
- 팀장으로서 프로젝트 전체 기획 및 일정 관리
- SCCB 설계를 통해 OV7670 카메라 설정 자동화
- I2C 통신 인터페이스 설계로 공 좌표 실시간 송수신 구조 구현
- Game Controller FSM 설계를 통해 공 이동, 충돌 판정, 상태 전이 관리

## 트러블 슈팅

### [1] 비동기 클럭 도메인 간 데이터 전달(CDC) 문제

<details>
<summary> 자세히 </summary>

<img src="images/projects/gifs/vga_i2c/trouble.gif" alt="TROBULE" style="max-width: 400px; width: 40%;" />

- **문제 상황:** 

공이 한 보드에서 다른 보드로 넘어간 뒤, 수신 측에서 공이 일정 위치까지만 이동하고 정지함. 

- **원인 분석:** 

I2C 모듈은 100MHz, game Controller는 25MHz로 동작하여  

두 클럭 도메인 차이로 인해 FSM이 전이 조건을 인식하지 못해 멈추는 현상이 발생

- **해결 방법:** 

Level 기반의 handshake 방식을 적용하여 CDC 문제 해결
</details>

### [2] 공 종류에 따른 물리 파라미터 적용 오류

<details>
<summary> 자세히 </summary>
- **문제 상황:**  

게임 내에 등장하는 공(예: 탁구공, 농구공 등)마다 중력 가속도와 반사 계수 등 물리 파라미터가 달라야 했으나, 서로 다른 공들이 유사하게 움직이거나 비정상적으로 튀는 현상이 발생

- **원인 분석:**  

공 종류에 따라 적용해야 할 파라미터(G, vx, vy 등)가 FSM 동작 시점에 일관되게 적용되지 않았거나, 이전 공의 속도 정보를 덮어쓰지 않아 새 공의 정보와 충돌이 발생함

- **해결 방법:**

공의 종류와 관련된 파라미터를 전용 레지스터에 저장하고, 새로운 공 데이터 수신 시 반드시 초기화되도록 로직을 수정함. 이를 통해 공 종류별 물리 효과(포물선 곡률, 바운스 높이 등)가 정상 반영되도록 시뮬레이션 정확도를 개선함
</details>

## 고찰
<details>
<summary> 고찰 </summary>

이번 프로젝트는 단순한 게임 구현을 넘어, 서로 다른 FPGA 보드 간 실시간 통신, 다중 FSM 간 동기화, 공의 물리적 움직임을 시뮬레이션하는 고난도의 시스템 통합 과제였다.

특히 비동기 클럭 도메인 간 데이터 전달(CDC) 문제는 단순한 통신 동작 검증만으로는 발견되지 않았고, 실제 게임 흐름 속에서 공의 상태가 비정상적으로 멈추는 현상을 통해 뒤늦게 인지할 수 있었다. 이를 통해 타이밍 신호의 안정성과 메타 안정성 확보가 디지털 시스템에서 얼마나 중요한 요소인지를 체감할 수 있었다.

또한 공의 종류에 따른 중력 계수나 반사 계수를 다르게 설계하면서, 하드웨어 레벨에서도 **게임 밸런싱**이라는 개념을 회로적으로 구현하고 튜닝할 수 있음을 경험하였다. 단순히 회로를 설계하는 것에서 끝나지 않고, 사용자 인터랙션의 자연스러움과 피드백의 타당성까지 고려해야 진정한 임베디드 시스템의 완성도에 다가갈 수 있음을 느꼈다.

마지막으로, 팀원 각각이 만든 모듈이 전체 시스템 흐름에 큰 영향을 미치기 때문에 명확한 인터페이스 정의와 코드 관리 기준을 설정하는 것이 중요했다. 이 과정에서 시스템 레벨의 조율과 통합 테스트의 중요성을 배우는 귀중한 기회가 되었고, 이 경험은 향후 더 복잡한 SoC 설계나 실제 반도체 제품 개발 시에도 중요한 기반이 될 것이라 생각한다.
</details>