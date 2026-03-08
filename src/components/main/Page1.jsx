
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
          <a href="https://github.com/CODE-U-S" target="_blank" rel="noopener noreferrer" className="blog">
            Github <span className="arrow">↗</span>
          </a>
        </nav>
      </header>

      {/* 메인 히어로 영역 */}
      <main className="hero">
        <div className="planet"></div>
        <h1>
          <span className="highlight">5기</span> 멤버를 찾습니다
        </h1>
        <p>협업으로 완성하는 IT & Design 동아리</p>

        <button className="apply-btn">지원하기</button>
      </main>
    </div>
  );
}

export default Page1;