import React, { useState, useEffect, useRef } from "react";
import SwipeTextSilder from "@components/SwipeTextSilder";
import MainImg from "assets/image/main_img.png";
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

  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

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

  // 폼 전송 함수
  const sendForm = async () => {
    if (!isFormValid || loading) return; // 폼이 유효하지 않거나 로딩 중일 때 실행 안 함

    setLoading(true); // 로딩 시작
    try {
      const response = await sendMail(formData);
      console.log("Response from server:", response);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", company: "", message: "" }); // 폼 초기화
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false); // 로딩 종료
      setIsFormValid(false);
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} activeMenu={activeMenu} />
      <div className="styles_layout" style={{ marginTop: 0 }}>
        {/* Design Your Financial Future with ALGOLAB */}
        <div
          ref={sectionRefs.home}
          style={{
            backgroundColor: "#3260E7",
            width: "100%",
          }}
        >
          <div
            className="styles_section"
            style={{
              marginTop: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingTop: 60,
              paddingBottom: 60,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: 60,
              }}
            >
              <h1
                style={{
                  fontWeight: "400",
                  fontSize: 80,
                  textAlign: "left",
                  lineHeight: "120px",
                  marginBottom: "40px",
                  color: "#fff",
                }}
              >
                Design Your Financial
                <br />
                Future with&nbsp;
                <span
                  style={{
                    fontWeight: 600,
                    padding: "4px 16px",
                    borderRadius: 16,
                    color: "#3260E7",
                    backgroundColor: "#FFF",
                    lineHeight: "108px",
                  }}
                >
                  ALGOLAB
                </span>
              </h1>
              <span
                style={{
                  width: 780,
                  color: "#fff",
                  lineHeight: "30px",
                  fontSize: 20,
                  fontWeight: 400,
                  marginBottom: 120,
                }}
              >
                Unlock new possibilities in asset management and venture
                valuation with
                <br /> cutting-edge financial technology and personalized
                solutions
              </span>
              <button
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
              </button>
            </div>

            <div style={{ position: "relative" }}>
              <img src={MainImg} style={{ width: 420 }} />
              <div
                style={{
                  position: "absolute",
                  bottom: 65,
                  left: -214,
                }}
              >
                <div className="gradient-border-rounded">
                  <img src={MainSmImg} />
                  <div
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: 600,
                      lineHeight: "27px",
                    }}
                  >
                    <p style={{ marginBottom: 18, marginTop: 8 }}>
                      Explore Our
                      <br />
                      Financial Solutions
                    </p>
                    <button
                      style={{
                        position: "absolute",
                        bottom: 16,
                        padding: 7,
                        borderRadius: "19px",
                        cursor: "pointer",
                        border: "2px solid #FFF",
                      }}
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
        <div style={{ backgroundColor: "#fff", width: "100%" }}>
          <div
            className="styles_section"
            style={{
              marginTop: 0,

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 40,
              paddingBottom: 40,
            }}
          >
            <span
              style={{
                color: "#3260E7",
                fontSize: 20,
                fontWeight: 600,
                lineHeight: "36px",
              }}
            >
              Real-Time Industry Trends
            </span>
          </div>
        </div>
        <SwipeTextSilder />
        {/* About Us: Who we are */}
        <div
          style={{ width: "100%", backgroundColor: "#fff" }}
          ref={sectionRefs["about-us"]}
        >
          <div
            className="styles_section"
            style={{
              margin: "0 auto",
              padding: "160px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              {/* About Us: Who we are */}
              <div style={{ marginBottom: 24, width: 1040, paddingRight: 41 }}>
                <h2
                  style={{
                    fontSize: 56,
                    color: "#111",
                    fontWeight: 400,
                    lineHeight: "84px",
                    marginBottom: 28,
                  }}
                >
                  About Us:
                  <br /> Who we are
                </h2>
                <p
                  style={{
                    width: 999,
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#111",
                    lineHeight: "27px",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Algolab</span>&nbsp;is a
                  financial technology company offering&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    personalized asset management
                  </span>
                  &nbsp;for investors and
                  <br />
                  <span style={{ fontWeight: 600 }}>startup valuation</span>
                  &nbsp;services for emerging businesses, leveraging&nbsp;
                  <span style={{ fontWeight: 600 }}>embedded finance</span>
                  &nbsp;and&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    innovative financial technologies.
                  </span>
                  <br />
                  We provide&nbsp;
                  <span style={{ fontWeight: 600 }}>cutting-edge tools</span>
                  &nbsp;to&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    financial institutions,
                  </span>
                  &nbsp;
                  <span style={{ fontWeight: 600 }}>investors,</span>
                  &nbsp;and&nbsp;
                  <span style={{ fontWeight: 600 }}>startups,</span>&nbsp;and
                  achieve their&nbsp;
                  <span style={{ fontWeight: 600 }}>financial goals.</span>
                </p>
              </div>
              {/* Our services include */}
              <div
                style={{
                  marginBottom: 24,
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#111",
                  lineHeight: "27px",
                }}
              >
                Our services include:
                <ul style={{ marginLeft: 8 }}>
                  <li style={{ listStyle: "inside" }}>
                    <b>Robo-advisory solutions</b>&nbsp;for&nbsp;
                    <b>pension planning</b>&nbsp;and&nbsp;
                    <b>startup valuation</b>
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    <b>Behavioral economics–based</b>&nbsp;personalized asset
                    management
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    <b>Tailored investment strategies</b>&nbsp;and&nbsp;
                    <b>AI-driven</b>&nbsp;reporting
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    <b>Global theme analysis</b>&nbsp;and&nbsp;
                    <b>alternative investment</b>&nbsp;solutions
                  </li>
                </ul>
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#111",
                  lineHeight: "27px",
                }}
              >
                As we expand beyond&nbsp;
                <span style={{ fontWeight: 600 }}>
                  Korea into the Asian market,
                </span>
                &nbsp;we empower our clients to&nbsp;
                <span style={{ fontWeight: 600 }}>
                  make better financial decisions.
                </span>
                &nbsp;
                <br />
                Experience the future of&nbsp;
                <span style={{ fontWeight: 600 }}>finance with Algolab.</span>
              </div>
            </div>
            <div>
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
          ref={sectionRefs.services}
          style={{ width: "100%", backgroundColor: "#fff" }}
        >
          <div
            className="styles_section"
            style={{
              margin: "0 auto",
              padding: "160px 0",
            }}
          >
            <h2
              style={{
                fontSize: 56,
                fontWeight: 400,
                lineHeight: "84px",
                color: "#111",
                marginBottom: 80,
              }}
            >
              Services
            </h2>
            {/* Retirement Pension Robo-Advisor */}
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "flex-start",
                marginBottom: 160,
              }}
            >
              <div style={{ marginRight: 160 }}>
                <img src={RoboAdvisorImg} alt="" />
              </div>
              <div
                style={{
                  width: 610,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: 32,
                    fontWeight: 400,
                    lineHeight: "48px",
                    color: "#111",
                    marginBottom: 28,
                  }}
                >
                  Retirement Pension
                  <br />
                  Robo-Advisor
                </p>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "27px",
                    color: "#111",

                    marginBottom: 24,
                  }}
                >
                  Algolab’s retirement pension robo-advisor integrates
                  <br />
                  <span style={{ fontWeight: 600 }}>behavioral economics</span>
                  &nbsp;and&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    cutting-edge financial technologies
                  </span>
                  <br />
                  to provide&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    personalized pension management
                  </span>
                  &nbsp;solutions.
                </span>
                <ul style={{ marginLeft: 22 }}>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                    }}
                  >
                    <b>Analyzes</b> clients’ investment preferences and&nbsp;
                    <b>designs</b> customized
                    <br /> investment plans
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                    }}
                  >
                    <b>Optimizes</b> fund and global stock selection through
                    the&nbsp;
                    <b>
                      Global Theme
                      <br />
                      Machine
                    </b>
                    &nbsp;and <b>NLP-based</b>&nbsp;analysis
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                    }}
                  >
                    <b>Ensures</b> stable and effective pension management
                    with&nbsp;
                    <b>
                      personalized
                      <br /> glide paths
                    </b>
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                    }}
                  >
                    <b>Proven track record,</b> including successful
                    collaborations with&nbsp;
                    <b>
                      KB
                      <br />
                      Securities’ MOA
                    </b>
                    &nbsp;service and&nbsp;<b>Kiwoom Asset Management’s TDF</b>
                  </li>
                </ul>
              </div>
            </div>
            {/* Early-Stage Company Valuation */}
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "flex-start",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginLeft: 160 }}>
                <img src={CompanyValueImg} alt="" />
              </div>
              <div
                style={{
                  width: 610,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: 32,
                    fontWeight: 400,
                    lineHeight: "48px",
                    color: "#111",
                    marginBottom: 28,
                  }}
                >
                  Early-Stage Company Valuation
                </p>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "27px",
                    color: "#111",

                    marginBottom: 24,
                  }}
                >
                  Algolab’s early-stage company valuation solution
                  combines&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    corporate
                    <br />
                    data
                  </span>
                  &nbsp;and&nbsp;
                  <span style={{ fontWeight: 600 }}>financial information</span>
                  &nbsp;to deliver&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    reliable, up-to-date valuations.
                  </span>
                  &nbsp;
                </span>
                <ul style={{ marginLeft: 22, marginBottom: 24 }}>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                    }}
                  >
                    <b>Conducts</b>&nbsp;precise,&nbsp;<b>data-driven</b>
                    &nbsp;valuations through&nbsp;
                    <b>
                      ERP
                      <br />
                      system
                    </b>
                    &nbsp;integration
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                    }}
                  >
                    <b>Streamlines</b>&nbsp;the creation of investment proposals
                    with an&nbsp;
                    <b>
                      IR pitch deck
                      <br />
                      publishing
                    </b>
                    &nbsp;solution, facilitating investment attraction
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                    }}
                  >
                    <b>Expands</b> across <b>Asia</b>—including Korea, Japan,
                    China, and Vietnam—
                    <br />
                    fostering a <b>global investment ecosystem</b>
                  </li>
                </ul>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "27px",
                    color: "#111",
                  }}
                >
                  Make clearer investment decisions with&nbsp;
                  <span style={{ fontWeight: 600 }}>Algolab’s</span>
                  &nbsp;valuation solutions.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* History */}
        <div
          ref={sectionRefs.history}
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderTop: "1px solid #D5DBE2",
            borderBottom: "1px solid #D5DBE2",
          }}
        >
          <div
            className="styles_section"
            style={{
              margin: "0 auto",
            }}
          >
            <Timeline />
          </div>
        </div>
        {/* Team */}
        <div
          ref={sectionRefs.team}
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderTop: "1px solid #D5DBE2",
            borderBottom: "1px solid #D5DBE2",
          }}
        >
          <div
            className="styles_section"
            style={{
              margin: "0 auto",
              padding: "160px 0",
            }}
          >
            <Team />
          </div>
        </div>
        {/* Contact Us */}
        <div
          ref={sectionRefs["contact-us"]}
          style={{
            width: "100%",
            backgroundColor: "#F5F6FA",
          }}
        >
          <div
            className="styles_section"
            style={{
              margin: "0 auto",
              padding: "80px 0",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: 56,
                fontWeight: 400,
                lineHeight: "84px",
                color: "#111",
                marginBottom: 80,
              }}
            >
              Contact Us
            </h2>
            <div style={{ marginBottom: 80 }}>
              {/* Input Field */}
              <div style={{ marginBottom: 40 }}>
                <InputComp
                  label="Your Name"
                  type="input"
                  name="name" // Add name prop
                  placeholder=""
                  width="740px"
                  height="50px"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 40,
                }}
              >
                <InputComp
                  label="Work Email"
                  type="input"
                  name="email" // Add name prop
                  placeholder=""
                  width="740px"
                  height="50px"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputComp
                  label="Company Name"
                  type="input"
                  name="company" // Add name prop
                  placeholder=""
                  width="740px"
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  padding: "12px 24px",
                  borderRadius: 5,
                  backgroundColor:
                    isFormValid && !loading ? "#111" : "rgba(17,17,17,0.5)",
                  cursor: isFormValid && !loading ? "pointer" : "not-allowed",
                }}
                onClick={sendForm}
                disabled={!isFormValid || loading} // 버튼 비활성화
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "30px",
                  }}
                >
                  {loading ? "Sending..." : "Submit"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Dashboard;
