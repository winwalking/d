import React, { useState, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import i18n from "../i18n"; // i18n 설정 불러오기
const Timeline = () => {
  const [activeYear, setActiveYear] = useState<string>("2020");
  const { t } = useTranslation();

  const yearContent: { [key: string]: React.ReactNode } = {
    "2020": (
      <>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20201")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20201"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20202")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20202"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20203")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20203"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20204")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20204"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20205")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20205"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20206")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20206"
            components={{ br: <br /> }}
          />
        </p>
      </>
    ),
    "2021": (
      <>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20211")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20211"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20212")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20212"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20213")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20213"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20214")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20214"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20215")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20215"
            components={{ br: <br /> }}
          />
        </p>
      </>
    ),
    "2022": (
      <>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20221")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20221"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20222")}
        </h3>
        <p className="history_description">
          {t("pages.dashboard.historyDesc20222")}
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20223")}
        </h3>
        <p className="history_description">
          {t("pages.dashboard.historyDesc20223")}
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20224")}
        </h3>
        <p className="history_description">
          {t("pages.dashboard.historyDesc20224")}
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20225")}
        </h3>
        <p className="history_description">
          {t("pages.dashboard.historyDesc20225")}
        </p>
      </>
    ),
    "2023": (
      <>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20231")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20231"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20232")}
        </h3>
        <p className="history_description">
          {t("pages.dashboard.historyDesc20232")}
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20233")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20233"
            components={{ br: <br /> }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20234")}
        </h3>
        <p className="history_description">
          {t("pages.dashboard.historyDate20234")}
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20235")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20235"
            components={{ br: <br /> }}
          />
        </p>
      </>
    ),
    "2024": (
      <>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20241")}
        </h3>
        <p className="history_description">
          <Trans
            i18nKey="pages.dashboard.historyDesc20241"
            components={{ br: <br />, }}
          />
        </p>
        <h3 className="history_date">
          {t("pages.dashboard.historyDate20241")}
        </h3>
        <p className="history_description">
          {t("pages.dashboard.historyDesc20242")}
        </p>
      </>
    ),
  };

  const years = Object.keys(yearContent);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [scrollOffset, setScrollOffset] = useState<number>(-270);

  const handleYearClick = (year: string) => {
    setActiveYear(year);

    requestAnimationFrame(() => {
      if (containerRef.current) {
        const containerTop =
          containerRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: containerTop + scrollOffset,
          behavior: "smooth",
        });
      }

      if (sectionRefs.current[year]) {
        const sectionTop =
          sectionRefs.current[year]?.getBoundingClientRect().top +
          window.scrollY;
        window.scrollTo({
          top: sectionTop + scrollOffset,
          behavior: "smooth",
        });
      }
    });
  };
  return (
    <div
      className={`timeline-container ${
        activeYear ? "pt_160 pb_160 nm:pt_48! nm:pb_48!" : ""
      }`}
      ref={containerRef}
    >
      {/* History Heading */}
      <div className="history-heading">
        <h2 className="section_cts_title leading_84px mb_80 md:mb_40 sm:mb_20 nm:fw_bold">
          {t("pages.dashboard.history")}
        </h2>
      </div>

      {/* Timeline Content */}
      <div className="timeline-content sm:flex_column-reverse">
        {/* Content for the selected year */}
        <div className="left-content">
          {years.map((year) => (
            <div
              key={year}
              ref={(el) => {
                sectionRefs.current[year] = el;
              }}
              data-year={year}
              className={`year-section ${
                year === activeYear ? "visible" : "hidden"
              }`}
            >
              {yearContent[year]}
            </div>
          ))}
        </div>
        {/* Sidebar for years */}
        <div className="right-sidebar sm:flex_row! sm:items_center! sm:gap_24 md:items_flex-end sm:justify_start sm:p_0!">
          {years
            .filter((year) => !(i18n.language === "ja-JP" && year === "2024")) // 🔥 2024 숨기기
            .map((year) => (
              <div
                key={year}
                className={`year ${year === activeYear ? "active" : ""}`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
