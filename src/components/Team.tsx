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
      name: "Naoko Mayumi",
      title: "President & CEO",
    },
    {
      imgSrc: TeamProfileAbiko,
      name: "Yoshihiro Abiko",
      title: "CIO",
    },
    {
      imgSrc: TeamProfileSeungjong,
      name: "Kim Seung Jong",
      title: "CTO",
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
      <div className="w_766 my_0 mx_auto text-align_center sm:w_100%">
        <h2 className="section_cts_title leading_84px mb_28">Team</h2>
        <p
          className="fs_18 fw_400 leading_28px text_dark mb_80"
          //   lineHeight: "27px",
        >
          The Algolab team designs the future alongside our clients, realizing
          new possibilities in finance. Our journey is driven by the success of
          our clients.
        </p>
      </div>

      {/* Team Profile Grid */}
      <div className="team-grid-container">
        {teamData.map((member, index) => (
          <div className="team-grid-item" key={index}>
            {/* Member Image */}
            <img src={member.imgSrc} alt={`${member.name}`} />
            {/* Member Details */}
            <div className="team-info-box">
              <p>{member.name}</p>
              <span>{member.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
