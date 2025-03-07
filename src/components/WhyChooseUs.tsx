import React, { useState, useEffect } from "react";
import FinancialTechnologies from "assets/image/why_choose_us_finanicial_techno.svg";
import HyperPersonlized from "assets/image/why_choose_us_hyper_personali.svg";
import ProvenTrust from "assets/image/why_choose_us_proven_trust.svg";
import Leadership from "assets/image/why_choose_us_leadership.svg";
import FinancialTechnologiesMini from "assets/image/why_choose_us_finanicial_techno_responsive.svg";
import HyperPersonlizedMini from "assets/image/why_choose_us_hyper_personali_responsive.svg";
import ProvenTrustMini from "assets/image/why_choose_us_proven_trust_responsive.svg";
import LeadershipMini from "assets/image/why_choose_us_leadership_responsive.svg";
import { useTranslation, Trans } from "react-i18next";
import i18n from "../i18n"; // i18n 설정 불러오기

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const [isDisplayXs, setIsDisplayXs] = useState(false);
  const [isDisplaySm, setIsDisplaySm] = useState(false);
  const [isDisplayMd, setIsDisplayMd] = useState(false);
  const [isDisplayNm, setIsDisplayNm] = useState(false);
  const [isDisplayLg, setIsDisplayLg] = useState(false);
  const [isDisplayXl, setIsDisplayXl] = useState(false);
  useEffect(() => {
    // const handleResize = () => {
    //   const width = window.innerWidth;
    //   setIsDisplayLg(width <= 1040);
    //   setIsDisplayXl(width <= 1280 && width > 1040);
    // };
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDisplayXs(width <= 390);
      setIsDisplaySm(width <= 675);
      setIsDisplayMd(width <= 1040);
      setIsDisplayNm(width <= 1180);
      setIsDisplayLg(width <= 1280);
      setIsDisplayXl(width <= 1460);
    };
    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Data array for dynamic rendering
  const reasons = [
    {
      img: isDisplayMd ? (
        <FinancialTechnologiesMini />
      ) : (
        <FinancialTechnologies />
      ),
      title: `${t("pages.dashboard.innofinancial")}`,
      article: (
        <span
          className={`${
            isDisplayXs ? "" : "line-clamp_three"
          } fs_18 fw_normal leading_28px text-align_left break_break-all sm:fs_12 sm:leading_18px`} //   lineHeight: "27px",
        >
          {t("pages.dashboard.innofinancialDesc")}
          {/* We deliver precise asset {isDisplayXl && <br />}
          {!isDisplayXl && <br />} management using {isDisplayXl && <br />}
          Embedded
          {!isDisplayXl && <br />} Finance and{isDisplayXl && <br />} advanced
          technologies. */}
        </span>
      ),
    },
    {
      img: isDisplayMd ? <HyperPersonlizedMini /> : <HyperPersonlized />,
      title: `${t("pages.dashboard.hyperPersonlized")}`,
      article: (
        <span
          className={`${
            isDisplayXs ? "" : "line-clamp_three"
          } fs_18 fw_normal leading_28px text-align_left break_break-all sm:fs_12 sm:leading_18px`}
          //   lineHeight: "27px",
        >
          {t("pages.dashboard.hyperPersonlizedDesc")}
          {/* We help achieve financial{isDisplayXl && <br />} goals with
          {!isDisplayXl && <br />} customized{isDisplayXl && <br />} investment
          plans and
          {!isDisplayXl && <br />}
          global{isDisplayXl && <br />} theme insights. */}
        </span>
      ),
    },
    {
      img: isDisplayMd ? <ProvenTrustMini /> : <ProvenTrust />,
      title: `${t("pages.dashboard.provenTrust")}`,
      article: (
        <span
          className={`${
            isDisplayXs ? "" : "line-clamp_three"
          } fs_18 fw_normal leading_28px text-align_left break_break-all sm:fs_12 sm:leading_18px`}
        >
          {t("pages.dashboard.provenTrustDesc")}
          {/* Our domestic and{isDisplayXl && <br />} international
          {!isDisplayXl && <br />} success
          {isDisplayMd && <br />} stories
          {isDisplayXl || (!isDisplayMd && <br />)} showcase our
          {!isDisplayXl || (isDisplayMd && <br />)} expertise and
          {isDisplayXl || (!isDisplayMd && <br />)}
          reliability. */}
        </span>
      ),
    },
    {
      img: isDisplayMd ? <LeadershipMini /> : <Leadership />,
      title: `${t("pages.dashboard.leadershipMarket")}`,
      article: (
        <span
          className={`${
            isDisplayXs ? "" : "line-clamp_three"
          } fs_18 fw_normal leading_28px text-align_left break_break-all sm:fs_12 sm:leading_18px`} //   lineHeight: "27px",
        >
          {t("pages.dashboard.leadershipMarketDesc")}
          {/* Expanding from Korea, {!isDisplayXl || (isDisplayMd && <br />)}we are
          {isDisplayXl || (!isDisplayMd && <br />)} shaping the global
          {isDisplayXl && <br />}
          financial
          {!isDisplayXl && <br />} ecosystem
          {!isDisplayXl || (isDisplayMd && <br />)} across Asia. */}
        </span>
      ),
    },
  ];

  return (
    <div className="w_100% bg_rgba(245,_239,_220,_1)">
      <div className="styles_section d_flex justify_between items_flex-start nm:flex_column-reverse py_60 box-sizing_box">
        {/* Dynamic rendering using map */}
        <div className="d_flex flex-wrap_wrap gap_40 md:gap_16! w_740 xl:w_620 md:min-w_none! nm:w_100% why-us-grid-container">
          {reasons.map((reason, index) => (
            <div
              // className="w_350 xl:w_290 xl:h_389 d_flex
              // flex_column justify_between py_40 px_28 box-sizing_box bg_white rounded_30"

              className="why-us-grid-item"
              key={index}
            >
              <div>
                <div className="d_flex w_97 h_97 md:w_60 md:h_60 py_25 px_24 flex_column items_flex-start md:justify_center md:items_center md:p_0 gap_10 shrink_0 bg_rgba(146,_177,_227,_0.3) rounded_48.5 mb_32">
                  {/* Render image */}
                  {reason.img}
                </div>
                <p
                  className={`${
                    reason.title === `${t("pages.dashboard.leadershipMarket")}`
                      ? "xs:tracking_-0.08em"
                      : ""
                  } w_189 fs_20 fw_bold leading_30px text-align_left mb_12 md:fs_16 sm:w_fit-content sm:fs_14 sm:leading_21px`}
                >
                  {/* Render title */}
                  {reason.title}
                </p>
              </div>

              {/* Render article */}
              {reason.article}
            </div>
          ))}
        </div>
        <div className="w_610 xl:w_509 nm:w_100% nm:mb_40">
          <h2 className="section_cts_title leading_84px mb_28 sm:mb_20 nm:fw_bold">
            {t("pages.dashboard.why")}
            <br />
            {t("pages.dashboard.ChooseUs")}
          </h2>
          <p className="fs_18 md:fs_16 fw_400 leading_28px text_#33322e md:break_break-all">
            <Trans
              i18nKey="pages.dashboard.whyChooseUsDesc"
              components={{
                br: isDisplayXs ? <br /> : <></>,
                comma: isDisplayXs ? <span>,</span> : <></>,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
