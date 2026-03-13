import React from "react";
import { getAssetUrl } from "../../utils/assetHelper";
import "./css/Page6.css"; 

function Page6() {
  return (
    <div className="page6-container">
      <h2 className="page6-title">Q. <span className="highlight">코더스</span>는 어때요?</h2>
      
      <div className="review-list">
        {/* 1. 김혜승 님 (왼쪽) */}
        <div className="review-card left-type">
          <div className="profile-img">
            {/* public 폴더의 사진을 불러옵니다 */}
            <img src={getAssetUrl('hye.png')} alt="김혜승" className="profile-photo" />
          </div>
          <div className="bubble">
            <div className="user-info">
              <span className="name">김혜승</span> <span className="term">1기</span>
            </div>
            <p className="comment">
              초반에 만들었을 때는 고민이 많았던 것 같습니다ㅠ!<br/>
              하지만 걱정이 무색하게도 잘 따라와 주어 고마운 마음뿐입니다!<br/>
              코더스가 앞으로도 협업에 대한 즐거움과 많은 내용을 알아가길 바랍니다~!
            </p>
          </div>
        </div>

        {/* 2. 채연우 님 (오른쪽) */}
        <div className="review-card right-type">
          <div className="bubble">
            <div className="user-info">
              <span className="term">2기</span> <span className="name">채연우</span>
            </div>
            <p className="comment">
              선배와 후배가 서로 자연스러운 교감을 하고 어색하지 않은<br/>
              분위기 속에서 많은 것들을 느낄 수 있고 전공과 관련해<br/>
              여러 지식을 얻을 수 있는 유익한 동아리였다.
            </p>
          </div>
          <div className="profile-img">
            <img src={getAssetUrl('yeon.png')} alt="채연우" className="profile-photo" />
          </div>
        </div>

        {/* 3. 이OO 님 (왼쪽) */}
        <div className="review-card left-type">
          <div className="profile-img">
            <img src={getAssetUrl('lee.png')} alt="이OO" className="profile-photo" />
          </div>
          <div className="bubble">
            <div className="user-info">
              <span className="name">이OO</span> <span className="term">1기 백엔드</span>
            </div>
            <p className="comment">
              후회없는 활동이었다. 언제나 하나하나 챙겨주려 노력해주셔서 감사합니다!<br/>
              코더스라는 이름 아래 모여서 행복하고 보람찼습니다.
            </p>
          </div>
        </div>

        {/* 4. 조현서 님 (오른쪽) */}
        <div className="review-card right-type">
          <div className="bubble">
            <div className="user-info">
              <span className="term">3기</span> <span className="name">조현서</span>
            </div>
            <p className="comment">
              저희 동아리는 매일 코딩 테스트를 풀어 올리기 때문에 코딩 실력을 쌓을 수 있습니다.<br/>
              또한, 선후배 간에 소통과 조언을 통해 친목을 다지기도 좋습니다.<br/>
              선배님들의 조언이 실력 향상에 많은 도움이 되고 있습니다.
            </p>
          </div>
          <div className="profile-img">
            <img src={getAssetUrl('choi.png')} alt="조현서" className="profile-photo" />
          </div>
        </div>

        {/* 5. 임하정 님 (왼쪽) */}
        <div className="review-card left-type">
          <div className="profile-img">
            <img src={getAssetUrl('member3.jpg')} alt="임하정" className="profile-photo" />
          </div>
          <div className="bubble">
            <div className="user-info">
              <span className="name">임하정</span> <span className="term">3기</span>
            </div>
            <p className="comment">
              프로젝트를 진행하면서 실전 협업이 무엇인지 제대로 배울 수 있었습니다.<br/>
              모르는 부분을 질문하면 선배와 동기가 함께 고민해줘서 성장 속도가 빨랐어요.<br/>
              개발을 꾸준히 이어가고 싶은 분들에게 CODEUS를 추천합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;