import React, { useEffect, useRef } from "react";
import Page1 from "../components/main/Page1";
import Page2 from "../components/main/Page2";
import Page3 from "../components/main/Page3";
import Page4 from "../components/main/Page4";
import Page5 from "../components/main/Page5";
import Page6 from "../components/main/Page6";
import Page7 from "../components/main/Page7";
import "./css/main.css";

function Main() {
  const pageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.1 });

    const currentRefs = pageRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="main-container">
      <div ref={(el) => (pageRefs.current[0] = el)} className="page-wrapper">
        <Page1 />
      </div>
      <div ref={(el) => (pageRefs.current[1] = el)} className="page-wrapper fade-out">
        <Page2 />
      </div>
      <div ref={(el) => (pageRefs.current[2] = el)} className="page-wrapper fade-out">
        <Page3 />
      </div>
      <div ref={(el) => (pageRefs.current[3] = el)} className="page-wrapper fade-out">
        <Page4 />
      </div>
      <div ref={(el) => (pageRefs.current[4] = el)} className="page-wrapper fade-out">
        <Page5 />
      </div>
      <div ref={(el) => (pageRefs.current[5] = el)} className="page-wrapper fade-out">
        <Page6 />
      </div>
      <div className="page-wrapper page7-wrapper">
        <Page7 />
      </div>
    </div>
  );
}

export default Main;