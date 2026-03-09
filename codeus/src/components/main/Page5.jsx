import { getAssetUrl } from "../../utils/assetHelper";
import "./css/Page5.css";
function page5() {
  const members = [
    { name: "조현서", gen: "3기 멤버", role: "SW", img: getAssetUrl("member1.jpg") },
    { name: "이제희", gen: "3기 멤버", role: "SW", img: getAssetUrl("member2.jpg") },
    { name: "임하정", gen: "3기 멤버", role: "SW", img: getAssetUrl("member3.jpg") },
    { name: "김주람", gen: "3기 멤버", role: "SW", img: getAssetUrl("member4.jpg") },
    { name: "임지수", gen: "4기 멤버", role: "SW", img: getAssetUrl("member5.jpg") },
    { name: "박하얀", gen: "4기 멤버", role: "DE", img: getAssetUrl("member6.jpg") },
    { name: "진여진", gen: "4기 멤버", role: "DE", img: getAssetUrl("member7.jpg") },
    { name: "박재영", gen: "3기 멤버", role: "SW", img: getAssetUrl("member8.png") },
    { name: "공은성", gen: "4기 멤버", role: "SW", img: getAssetUrl("member9.jpg") },
    { name: "최한이", gen: "4기 멤버", role: "SW", img: getAssetUrl("member10.jpg") },
    { name: "노가우", gen: "4기 멤버", role: "SW", img: getAssetUrl("member11.jpg") },
    { name: "이서현", gen: "4기 멤버", role: "SW", img: getAssetUrl("member12.jpg") },
    { name: "강별", gen: "4기 멤버", role: "DE", img: getAssetUrl("member13.jpg") },
  ];

  return (
    <div className="page5">
      <h1 className="page5-title">동아리 부원 소개</h1>

      <div className="page5-grid">
        {members.map((member, index) => (
          <div className="page5-card" key={index}>
            <span className="page5-role">{member.role}</span>

            <div className="page5-img">
              <img src={member.img} alt={member.name} />
            </div>

            <p className="page5-gen">{member.gen}</p>
            <p className="page5-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page5;