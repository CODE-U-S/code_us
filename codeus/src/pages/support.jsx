import { useState } from "react";
import Header from "../components/Header";
import "./css/support.css";

function Support() {
    const [gender, setGender] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const schedule = [
        { title: "서류 접수", date: "미정" },
        { title: "서류 결과", date: "미정" },
        { title: "면접일", date: "미정" },
        { title: "최종 결과", date: "미정" }
    ];

    const validateEmail = (email) => {
        return email.endsWith("@e-mirim.hs.kr");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError("");

        const studentId = document.getElementById("studentId").value.trim();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const appeal = document.getElementById("appeal").value.trim();

        // 필드 검사
        if (!studentId || !name || !email || !gender || !appeal) {
            setEmailError("모든 필드를 입력해주세요");
            return;
        }

        // 이메일 검사
        if (!validateEmail(email)) {
            setEmailError("학교 이메일(@e-mirim.hs.kr)만 지원 가능합니다");
            return;
        }

        // 기존 지원자 데이터 조회
        const existingApplications = JSON.parse(localStorage.getItem("applications") || "[]");

        // 새 지원자 추가
        const newApplication = {
            id: Date.now(),
            studentId,
            name,
            email,
            gender,
            appeal,
            submittedAt: new Date().toLocaleString("ko-KR")
        };

        existingApplications.push(newApplication);
        localStorage.setItem("applications", JSON.stringify(existingApplications));

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowModal(true);
            // 폼 초기화
            document.getElementById("studentId").value = "";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("appeal").value = "";
            setGender("");
        }, 500);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="support-page">
            <Header />
            <div className="support-content">
                <h1>4기 모집</h1>
                <p>학교 생활 3년 동안 같이 활동할 신입 여러분을 모집합니다</p>
                <p>IT 분야에 대해 열정적인 포부를 가지고, 즐거운 동아리 활동을 하고 싶은 분들의 많은 지원 바랍니다</p>
            </div>
            <div className="support-cards">
                {schedule.map((item) => (
                    <div key={item.title} className="support-card">
                        <p className="support-card-title">{item.title}</p>
                        <p className="support-card-date">{item.date}</p>
                    </div>
                ))}
            </div>
            <p className="support-complete">양식만 작성하면 지원 완료</p>

            <div className="support-form-wrap">
                <form className="support-form" onSubmit={handleSubmit}>
                    <div className="support-form-left">
                        <label className="support-label" htmlFor="studentId">학번</label>
                        <input className="support-input" id="studentId" name="studentId" type="text" />

                        <label className="support-label" htmlFor="name">이름</label>
                        <input className="support-input" id="name" name="name" type="text" />

                        <label className="support-label" htmlFor="email">이메일</label>
                        <input className="support-input" id="email" name="email" type="email" />

                        <span className="support-label">성별</span>
                        <div className="support-gender-group">
                            <button
                                type="button"
                                className={`support-gender-btn${gender === "남" ? " selected" : ""}`}
                                onClick={() => setGender("남")}
                            >
                                남
                            </button>
                            <button
                                type="button"
                                className={`support-gender-btn${gender === "여" ? " selected" : ""}`}
                                onClick={() => setGender("여")}
                            >
                                여
                            </button>
                            <input type="hidden" name="gender" value={gender} />
                        </div>
                    </div>

                    <div className="support-form-right">
                        <label className="support-label" htmlFor="appeal">지원 동기 및 자기 어필</label>
                        <textarea className="support-textarea" id="appeal" name="appeal" />
                    </div>

                    <div className="support-form-actions">
                        {emailError && <span className="support-error">{emailError}</span>}
                        <button type="submit" className="support-submit-btn" disabled={loading}>
                            {loading ? "제출 중..." : "제출"}
                        </button>
                    </div>
                </form>
            </div>

            {showModal && (
                <div className="support-modal-overlay" onClick={handleCloseModal}>
                    <div className="support-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="support-modal-header">
                            <h2>지원 완료</h2>
                        </div>
                        <div className="support-modal-body">
                            <p>지원이 완료되었습니다!</p>
                            <p className="support-modal-subtext">관리자가 검토 후 연락드리겠습니다.</p>
                        </div>
                        <div className="support-modal-footer">
                            <button className="support-modal-btn" onClick={handleCloseModal}>
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Support;
