import React from "react";
import { getAssetUrl } from "../../utils/assetHelper";
import "./css/Page6.css";

const reviews = [
  {
    name: "김혜승",
    term: "1기",
    img: "hye.png",
    side: "left",
    comment: "초반에 만들었을 때는 고민이 많았던 것 같습니다ㅠ!\n하지만 걱정이 무색하게도 잘 따라와 주어 고마운 마음뿐입니다!\n코더스가 앞으로도 협업에 대한 즐거움과 많은 내용을 알아가길 바랍니다~!",
  },
  {
    name: "채연우",
    term: "2기",
    img: "choi.png",
    side: "right",
    comment: "선배와 후배가 서로 자연스러운 교감을 하고 어색하지 않은\n분위기 속에서 많은 것들을 느낄 수 있고 전공과 관련해\n여러 지식을 얻을 수 있는 유익한 동아리였다.",
  },
  {
    name: "이OO",
    term: "1기 백엔드",
    img: "lee.png",
    side: "left",
    comment: "후회없는 활동이었다. 언제나 하나하나 챙겨주려 노력해주셔서 감사합니다!\n코더스라는 이름 아래 모여서 행복하고 보람찼습니다.",
  },
  {
    name: "조현서",
    term: "3기",
    img: "member1.jpg",
    side: "right",
    comment: "저희 동아리는 매일 코딩 테스트를 풀어 올리기 때문에 코딩 실력을 쌓을 수 있습니다.\n또한, 선후배 간에 소통과 조언을 통해 친목을 다지기도 좋습니다.\n선배님들의 조언이 실력 향상에 많은 도움이 되고 있습니다.",
  },
  {
    name: "임하정",
    term: "3기",
    img: "member3.jpg",
    side: "left",
    comment: "프로젝트를 진행하면서 실전 협업이 무엇인지 제대로 배울 수 있었습니다.\n모르는 부분을 질문하면 선배와 동기가 함께 고민해줘서 성장 속도가 빨랐어요.\n개발을 꾸준히 이어가고 싶은 분들에게 CODEUS를 추천합니다.",
  },
];

function Page6() {
  return (
    <div className="page6-container">
      <h2 className="page6-title">Q. <span className="highlight">코더스</span>는 어때요?</h2>

      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.name} className={`review-card ${review.side}-type`}>
            {review.side === "left" && (
              <div className="profile-img">
                <img src={getAssetUrl(review.img)} alt={review.name} className="profile-photo" />
              </div>
            )}
            <div className="bubble">
              <div className="user-info">
                {review.side === "left" ? (
                  <><span className="name">{review.name}</span> <span className="term">{review.term}</span></>
                ) : (
                  <><span className="term">{review.term}</span> <span className="name">{review.name}</span></>
                )}
              </div>
              <p className="comment">
                {review.comment.split("\n").map((line, i, arr) => (
                  <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
                ))}
              </p>
            </div>
            {review.side === "right" && (
              <div className="profile-img">
                <img src={getAssetUrl(review.img)} alt={review.name} className="profile-photo" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page6;