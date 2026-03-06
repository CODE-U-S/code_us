import React from "react";
import Page1 from "../components/main/Page1";
import Page2 from "../components/main/Page2";
import Page3 from "../components/main/Page3";
import Page4 from "../components/main/Page4";
import Page5 from "../components/main/Page5";
import Page6 from "../components/main/Page6";
import Page7 from "../components/main/Page7";
import "./css/main.css";

function Main() {
  return (
    <div className="main-container">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </div>
  );
}

export default Main;