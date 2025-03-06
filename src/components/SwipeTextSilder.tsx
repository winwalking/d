import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // i18n 설정 불러오기

const ImageSlider: React.FC = () => {
    const { t } = useTranslation();
  const texts = [
    `${t("pages.dashboard.slideDataAnalytics")}`,
    " \u00A0\u2022\u00A0 ", // Add non-breaking spaces around "•"
    `${t("pages.dashboard.slidePlatform")}`,
    " \u00A0\u2022\u00A0 ",
   `${t("pages.dashboard.slideHealthcare")}`,
    " \u00A0\u2022\u00A0 ",
   `${t("pages.dashboard.slideArtifiIntelli")}`,
    " \u00A0\u2022\u00A0 ",
    `${t("pages.dashboard.slideMobility")}`,
    " \u00A0\u2022\u00A0 ",
   `${t("pages.dashboard.slideSoftware")}`,
    " \u00A0\u2022\u00A0 ",
  ];

  return (
    <div className="slider">
      <div className="slideTrack">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`slide ${
              text === "Artificial Intelligence" ? "wide" : ""
            }`}
          >
            <span className="md:fw_bold md:fs_28! md:leading_42px!">{text}</span>
          </div>
        ))}
        {texts.map((text, index) => (
          <div
            key={index + texts.length}
            className={`slide ${
              text === "Artificial Intelligence" ? "wide" : ""
            }`}
          >
            <span className="md:fw_bold md:fs_28! md:leading_42px!">{text}</span>
          </div>
        ))}
        {texts.map((text, index) => (
          <div
            key={index + texts.length * 2}
            className={`slide ${
              text === "Artificial Intelligence" ? "wide" : ""
            }`}
          >
            <span className="md:fw_bold md:fs_28! md:leading_42px!">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
