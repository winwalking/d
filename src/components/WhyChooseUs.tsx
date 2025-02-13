import React, { useState, useEffect } from "react";
import FinancialTechnologies from "assets/image/why_choose_us_finanicial_techno.svg";
import HyperPersonlized from "assets/image/why_choose_us_hyper_personali.svg";
import ProvenTrust from "assets/image/why_choose_us_proven_trust.svg";
import Leadership from "assets/image/why_choose_us_leadership.svg";

const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1280);
      setIsDesktop(width <= 1460);
    };
    // 1040

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Data array for dynamic rendering
  const reasons = [
    {
      img: <FinancialTechnologies />,
      title: "Innovative Financial Technologies",
      article: (
        <span
          className="fs_18 fw_normal leading_28px text-align_left break_break-all"
          // style={{
          //   fontSize: 18,
          //   fontWeight: 400,
          //   lineHeight: "27px",
          //   textAlign: "left",
          //   wordBreak: "break-all",
          // }}
        >
          We deliver precise asset {isDesktop && <br />}
          {!isDesktop && <br />} management using{isDesktop && <br />} Embedded
          {!isDesktop && <br />} Finance and{isDesktop && <br />} advanced
          technologies.
        </span>
      ),
    },
    {
      img: <HyperPersonlized />,
      title: "Hyper-Personalized Services",
      article: (
        <span
          className="fs_18 fw_normal leading_28px text-align_left break_break-all"
          // style={{
          //   fontSize: 18,
          //   fontWeight: 400,
          //   lineHeight: "27px",
          //   textAlign: "left",
          //   wordBreak: "break-all",
          // }}
        >
          We help achieve financial{isDesktop && <br />} goals with
          {!isDesktop && <br />} customized{isDesktop && <br />} investment
          plans and
          {!isDesktop && <br />}
          global{isDesktop && <br />} theme insights.
        </span>
      ),
    },
    {
      img: <ProvenTrust />,
      title: "Proven Trust and Reliability",
      article: (
        <span
          className="fs_18 fw_normal leading_28px text-align_left break_break-all"
          // style={{
          //   fontSize: 18,
          //   fontWeight: 400,
          //   lineHeight: "27px",
          //   textAlign: "left",
          //   wordBreak: "break-all",
          // }}
        >
          Our domestic and{isDesktop && <br />} international
          {!isDesktop && <br />} success stories{isDesktop && <br />} showcase
          our
          {!isDesktop && <br />} expertise and{isDesktop && <br />} reliability.
        </span>
      ),
    },
    {
      img: <Leadership />,
      title: "Leadership in the Asian Market",
      article: (
        <span
          className="fs_18 fw_normal leading_28px text-align_left break_break-all"
          //   lineHeight: "27px",
        >
          Expanding from Korea, we{isDesktop && <br />} are
          {!isDesktop && <br />}shaping the global{isDesktop && <br />}{" "}
          financial
          {!isDesktop && <br />}ecosystem across{isDesktop && <br />} Asia.
        </span>
      ),
    },
  ];

  return (
    <div className="w_100% bg_rgba(245,_239,_220,_1)">
      <div className="styles_section d_flex justify_between items_flex-start nm:flex_column-reverse py_60 box-sizing_box">
        {/* Dynamic rendering using map */}
        <div className="d_flex flex-wrap_wrap gap_40 w_740 xl:w_620 nm:w_100% why-us-grid-container">
          {reasons.map((reason, index) => (
            <div
              // className="w_350 xl:w_290 xl:h_389 d_flex 
              // flex_column justify_between py_40 px_28 box-sizing_box bg_white rounded_30"

              className="why-us-grid-item"
              key={index}
            >
              <div>
                <div className="d_flex w_97 h_97 py_25 px_24 flex_column items_flex-start gap_10 shrink_0 bg_rgba(146,_177,_227,_0.3) rounded_48.5 mb_32">
                  {/* Render image */}
                  {reason.img}
                </div>
                <p className="w_189 fs_20 fw_bold leading_30px text-align_left mb_12">
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
          <h2 className="section_cts_title leading_84px mb_28">
            Why
            <br /> Choose Us?
          </h2>
          <p className="fs_18 fw_400 leading_28px text_#33322e">
            Algolab is a trusted partner that helps clients achieve their
            financial goals {!isDesktop && <br />}through innovative financial
            technologies and hyper-personalized services.{!isDesktop && <br />}
            {isDesktop && "\u00A0"}
            As a leader in the Asian market, we are shaping the future of
            finance{!isDesktop && <br />}
            {isDesktop && "\u00A0"}together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
