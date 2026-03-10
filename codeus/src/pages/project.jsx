import { useEffect, useRef } from "react";
import Header from "../components/Header";
import { getAssetUrl } from "../utils/assetHelper";
import "./css/project.css";

function Project() {
	const cardsRef = useRef([]);

	const projects = [
		{
			generation: "1기",
			name: "Matie",
			subtitle: "지속 가능한 시장을 만들기 위한 챌린지",
			description: "데일리 챌린지 ESG 포인트 상점",
			period: "2024-01-02 ~ 2024-01-31",
			image: getAssetUrl("project-1.png"),
			githubUrl: "https://github.com/hyeseung12/Matie-Backend"
		},
		{
			generation: "1기",
			name: "Trip Cord",
			subtitle: "여행을 더욱 스마트하게",
			description: "여행 기록 서비스",
			period: "2024-01-02 ~ 2024-01-31",
			image: getAssetUrl("project-2.png")
		},
		{
			generation: "1기",
			name: "Withmere",
			subtitle: "같이 프로젝트 하실 분 모집합니다!",
			description: "또래 개발자들을 위한 모집 광고 서비스",
			period: "2024-01-02 ~ 2024-01-31",
			image: getAssetUrl("project-3.png"),
			githubUrl: "https://github.com/hyeseung12/with-middleware_Backend"
		},
		{
			generation: "3기",
			name: "Survly",
			subtitle: "설문조사 커뮤니티",
			description: "사람들이 만든 설문조사를 공유하는 커뮤니티 서비스",
			period: "2025-08-05 ~ 2025-09-20",
			image: getAssetUrl("survly.png"),
			githubUrl: "https://github.com/hyeonseo8822/survly"
		},
		{
			generation: "3기",
			name: "GoodsPick",
			subtitle: "아이돌MD 거래 플랫폼",
			description: "원하는 굿즈를 사거나 팔 수 있는 아이돌MD 거래 플랫폼",
			period: "2025-10-02 ~ 2025-11-22",
			image: getAssetUrl("goodspick.png"),
			githubUrl: "https://github.com/hyeonseo8822/GoodsPick"
		}
	];

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry, index) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add("card-animate");
					}, index * 150);
				}
			});
		}, { threshold: 0.1 });

		const currentCards = cardsRef.current;

		currentCards.forEach((card) => {
			if (card) observer.observe(card);
		});

		return () => {
			currentCards.forEach((card) => {
				if (card) observer.unobserve(card);
			});
		};
	}, []);

	return (
		<div className="project-page">
			<Header />
			
			<section className="projects-section">
				<div className="projects-inner">
					<div className="projects-header">
						<h2 className="projects-title">프로젝트 모음</h2>
						<p className="projects-subtitle">지금까지 저희는 이렇게 달려왔습니다</p>
						<p className="projects-description">동아리 인원 끼리 팀을 이뤄 사이드 프로젝트를 진행합니다.</p>
					</div>

					<div className="projects-grid">
						{projects.map((project, index) => (
							<div
								key={index}
								ref={(el) => (cardsRef.current[index] = el)}
								className="project-card"
								onClick={() => project.githubUrl && window.open(project.githubUrl, "_blank")}
								style={{ cursor: project.githubUrl ? "pointer" : "default" }}
							>
								<div className="project-image">
									<img src={project.image} alt={project.name} />
								</div>
								<div className="project-info">
									<p className="project-generation">{project.generation}</p>
									<h3 className="project-name">{project.name}</h3>
									<p className="project-subtitle">{project.subtitle}</p>
									<p className="project-description">{project.description}</p>
									<p className="project-period">{project.period}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Project;
