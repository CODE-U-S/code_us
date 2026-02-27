// src/components/main/Page4.jsx
import "./css/Page4.css";

function Page4() {
  return (
    <section className="page4">
        <div className="page4-inner">
            <h2 className="page4-title">프로젝트 결과물</h2>
            <p className="page4-sub">
            프로젝트가 더 궁금하다면?
            </p>

            <div className="card-wrapper">
            <img src = "/project-1.png" alt = "project-1" className="project-card-1" style = {{width: "450px"}}/>
            <img src = "/project-2.png" alt = "project-2" className="project-card-2" style = {{width: "450px"}}/>
            <img src = "/project-3.png" alt = "project-3" className="project-card-3" style = {{width: "450px"}}/>
            </div>

            <button className="more-btn">더보기</button>
        </div>

    </section>
  );
}

export default Page4;