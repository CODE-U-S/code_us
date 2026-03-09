import "./css/Page3.css";

function Page3() {
    return (
        <div className="page3">
            <div className="values-header">
                <div className="header-text">
                    <h2>핵심 가치</h2>
                    <p>codeus는 이런 분들과 함께 나아가고 싶습니다</p>
                </div>
            </div>

            <div className="value-item left">
                <span className="number">01</span>
                <div className="contentl">
                    <h3>자기주도적인 문제 해결</h3>
                    <p>
                        문제가 발생하면 주체적으로 해결 방법을 찾고 목표를
                        설정하는 분을 원합니다. 다양한 관점에서 문제를 분석하고,
                        새로운 아이디어와 접근법을 찾아내는 것을 중요시
                        여깁니다.
                    </p>
                </div>
            </div>

            <div className="value-item right">
                <div className="contentr">
                    <h3>협업의 중요성</h3>
                    <p>
                        개인성과 더불어, 개인의 목표와 성과도 중요시 여기는 분을
                        원합니다. 팀의 일원으로서 책임감을 가지고 협력하여
                        공통의 목표 달성을 중요시 여깁니다.
                    </p>
                </div>
                <span className="number">02</span>
            </div>

            <div className="value-item left">
                <span className="number">03</span>
                <div className="contentl">
                    <h3>지속적인 성장</h3>
                    <p>
                        새로운 지식을 이전에 배운 내용과 연결시키며, 지식의
                        확장과 깊이 있는 이해를 할 수 있는 분을 원합니다. 또한,
                        지식을 공유하며 서로 간의 피드백을 주고받는 문화를
                        지향합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page3;