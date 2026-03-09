import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./css/applications.css";

function Applications() {
    const [applications, setApplications] = useState([]);
    const [selectedApp, setSelectedApp] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteTargetId, setDeleteTargetId] = useState(null);

    // 관리자 비밀번호 (실제로는 서버에서 검증해야 함)
    const ADMIN_PASSWORD = "code_us2024";

    useEffect(() => {
        // 세션 인증 확인
        const authStatus = sessionStorage.getItem("admin_auth");
        if (authStatus === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            const saved = JSON.parse(localStorage.getItem("applications") || "[]");
            setApplications(saved);
        }
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem("admin_auth", "true");
            setError("");
        } else {
            setError("비밀번호가 올바르지 않습니다");
            setPassword("");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem("admin_auth");
        setPassword("");
    };

    const filteredApplications = applications.filter((app) =>
        app.name.includes(searchTerm) ||
        app.studentId.includes(searchTerm) ||
        app.email.includes(searchTerm)
    );

    const handleDelete = (id) => {
        setDeleteTargetId(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (deleteTargetId) {
            const updated = applications.filter((app) => app.id !== deleteTargetId);
            setApplications(updated);
            localStorage.setItem("applications", JSON.stringify(updated));
            setSelectedApp(null);
        }
        setShowDeleteModal(false);
        setDeleteTargetId(null);
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setDeleteTargetId(null);
    };

    const handleExport = () => {
        const csvContent = [
            ["학번", "이름", "이메일", "성별", "지원 동기 및 자기 어필", "제출 시간"].join(","),
            ...applications.map((app) =>
                [
                    app.studentId,
                    app.name,
                    app.email,
                    app.gender,
                    `"${app.appeal.replace(/"/g, '""')}"`,
                    app.submittedAt
                ].join(",")
            )
        ].join("\n");

        // UTF-8 BOM 추가하여 엑셀에서 한글 깨짐 방지
        const BOM = "\uFEFF";
        const blob = new Blob([BOM + csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        const today = new Date().toLocaleDateString('ko-KR').replace(/\. /g, '-').replace('.', '');
        link.setAttribute("href", url);
        link.setAttribute("download", `지원자목록_${today}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    // 인증되지 않은 경우 로그인 화면 표시
    if (!isAuthenticated) {
        return (
            <section className="applications-page">
                <Header />
                <div className="applications-login-container">
                    <div className="applications-login-box">
                        <h1>관리자 인증</h1>
                        <p>지원자 관리 페이지는 관리자만 접근할 수 있습니다</p>
                        <form onSubmit={handleLogin}>
                            <input
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                className="applications-login-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                            {error && <span className="applications-login-error">{error}</span>}
                            <button type="submit" className="applications-login-btn">
                                로그인
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="applications-page">
            <Header />
            <div className="applications-header">
                <div className="applications-title-section">
                    <h1>지원자 관리</h1>
                    <p>총 {applications.length}명</p>
                </div>
                <div className="applications-controls">
                    <input
                        type="text"
                        placeholder="학번, 이름, 이메일로 검색..."
                        className="applications-search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="applications-export-btn" onClick={handleExport}>
                        엑셀 다운로드
                    </button>
                    <button className="applications-logout-btn" onClick={handleLogout}>
                        로그아웃
                    </button>
                </div>
            </div>

            <div className="applications-container">
                <div className="applications-list">
                    {filteredApplications.length === 0 ? (
                        <div className="applications-empty">
                            <p>지원자가 없습니다</p>
                        </div>
                    ) : (
                        filteredApplications.map((app) => (
                            <div
                                key={app.id}
                                className={`applications-item ${selectedApp?.id === app.id ? "selected" : ""}`}
                                onClick={() => setSelectedApp(app)}
                            >
                                <div className="applications-item-header">
                                    <h3>{app.name}</h3>
                                    <span className="applications-item-gender">{app.gender}</span>
                                </div>
                                <div className="applications-item-info">
                                    <p className="applications-item-studentid">{app.studentId}</p>
                                    <p className="applications-item-email">{app.email}</p>
                                </div>
                                <p className="applications-item-time">{app.submittedAt}</p>
                            </div>
                        ))
                    )}
                </div>

                {selectedApp && (
                    <div className="applications-detail">
                        <div className="applications-detail-header">
                            <h2>{selectedApp.name}</h2>
                            <button
                                className="applications-delete-btn"
                                onClick={() => handleDelete(selectedApp.id)}
                            >
                                삭제
                            </button>
                        </div>
                        <div className="applications-detail-content">
                            <div className="applications-detail-row">
                                <label>학번</label>
                                <p>{selectedApp.studentId}</p>
                            </div>
                            <div className="applications-detail-row">
                                <label>이름</label>
                                <p>{selectedApp.name}</p>
                            </div>
                            <div className="applications-detail-row">
                                <label>이메일</label>
                                <p>{selectedApp.email}</p>
                            </div>
                            <div className="applications-detail-row">
                                <label>성별</label>
                                <p>{selectedApp.gender}</p>
                            </div>
                            <div className="applications-detail-row applications-detail-appeal">
                                <label>지원 동기 및 자기 어필</label>
                                <p>{selectedApp.appeal}</p>
                            </div>
                            <div className="applications-detail-row">
                                <label>제출 시간</label>
                                <p>{selectedApp.submittedAt}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {showDeleteModal && (
                <div className="applications-modal-overlay" onClick={cancelDelete}>
                    <div className="applications-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="applications-modal-header">
                            <h2>지원자 삭제</h2>
                        </div>
                        <div className="applications-modal-body">
                            <p>이 지원자를 삭제하시겠습니까?</p>
                            <p className="applications-modal-subtext">삭제된 데이터는 복구할 수 없습니다.</p>
                        </div>
                        <div className="applications-modal-footer">
                            <button className="applications-modal-cancel-btn" onClick={cancelDelete}>
                                취소
                            </button>
                            <button className="applications-modal-confirm-btn" onClick={confirmDelete}>
                                삭제
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Applications;
