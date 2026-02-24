import React from "react";
import "./css/Page2.css";

export default function Page2() {
  return (
    <section className="page2">
      <div className="page2-header">
        <h1>CODEUS</h1>
        <p>codeus 동아리는 이런 활동을 진행합니다</p>
      </div>

      <div className="card-wrapper">
        {/* Card 01 */}
        <div className="card">
          <span className="card-number">01</span>
          <div className="card-body">
            <div className="mock-image">programmers test</div>
            <h3>1일 1코딩테스트</h3>
            <p>
              개발자 취업 필수 관문 누구나 쉽고 빠르게
              <br />
              미리 연습하고 대비
            </p>
          </div>
        </div>

        {/* Card 02 */}
        <div className="card">
          <span className="card-number">02</span>
          <div className="card-body">
            <div className="mock-image">Java 실습 화면</div>
            <h3>실무 이론 & 실습</h3>
            <p>
              시대의 변화에 대비하고 새로운 기술들을
              <br />
              배울 수 있는 기회
            </p>
          </div>
        </div>

        {/* Card 03 */}
        <div className="card">
          <span className="card-number">03</span>
          <div className="card-body">
            <div className="mock-image">project</div>
            <h3>프로젝트 & 멘토</h3>
            <p>
              포트폴리오를 위한 여러 프로젝트 진행 및
              <br />
              피드백 멘토링 활동
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}