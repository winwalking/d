import React, { useState, useEffect, useRef } from "react";
import SwipeTextSilder from "@components/SwipeTextSilder";
import MainImg from "assets/image/main_img.png";
import MainImgMd from "assets/image/main_img_md.png";
import MainSmImg from "assets/image/main_sm_img.png";
import BtnArrowWhite from "assets/image/btn_arrow_white.svg";
import WhoWeAreBigArrow from "assets/image/who_we_are_big_arrow.svg";
import RoboAdvisorImg from "assets/image/services_robo_advisor.png";
import CompanyValueImg from "assets/image/services_early_stage_comp_value.png";
import WhyChooseUs from "@components/WhyChooseUs";
import Timeline from "@components/Timeline";
import Team from "@components/Team";
import InputComp from "@components/InputComp";
import Header from "@components/base/Header";
import Footer from "@components/base/Footer";
import sendMail from "../api/send-email";
import Toast from "@components/Toast";
import TrendBottomArrow from "assets/image/trends_bottom_arrow.svg";
const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState<
    | "home"
    | "about-us"
    | "why-choose-us"
    | "services"
    | "history"
    | "team"
    | "contact-us"
  >("home");
  console.log(activeMenu, "activeMenu");
  const sectionRefs: Record<
    | "home"
    | "about-us"
    | "why-choose-us"
    | "services"
    | "history"
    | "team"
    | "contact-us",
    React.RefObject<HTMLDivElement | null>
  > = {
    home: useRef<HTMLDivElement | null>(null),
    "about-us": useRef<HTMLDivElement | null>(null),
    "why-choose-us": useRef<HTMLDivElement | null>(null),
    services: useRef<HTMLDivElement | null>(null),
    history: useRef<HTMLDivElement | null>(null),
    team: useRef<HTMLDivElement | null>(null),
    "contact-us": useRef<HTMLDivElement | null>(null),
  };

  const [scrolling, setScrolling] = useState(false); // 스크롤 잠금 상태 추가

  const scrollToSection = (id: keyof typeof sectionRefs) => {
    const section = sectionRefs[id]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveMenu(id); // 클릭한 메뉴로 활성화
      setScrolling(true); // 스크롤 잠금 활성화

      setTimeout(() => {
        setScrolling(false); // 잠금 해제
      }, 1000); // 스크롤 애니메이션 시간 동안 잠금 유지
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return; // 스크롤 잠금 상태일 때 무시

      const offsets = Object.entries(sectionRefs).map(([key, ref]) => ({
        key,
        offset: ref.current?.getBoundingClientRect().top || Infinity,
      }));

      const closest = offsets.reduce((acc, curr) =>
        Math.abs(curr.offset) < Math.abs(acc.offset) ? curr : acc
      );

      if (closest.key !== activeMenu) {
        setActiveMenu(closest.key as keyof typeof sectionRefs);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeMenu, scrolling, sectionRefs]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isDisplayXS, setIsDisplayXs] = useState(false);
  const [isDisplaySm, setIsDisplaySm] = useState(false);
  const [isDisplayMd, setIsDisplayMd] = useState(false);
  const [isDisplayNm, setIsDisplayNm] = useState(false);
  const [isDisplayLg, setIsDisplayLg] = useState(false);
  const [isDisplayXl, setIsDisplayXl] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [toast, setToast] = useState<{
    type: "success" | "warning" | "error" | "info"; // Restrict the type to specific values
    title: string;
    message: string;
    visible: boolean;
  }>({
    type: "success", // Default type
    title: "",
    message: "",
    visible: false,
  });

  // 입력 값 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // 유효성 검사 업데이트
    setIsFormValid(
      !!(
        updatedFormData.name &&
        updatedFormData.email &&
        updatedFormData.company &&
        updatedFormData.message
      )
    );
  };
  // Close toast handler
  const closeToast = () => {
    setToast({ ...toast, visible: false });
  };
  // 폼 전송 함수
  const sendForm = async () => {
    if (!isFormValid || loading) return; // 폼이 유효하지 않거나 로딩 중일 때 실행 안 함

    setLoading(true); // 로딩 시작
    try {
      const response = await sendMail(formData); // Replace with your API call
      console.log("Response from server:", response);

      setToast({
        type: "success", // Valid type
        title: "Success",
        message: "Message sent successfully!",
        visible: true,
      }); // Show success toast

      setFormData({ name: "", email: "", company: "", message: "" }); // 폼 초기화
    } catch (error) {
      setToast({
        type: "error", // Valid type
        title: "Error",
        message: "Failed to send message. Please try again later.",
        visible: true,
      }); // Show error toast
    } finally {
      setLoading(false); // 로딩 종료
      setIsFormValid(false);
    }
  };

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
  return (
    <div>
      <Header scrollToSection={scrollToSection} activeMenu={activeMenu} />
      <div className="styles_layout mt_0!">
        {/* Design Your Financial Future with ALGOLAB */}
        <div className="bg_rgba(50,_96,_231,_1) w_100%" ref={sectionRefs.home}>
          <div className="styles_section mt_0 d_flex justify_between items_flex-start py_124! pb_60! lg:py_96! lg:pb_44! md:flex_column! md:items_center sm:items_flex-start!">
            <div className="d_flex flex_column">
              {/* pt_60 */}
              <h1 className="fw_normal fs_80 md:fs_60 leading_120px md:leading_90px mb_80 nm:mb_20 text_white text-align_left lg:w_517 nm:w_100%">
                Design Your{isDisplayXl && <br />}
                {!isDisplayXl && !isDisplayLg && "\u00A0"}Financial
                {!isDisplayXl && <br />} {isDisplayMd && <br />}Future with
                {isDisplayXl && "\u00A0"}
                {isDisplayMd || (!isDisplayLg && "\u00A0")}
                {isDisplayMd && <br />}
                <span className="white-space_nowrap fw_bold px_16 py_4 rounded_16 bg_white leading_108px text_rgb(50,_96,_231)">
                  ALGOLAB
                </span>
              </h1>
              <span className="text_white leading_30px fs_20 md:fs_16 fw_normal mb_120 nm:mb_48 w_780 lg:w_517 nm:w_100%">
                Unlock new possibilities in asset management and
                {isDisplayLg && <br />} venture valuation with
                {!isDisplayXl && <br />} cutting-edge financial
                {isDisplayMd && <br />}technology
                {isDisplayLg && !isDisplayMd && <br />} and personalized
                solutions
              </span>
              {/* <button
                style={{
                  width: 352,
                  display: "inline-flex",
                  padding: "12px 24px",
                  boxSizing: "border-box",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: 5,
                  backgroundColor: "#fff",
                }}
              >
                <span
                  style={{
                    color: "#111",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "30px",
                  }}
                >
                  Download Company Introduction
                </span>
              </button> */}
            </div>

            <div className="pos_relative nm:w_100% nm:d_flex! nm:justify_center nm:w_100% sm:justify_start">
              <img
                src={isDisplayMd ? MainImgMd : MainImg}
                className="w_430 lg:min-w_367 lg:h_707 md:w_289 md:h_471"
              />
              <div
                className="pos_absolute bottom_60 left_-214 md:left_400! md:bottom_30! sm:left_158!"
                // style={{
                //   position: "absolute",
                //   bottom: 60, //  65 / 77
                //   left: -214, // -195
                // }}
              >
                <div className="gradient-border-rounded">
                  <img src={MainSmImg} className="md:w_80 md:h_80" />
                  <div
                    className="text_white fs_18 fw_normal leading_28px md:fs_16 md:leading_21px"
                    //   lineHeight: "27px",
                  >
                    <p className="mt_8 mb_18 md:mt_0! md:mb_0!">
                      Explore Our
                      <br />
                      Financial Solutions
                    </p>
                    <button
                      className="explore-solutions-btn"
                      onClick={() => scrollToSection("services")} // 키 값 "services" 전달
                    >
                      <BtnArrowWhite />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Real-Time Industry Trends */}
        <div className="bg_white w_100%">
          <div className="styles_section mt_0 d_flex items_center py_40! md:py_16! gap_8">
            <span className="text_rgb(50,_96,_231) fs_20 md:fs_16 fw_normal leading_36px md:leading_21px">
              Real-Time Industry Trends
            </span>
            <TrendBottomArrow />
          </div>
        </div>
        <SwipeTextSilder />
        {/* About Us: Who we are */}
        <div className="bg_white w_100%" ref={sectionRefs["about-us"]}>
          <div className="styles_section d_flex justify_between items_flex-end xl:items_flex-end lg:flex_column md:items_flex-start">
            <div className="lg:mb_80">
              {/* About Us: Who we are */}
              <div className="mb_24 pr_41 md:pr_30 w_1040 nm:w_100%">
                <h2 className="section_cts_title leading_84px mb_28 sm:mb_20 nm:fw_bold">
                  About Us:
                  <br /> Who we are
                </h2>
                <p
                  className="w_999 nm:w_100% fs_18 fw_normal text_dark leading_28px md:fs_16 md:leading_24px md:break_break-all"
                  //   lineHeight: "27px",
                >
                  <span className="fw_bold">Algolab</span>&nbsp;is a financial
                  technology company offering{!isDisplaySm && "\u00A0"}
                  {isDisplaySm && <br />}
                  <span className="fw_bold">personalized asset management</span>
                  &nbsp;for investors and
                  {!isDisplaySm && "\u00A0"}
                  {isDisplaySm && <br />}
                  <span className="fw_bold">startup valuation </span>
                  services for emerging businesses,{isDisplaySm && <br />}
                  leveraging
                  <span className="fw_bold"> embedded finance </span>
                  and &nbsp;
                  <span className="fw_bold">
                    innovative{isDisplaySm && <br />} financial technologies.
                  </span>
                  <br />
                  We provide&nbsp;
                  <span className="fw_bold">cutting-edge tools</span>
                  &nbsp;to&nbsp;
                  <span className="fw_bold">
                    financial{isDisplaySm && <br />} institutions,
                  </span>
                  &nbsp;
                  <span className="fw_bold">investors,</span>
                  &nbsp;and&nbsp;
                  <span className="fw_bold">startups,</span>&nbsp;and achieve
                  {isDisplaySm && <br />}their&nbsp;
                  <span className="fw_bold">financial goals.</span>
                </p>
              </div>
              {/* Our services include */}
              <div
                className="mb_24 fs_18 fw_normal text_dark leading_28px md:fs_16 md:leading_24px md:break_break-all"
                //   lineHeight: "27px",
              >
                Our services include:
                <ul className="ml_8">
                  <li className="list-type_inside md:fs_16 md:leading_24px sm:list-type_inside::marker">
                    <b>Robo-advisory solutions</b>&nbsp;for&nbsp;
                    <b>pension planning</b>
                    {isDisplaySm && <br />}&nbsp;
                    <span>
                      and&nbsp;
                      <b>startup valuation</b>
                    </span>
                  </li>
                  <li className="list-type_inside md:fs_16 md:leading_24px sm:list-type_inside::marker">
                    <b>Behavioral economics–based</b>&nbsp;personalized{" "}
                    {isDisplaySm && <br />} <span>asset management</span>
                  </li>
                  <li className="list-type_inside md:fs_16 md:leading_24px sm:list-type_inside::marker">
                    <b>Tailored investment strategies</b>&nbsp;and&nbsp;
                    <b>AI-driven</b>&nbsp;{isDisplaySm && <br />}
                    <span>reporting</span>
                  </li>
                  <li className="list-type_inside md:fs_16 md:leading_24px sm:list-type_inside::marker">
                    <b>Global theme analysis</b>&nbsp;and&nbsp;
                    <b>alternative</b> {isDisplaySm && <br />}
                    <span>
                      <b>investment</b>&nbsp;solutions
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="fs_18 fw_normal text_dark leading_28px md:fs_16 md:leading_24px md:break_break-all"
                //   lineHeight: "27px",
              >
                As we{" "}
                <span className="fw_bold">
                  expand beyond&nbsp; Korea into the Asian market,
                </span>
                {isDisplaySm && <br />}
                {!isDisplaySm && "\u00A0"}we empower our clients to&nbsp;
                <span className="fw_bold">
                  make better financial {isDisplaySm && <br />}decisions.
                </span>
                &nbsp;
                {!isDisplaySm && <br />}
                Experience the future of&nbsp;
                <span className="fw_bold">
                  finance with {isDisplaySm && <br />}Algolab.
                </span>
              </div>
            </div>
            <div className="d_flex justify_flex-end w_100% lg:d_flex lg:justify_flex-end">
              <WhoWeAreBigArrow />
            </div>
          </div>
        </div>
        {/* Why Choose Us? */}
        <div ref={sectionRefs["why-choose-us"]}>
          <WhyChooseUs />
        </div>

        {/* Services */}
        <div
          className="w_100% bg_white border-bottom_solid border-bottom-w_1 border_rgba(213,_219,_226,_1)"
          ref={sectionRefs.services}
        >
          <div className="styles_section mx_auto my_0 px_0 py_160">
            <h2 className="section_cts_title leading_84px mb_80 md:mb_40 sm:mb_20 nm:fw_bold">
              Services
            </h2>
            {/* Retirement Pension Robo-Advisor */}
            <div className="mb_160 nm:mb_80 md:mb_60 d_flex w_100% items_flex-start nm:flex_column! nm:items_center! nm:w_100%">
              <div className="mr_160 xl:mr_80! lg:mr_40! nm:mr_0! nm:w_100%">
                <img
                  src={RoboAdvisorImg}
                  alt=""
                  className="xl:w_620 xl:h_423 lg:w_500 lg:h_342 nm:min-w_100%! nm:min-h_100%!"
                />
              </div>
              <div className="min-w_610 nm:w_100% sm:min-w_100%! d_flex flex_column items_flex-start justify_between">
                <p className="fs_32 md:fs_26 sm:fs_20 leading_48px md:leading_39px sm:leading_30px nm:mt_40 md:mt_20 mb_28 md:mb_22 sm:mb_16 fw_normal text_dark">
                  Retirement Pension
                  <br />
                  Robo-Advisor
                </p>
                <span className="fs_18 md:fs_16 leading_28px md:leading_24px text_dark mb_24 fw_normal md:break_break-all">
                  Algolab’s retirement pension robo-advisor integrates
                  <br />
                  <span className="fw_bold">behavioral economics</span>
                  &nbsp;and&nbsp;
                  <span className="fw_bold">
                    cutting-edge financial{isDisplaySm && <br />} technologies
                  </span>
                  {!isDisplaySm && <br />}
                  {isDisplaySm && "\u00A0"}
                  to provide&nbsp;
                  <span className="fw_bold">
                    personalized pension {isDisplaySm && <br />}management
                  </span>
                  &nbsp;solutions.
                </span>
                <ul className="ml_22">
                  <li
                    className="list-type_outside fs_18 md:fs_16 leading_28px md:leading_24px fw_normal text_dark md:break_break-all"
                    // lineHeight: "27px",
                  >
                    <b>Analyzes</b> clients’ investment preferences
                    {isDisplaySm && <br />} and&nbsp;
                    <b>designs</b> customized
                    {!isDisplaySm && <br />} investment plans
                  </li>
                  <li
                    className="list-type_outside fs_18 md:fs_16 leading_28px md:leading_24px fw_normal text_dark md:break_break-all"
                    // lineHeight: "27px",
                  >
                    <b>Optimizes</b> fund and global stock selection through
                    {isDisplaySm && <br />}the&nbsp;
                    <b>
                      Global Theme{isDisplaySm && "\u00A0"}
                      {!isDisplaySm && <br />}
                      Machine
                    </b>
                    &nbsp;and <b>NLP-based</b>&nbsp;{isDisplaySm && <br />}
                    analysis
                  </li>
                  <li
                    className="list-type_outside fs_18 md:fs_16 leading_28px md:leading_24px fw_normal text_dark md:break_break-all"
                    // lineHeight: "27px",
                  >
                    <b>Ensures</b> stable and effective pension management
                    with&nbsp;
                    <b>
                      personalized
                      {!isDisplaySm && <br />} glide paths
                    </b>
                  </li>
                  <li
                    className="list-type_outside fs_18 md:fs_16 leading_28px md:leading_24px fw_normal text_dark md:break_break-all"
                    // lineHeight: "27px",
                  >
                    <b>Proven track record,</b> including successful
                    {isDisplaySm && <br />}
                    collaborations with&nbsp;
                    <b>
                      KB{isDisplaySm && "\u00A0"}
                      {!isDisplaySm && <br />}
                      Securities’ MOA
                    </b>
                    &nbsp;service {isDisplaySm && <br />}and&nbsp;
                    <b>Kiwoom Asset Management’s TDF</b>
                  </li>
                </ul>
              </div>
            </div>
            {/* Early-Stage Company Valuation */}
            <div className="d_flex w_100% items_flex-start flex_row-reverse justify_between nm:flex_column! nm:items_center! nm:w_100%">
              <div className="ml_160 xl:ml_80! lg:ml_40! nm:ml_0! nm:w_100%">
                <img
                  src={CompanyValueImg}
                  alt=""
                  className="xl:w_620 xl:h_423 lg:w_500 lg:h_342 nm:min-w_100%! nm:min-h_100%!"
                />
              </div>
              <div className="min-w_610 nm:w_100% sm:min-w_100%! d_flex flex_column items_flex-start justify_between">
                <p className="fs_32 md:fs_26 sm:fs_20 leading_48px md:leading_39px sm:leading_30px nm:mt_40 md:mt_20 mb_28 md:mb_22 sm:mb_16 fw_normal text_dark">
                  Early-Stage Company Valuation
                </p>
                <span
                  className="fs_18 md:fs_16 leading_28px md:leading_24px text_dark mb_24 fw_normal md:break_break-all" // lineHeight: "27px"
                >
                  Algolab’s early-stage company valuation solution
                  {isDisplaySm && <br />}
                  combines&nbsp;
                  <span className="fw_bold">
                    corporate
                    {!isDisplaySm && <br />}
                    data
                  </span>
                  &nbsp;and&nbsp;
                  <span className="fw_bold">financial information</span>
                  &nbsp;to{isDisplaySm && <br />} deliver&nbsp;
                  <span className="fw_bold">
                    reliable, up-to-date valuations.
                  </span>
                  &nbsp;
                </span>
                <ul className="ml_22 mb_24">
                  <li
                    className="list-type_outside fs_18 md:fs_16 leading_28px md:leading_24px fw_normal text_dark md:break_break-all"
                    // lineHeight: "27px",
                  >
                    <b>Conducts</b>&nbsp;precise,&nbsp;<b>data-driven</b>
                    &nbsp;valuations{isDisplaySm && <br />} through&nbsp;
                    <b>
                      ERP{isDisplaySm && "\u00A0"}
                      {!isDisplaySm && <br />}
                      system
                    </b>
                    &nbsp;integration
                  </li>
                  <li
                    className="list-type_outside fs_18 md:fs_16 leading_28px md:leading_24px fw_normal text_dark md:break_break-all"
                    // lineHeight: "27px",
                  >
                    <b>Streamlines</b>&nbsp;the&nbsp;creation of investment
                    proposals with an&nbsp;
                    <b>
                      IR pitch deck{isDisplaySm && "\u00A0"}
                      {!isDisplaySm && <br />}
                      publishing
                    </b>
                    &nbsp;solution,{isDisplaySm && <br />} facilitating
                    investment attraction
                  </li>
                  <li
                    className="list-type_outside fs_18 md:fs_16 leading_28px md:leading_24px fw_normal text_dark md:break_break-all"
                    // lineHeight: "27px",
                  >
                    <b>Expands</b> across <b>Asia -</b>&nbsp;including Korea,
                    Japan,{isDisplaySm && <br />} China, and Vietnam&nbsp;-
                    {!isDisplaySm && <br />}
                    fostering a{" "}
                    <b>global investment{isDisplaySm && <br />} ecosystem</b>
                  </li>
                </ul>
                {!(isDisplaySm || isDisplayNm) && (
                  <span
                    className="fs_18 md:fs_16 leading_28px md:leading_24px fw_normal text_dark md:break_break-all"
                    // lineHeight: "27px",
                  >
                    Make clearer investment decisions with&nbsp;
                    <span className="fw_bold">Algolab’s</span>
                    &nbsp;valuation solutions.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* History */}
        <div
          ref={sectionRefs.history}
          className="w_100% bg_white border-bottom_solid border-bottom-w_1 border_rgba(213,_219,_226,_1)"
        >
          <div className="styles_section mx_auto my_0 px_0! py_0!">
            <Timeline />
          </div>
        </div>
        {/* Team */}
        <div
          className="w_100% bg_white border-bottom_solid border-bottom-w_1 border_rgba(213,_219,_226,_1)"
          ref={sectionRefs.team}
        >
          <div className="styles_section">
            <Team />
          </div>
        </div>
        {/* Contact Us */}
        <div
          className="w_100% bg_rgba(245,_246,_250,_1) pos_relative"
          ref={sectionRefs["contact-us"]}
        >
          <div className="styles_section mx_auto my_0 px_0 py_80">
            <h2 className="section_cts_title leading_84px mb_80  md:mb_20 text-align_center nm:fw_bold sm:text-align_left">
              Contact Us
            </h2>
            <div className="mb_80 md:mb_40">
              {/* Input Field */}
              <div className="mb_40 md:mb_20">
                <InputComp
                  label="Your Name"
                  type="input"
                  name="name" // Add name prop
                  placeholder=""
                  width={isDisplayMd ? "100%" : "690px"}
                  height="50px"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="d_flex justify_between mb_40 md:mb_20 xl:flex-wrap_wrap!">
                <InputComp
                  label="Work Email"
                  type="input"
                  name="email" // Add name prop
                  placeholder=""
                  width={isDisplayMd ? "100%" : "690px"}
                  height="50px"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputComp
                  label="Company Name"
                  type="input"
                  name="company" // Add name prop
                  placeholder=""
                  width={isDisplayMd ? "100%" : "690px"}
                  height="50px"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              {/* Textarea Field */}
              <InputComp
                label="Message"
                type="textarea"
                name="message" // Add name prop
                placeholder="Tell us how can we help!
Leave your message, and we’ll get back to you shortly."
                height="250px"
                resize="none"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="d_flex justify_center items_center">
              <button
                className={`px_24 py_12 rounded_5 ${
                  isFormValid && !loading
                    ? "bg_dark"
                    : "bg_rgba(17,_17,_17,_0.5)"
                } ${
                  isFormValid && !loading
                    ? "cursor_pointer"
                    : "cursor_not-allowed"
                }`}
                onClick={sendForm}
                disabled={!isFormValid || loading} // 버튼 비활성화
              >
                <span className="text_white fs_20 fw_bold leading_30px">
                  {loading ? "Sending..." : "Submit"}
                </span>
              </button>
            </div>
          </div>
          {/* Toast Component */}
          {toast.visible && (
            <Toast
              type={toast.type}
              title={toast.title}
              message={toast.message}
              onClose={closeToast}
              duration={5000} // Duration in milliseconds
            />
          )}
          <Footer scrollToSection={scrollToSection} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
