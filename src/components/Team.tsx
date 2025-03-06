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
import { useTranslation, Trans } from "react-i18next";
import i18n from "../i18n"; // i18n 설정 불러오기
const Team = () => {
  const { t } = useTranslation();

  // Array containing data for each team member
  const teamData = [
    {
      imgSrc: TeamProfileMayumi,
      name: `${t("pages.dashboard.teamMayumi")}`,
      title: `${t("pages.dashboard.mayumiTitle")}`,
    },
    {
      imgSrc: TeamProfileAbiko,
      name: `${t("pages.dashboard.teamAbiko")}`,
      title: `${t("pages.dashboard.abikoTitle")}`,
    },
    {
      imgSrc: TeamProfileSeungjong,
      name: `${t("pages.dashboard.teamSeungjong")}`,
      title: `${t("pages.dashboard.seungjongTitle")}`,
    },
    {
      imgSrc: TeamProfileDongho,
      name: `${t("pages.dashboard.teamDongho")}`,
      title: `${t("pages.dashboard.donghoTitle")}`,
    },
    {
      imgSrc: TeamProfileSeyoung,
      name: `${t("pages.dashboard.teamSeyoung")}`,
      title: `${t("pages.dashboard.seyoungTitle")}`,
    },
    {
      imgSrc: TeamProfileJonghyun,
      name: `${t("pages.dashboard.teamJonghyun")}`,
      title: `${t("pages.dashboard.jonghyunTitle")}`,
    },
    {
      imgSrc: TeamProfileDonguk,
      name: `${t("pages.dashboard.teamDonguk")}`,
      title: `${t("pages.dashboard.dongukTitle")}`,
    },
    {
      imgSrc: TeamProfileSeungjin,
      name: `${t("pages.dashboard.teamSeungjin")}`,
      title: `${t("pages.dashboard.seungjinTitle")}`,
    },
    {
      imgSrc: TeamProfileSeoyoung,
      name: `${t("pages.dashboard.teamSeoyoung")}`,
      title: `${t("pages.dashboard.seoyoungTitle")}`,
    },
    {
      imgSrc: TeamProfileHyunji,
      name: `${t("pages.dashboard.teamHyunji")}`,
      title: `${t("pages.dashboard.hyunjiTitle")}`,
    },
  ];

  return (
    <div>
      {/* Team Section Header */}
      <div className="w_766 my_0 mx_auto text-align_center sm:w_100%">
        <h2 className="section_cts_title leading_84px mb_28 md:mb_20 nm:fw_bold sm:text-align_left">
          {t("pages.dashboard.team")}
        </h2>
        <p
          className="fs_18 md:fs_16 fw_400 leading_28px md:leading_24px text_dark mb_80 md:mb_40 sm:text-align_left"
          //   lineHeight: "27px",
        >
          {t("pages.dashboard.teamDesc")}
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
