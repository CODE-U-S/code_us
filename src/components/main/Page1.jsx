
// src/components/main/Page1.jsx
import "./css/Page1.css";

function Page1() {
  return (
    <div className="page1">
      <div className="bg-image">
      </div>
      {/* 헤더 */}
      <header className="header">
        <img src="/logo.png" alt="Code-Us" className="logo" style={{ width: "120px" }} />

        <nav className="nav">
          <span>Introduce</span>
          <span>Project</span>
          <span>Support</span>
          <span className="blog">
            Blog <span className="arrow">↗</span>
          </span>
        </nav>
      </header>

      {/* 메인 히어로 영역 */}
      <main className="hero">
        <div className="planet"></div>
        <h1>
          <span className="highlight">5기</span> 멤버를 찾습니다
        </h1>
        <p>실무의 길로, 함께 나아가는 IT 동아리</p>

        <button className="apply-btn">지원하기</button>
      </main>
    </div>
  );
}

export default Page1;