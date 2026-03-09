import React from "react";
import { getAssetUrl } from "../../utils/assetHelper";
import "./css/Page2.css";

export default function Page2() {
  return (
    <section className="page2">
      <div className="page2-header">
        <h1>CODEUS</h1>
        <p>codeus 동아리는 이런 활동을 진행합니다</p>
      </div>

      {/* 🔥 가로 스크롤 영역 */}
      <div className="slider-wrapper">
       {/*1번째*/}
        <div className="card">
          <span className="card-number">01</span>
          <div className="card-body">
            <img
              src={getAssetUrl('programmerstest.png')}
              alt="programmerstest"
              className="code-img"
            />
            <h3>1일 1코딩테스트</h3>
            <p>개발자 취업 필수 관문 누구나 쉽고 빠르게 미리 연습하고 대비</p>
          </div>
        </div>

        {/*2번째*/}
        <div className="card">
          <span className="card-number">02</span>
          <div className="card-body">
            <img
              src={getAssetUrl('design.png')}
              alt="design"
              className="code-img"
            />
            <h3>실전 중심 제작 과정</h3>
            <p>배운 내용을 직접 만들어보며 익히는 과정</p>
          </div>
        </div>

        {/*3번째*/}
        <div className="card">
          <span className="card-number">03</span>
          <div className="card-body">
            <img
              src={getAssetUrl('java code.png')}
              alt="java code"
              className="code-img"
            />
            <h3>실무 이론 & 실습</h3>
            <p>시대의 변화에 대비하고 새로운 기술들을 배울 수 있는 기회</p>
          </div>
        </div>

       {/*4번째*/}
        <div className="card">
          <span className="card-number">04</span>
          <div className="card-body">
            <img
              src={`${import.meta.env.BASE_URL}project.png`}
              alt="project"
              className="code-img"
            />
           <h3>프로젝트 & 멘토</h3>
            <p>포트폴리오를 위한 여러 프로젝트 진행 및 피드백 멘토링 활동</p>
          </div>
        </div>
      </div>
    </section>
  );
}