import React from "react";
import "./css/Page7.css";
import { FaInstagram, FaGithub } from "react-icons/fa";

function Page7() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 왼쪽 로고 */}
        <div className="footer-left">
          <h1 className="logo">Codeus</h1>
        </div>

        {/* 가운데 정보 */}
        <div className="footer-center">
          <p>미림마이스터고등학교 전공자율동아리</p>
          <p>Email: codeus24@gmail.com</p>
          <p className="copyright">
            Copyright © 2026 CODEUS Inc. All Rights Reserved
          </p>
        </div>

        {/* 오른쪽 정보 */}
        <div className="footer-right">
          <p className="version">2026 Ver. Created By 3~4기</p>
          <div className="line"></div>

          <div className="icons">
            <FaInstagram />
            <FaGithub />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Page7;