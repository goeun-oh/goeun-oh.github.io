# Verilog Verification Automation Tool

## 📖 소개
Verilog 기반의 n-bit Full Adder 모듈과 테스트벤치를 자동으로 생성하고 검증하는 Python 기반의 자동화 도구입니다.  
Python에서 수행한 Full Adder 연산 결과와 Verilog 시뮬레이션 결과를 비교하여 검증하는 자동화된 검증 시스템을 제공합니다.  
본 프로젝트는 설계자가 보다 효율적으로 Verilog 하드웨어 모듈을 개발하고 검증할 수 있도록 지원하는 것을 목표로 합니다.
<br>

## 🎯 목적
디지털 회로 설계에서 높은 비트수(n-bit) 연산을 포함하는 모듈의 검증 과정은 테스트 케이스를 수동으로 작성해야 하는 번거로움이 존재합니다.  
특히 n-bit 연산의 경우 가능한 입력 조합이 기하급수적으로 증가하여, 완전한 검증을 위해서는 방대한 양의 테스트 케이스가 필요합니다.  
본 프로젝트는 Verilog 모듈 검증을 자동화하여 이러한 문제를 해결하며, 설계자의 수작업을 최소화하면서도 신뢰도 높은 검증을 수행할 수 있도록 지원합니다.
<br>

## 🔧 주요 기능
### ✅ **n-bit Full Adder 설계 자동화**
Python을 이용하여 Verilog 기반의 n-bit Full Adder 모듈 및 테스트벤치를 자동으로 생성  
- **🔗 [1-bit Adder](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/adder.md)** 👈 *클릭하여 자세히 보기*
- **🔗 [n-bit Adder](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/adder_nbit.md)** 👈 *클릭하여 자세히 보기*
- **🔗 [testbench](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/adder_tb.md)** 👈 *클릭하여 자세히 보기*
- **🔗 [모듈/테스트벤치 설계 자동화](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/Automating_n-bit_Full_Adder_Design.md)** 👈 *클릭하여 자세히 보기*
<br>

### ✅ **Verilog 시뮬레이션 자동화**
Linux 환경 및 GitHub Actions를 활용한 Verilog 모듈 자동 검증<br>
<br>

### ✅ **랜덤 및 엣지 케이스 입력 자동 생성**
n-bit 연산에서 발생할 수 있는 다양한 입력 조합(랜덤 값, 엣지 케이스)을 자동으로 생성하여 테스트 커버리지 향상  
- **🔗 [Random Testcase 생성](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/gen_testcase.md)** 👈 *클릭하여 자세히 보기*
- **🔗 [Edge case 고려 계기](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/edge_testing.md)** 👈 *클릭하여 자세히 보기*
- **🔗 [Edge Testcase 생성](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/edge_case.md)** 👈 *클릭하여 자세히 보기*
<br>

### ✅ **모듈 교차 검증**
Python에서 연산한 결과와 Verilog 시뮬레이션 결과를 비교하여 정확성을 검증<br>
- **🔗 [교차 검증](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/comparison.md)** 👈 *클릭하여 자세히 보기*
<br>

### ✅ **CI/CD 기반 지속적 검증 지원**
GitHub Actions를 활용한 자동 검증 파이프라인 구축<br>
- **🔗 [GitHub Actions](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/yml.md)** 👈 *클릭하여 자세히 보기*
<br>

## 🚀 차별점
✔ **완전 자동화된 검증 프로세스**<br>
테스트 입력 생성부터 시뮬레이션, 결과 검증까지 모든 과정을 자동화하여 설계자의 검증 부담을 최소화<br>

✔ **Python과 Verilog의 교차 검증 시스템**<br>
Python에서 직접 Full Adder 연산을 수행하고, 이를 Verilog 시뮬레이션 결과와 비교하여 설계 오류를 신속하게 탐지<br>

✔ **CI/CD 적용으로 지속적 검증 가능**<br>
GitHub Actions를 활용한 자동화된 검증 환경을 제공하여 코드 변경 시 즉각적인 테스트 및 검증 수행<br>

✔ **확장성 높은 구조**<br>
n-bit Full Adder뿐만 아니라, 향후 다양한 디지털 회로 모듈 검증으로 확장 가능<br>
<br>
<br>
## 📂 파일 구조 및 실행흐름
- **🔗 [파일 구조](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/file_structure.md)** 👈 *클릭하여 자세히 보기*
- **🔗 [실행 흐름](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/flow.md)** 👈 *클릭하여 자세히 보기*
<br>
  
## 🚀 트러블슈팅
**🔗 [1️⃣ n-bit 가산기 모듈 자동 생성](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/trouble_shooting/Nbit_Adder_Debugging.md)** 👈 *클릭하여 자세히 보기* <br>
**🔗 [2️⃣ verilog 컴파일 문제](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/trouble_shooting/pyverilog_limitation.md)** 👈 *클릭하여 자세히 보기*  
**🔗 [3️⃣ 검증 신뢰도 문제](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/trouble_shooting/RandomTesting_limitation.md)** 👈 *클릭하여 자세히 보기* <br>
<br>

## 🏗️ 팀원 소개 및 역할
**🔗 [팀원 소개](https://github.com/goeun-oh/Verilog-verification-automation-tool/blob/main/explain/division_role.md)** 👈 *클릭하여 자세히 보기*


<br>




