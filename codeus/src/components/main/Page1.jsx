// src/components/main/Page1.jsx
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { getAssetUrl } from "../../utils/assetHelper";
import "./css/Page1.css";

function Page1() {
  const navigate = useNavigate();

  return (
    <div className="page1">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${getAssetUrl("page1-bg.png")})` }}
      ></div>
      <Header />

      {/* 메인 히어로 영역 */}
      <main className="hero">
        <div className="planet"></div>
        <h1>
          <span className="highlight">5기</span> 멤버를 찾습니다
        </h1>
        <p>협업으로 완성하는 IT & Design 동아리</p>

        <button className="apply-btn" onClick={() => navigate("/support")}>
          지원하기
        </button>
      </main>
    </div>
  );
}

export default Page1;
