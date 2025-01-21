import React from "react";
import TeamProfileMayumi from "assets/image/team_mayumi.png";
import TeamProfileAbiko from "assets/image/team_abiko.png";
import TeamProfileSeungjong from "assets/image/team_seungjong.png";
import TeamProfileDongho from "assets/image/team_dongho.png";
import TeamProfileSeyoung from "assets/image/team_seyoung.png";
import TeamProfileJonghyun from "assets/image/team_jonghyun.png";
import TeamProfileDonguk from "assets/image/team_donguk.png";
import TeamProfileSeungjin from "assets/image/team_seungjin.png";
import TeamProfileSeoyoung from "assets/image/team_seoyoung.png";
import TeamProfileHyunji from "assets/image/team_hyunji.png";
const Team = () => {
    // Array containing data for each team member
    const teamData = [
      {
        imgSrc: TeamProfileMayumi,
        name: "Mayumi Naoko",
        title: "Representative Director",
      },
      {
        imgSrc: TeamProfileAbiko,
        name: "Yoshihiro Abiko",
        title: "Director",
      },
      {
        imgSrc: TeamProfileSeungjong,
        name: "Kim Seung Jong",
        title: "CEO",
      },
      {
        imgSrc: TeamProfileDongho,
        name: "Suk Dong Ho",
        title: "Director",
      },
      {
        imgSrc: TeamProfileSeyoung,
        name: "Kim Se Young",
        title: "Assistant Manager",
      },
      {
        imgSrc: TeamProfileJonghyun,
        name: "Park Jong Hyun",
        title: "Associate Director",
      },
      {
        imgSrc: TeamProfileDonguk,
        name: "Shin Dong Uk",
        title: "Assistant Manager",
      },
      {
        imgSrc: TeamProfileSeungjin,
        name: "Kim Seung Jin",
        title: "Assistant Manager",
      },
      {
        imgSrc: TeamProfileSeoyoung,
        name: "Lee Seo Yeong",
        title: "Manager",
      },
      {
        imgSrc: TeamProfileHyunji,
        name: "Song Hyun Ji",
        title: "Assistant Manager",
      },
    ];
  
    return (
      <div>
        {/* Team Section Header */}
        <div style={{ width: 766, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: 56,
              fontWeight: 400,
              lineHeight: "84px",
              marginBottom: "28px",
            }}
          >
            Team
          </h2>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: "27px",
              color: "#111",
              marginBottom: "80px",
            }}
          >
            The Algolab team designs the future alongside our clients, realizing
            new possibilities in finance. Our journey is driven by the success of
            our clients.
          </p>
        </div>
  
        {/* Team Profile Grid */}
        <div className="team-grid-container">
          {teamData.map((member, index) => (
            <div
              className="team-grid-item"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
              key={index}
            >
              {/* Member Image */}
              <img src={member.imgSrc} alt={`${member.name}`} />
              {/* Member Details */}
              <div
                style={{
                  width: 258,
                  padding: "16px 20px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 8,
                  backgroundColor: "#F6F7FB",
                }}
              >
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "30px",
                    color: "#111",
                  }}
                >
                  {member.name}
                </p>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "#767676",
                  }}
                >
                  {member.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;
  
