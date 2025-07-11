# SPI/I2C 기반 보드 간 직렬 통신 인터페이스 설계

2025.05.21 ~ 2025.05.25 (4人 팀 프로젝트)

## 요약
SPI/I2C 프로토콜을 기반으로 한 커스텀 IP 설계 및 보드 간 양방향 직렬 통신 시스템 구현

<img src="images/projects/gifs/i2c/i2c.gif" alt="VGA 게임 화면" style="max-width: 600px; width: 90%;" />

- FPGA 보드 간 2선식(SCL, SDA) I2C 인터페이스를 구성하여 1Byte 단위 송수신 기능을 지원하는 마스터/슬레이브 모듈 설계
- Vivado IP Integrator를 활용해 MicroBlaze 기반 SoC 시스템에 I2C 마스터를 통합하고, Vitis에서 제어 애플리케이션 구현
- FSM 구조 개선을 통해 Burst 전송(연속 송수신) 및 상태 제어 기능 확장
- GPIO 및 FND를 활용한 수신 데이터 시각화 애플리케이션 구현

## 역할
- I2C 마스터/슬레이브 FSM 직접 설계 및 SCL 자동 생성기(clock generator) 추가
- Burst Mode 확장을 위한 ACK/NACK 기반 상태 전이 논리 설계
- AXI4 기반 레지스터 맵 설계 및 애플리케이션 구현(Vitis C 프로그래밍)
- 전체 시스템 통합 및 Synopsys VCS를 이용한 기능 검증 수행

## 트러블 슈팅

### [1] READ 동작 시 예상치 못한 데이터 수신 (0xFF)
<details> 
<summary> 자세히</summary>

- **문제 상황:**

슬레이브 주소 접근 후 0x01 데이터를 write했지만, read 결과가 0xFF로 출력됨

- **원인 분석:**

SDA가 enable되지 않은 상태에서 풀업으로 인해 default high 값이 유지됨

- **해결 방법:**

마스터와 슬레이브 모두 SDA Enable 타이밍을 명확히 지정하고, 슬레이브 FSM에서 STOP 전이 조건 추가하여 안정적으로 종료 처리

</details>

### [2] FSM 상태 증가에 따른 복잡성 증가
<details> 
<summary> 자세히</summary>

- **문제 상황:**

초기 FSM은 상태 하나를 네 단계로 나누는 비효율적 구조였으며, READ/BURST 기능 추가 시 상태 증가로 디버깅 어려움

- **해결 방법:**

SCL 자동 생성기를 FSM에 통합하여 상태 수를 줄이고, 상태 전이를 단순화함

또한 SDA 출력 enable 로직을 추가하여 START/STOP 구간에서도 정밀 제어 가능하도록 개선

</details>

## 고찰
<details>
<summary> 고찰 </summary>

이번 프로젝트는 bottom-level 회로 설계부터 top-level 애플리케이션 구현까지 전 과정을 직접 수행하며 시스템 수준의 사고력을 기를 수 있는 경험이었다.

초기에는 단순한 송수신 기능만 구현하는 것이 목표였지만, 기능이 확장됨에 따라 구조적 효율성과 재사용성을 고려하게 되었고, FSM 개선, 클럭 생성기 통합, Burst 전송 기능까지 개발하였다.

특히 직접 설계한 I2C IP를 MicroBlaze SoC에 통합하고 C 코드로 제어함으로써, 디지털 회로와 임베디드 소프트웨어가 통합된 시스템의 작동 방식을 이해하게 되었다.

처음으로 완전한 bottom-up 설계를 수행하며 자신감을 얻었고, 이후 SoC 설계나 ASIC 개발에서도 구조적 설계 능력과 통합 관점의 시야를 적용할 수 있을 것으로 기대된다.
</details>