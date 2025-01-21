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

  const scrollToSection = (id: keyof typeof sectionRefs) => {
    const section = sectionRefs[id]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveMenu(id); // Update active menu on scroll
    }
  };

  // Detect scroll position and update activeMenu
  useEffect(() => {
    const handleScroll = () => {
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
  }, [activeMenu, sectionRefs]);

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
              alignItems: "center",
              paddingTop: 124,
              paddingBottom: 60,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
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
                <br /> Future with &nbsp;
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
                valuation with cutting-edge financial technology and
                personalized solutions
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
              <img src={MainImg} />
              <div
                style={{
                  position: "absolute",
                  bottom: 77,
                  left: -195,
                  display: "inline-flex",
                  padding: "8px 20px 8px 8px",
                  alignItems: "center",
                  gap: 20,
                  borderRadius: 16,
                  border: "1px solid rgba(255, 255, 255, 0.80)",
                  background: "rgba(255, 255, 255, 0.12)",
                  boxShadow: "10px 20px 20px 0px rgba(37, 68, 157, 0.50)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <img src={MainSmImg} />
                <div
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight: "27px",
                  }}
                >
                  <p style={{ marginBottom: 18 }}>
                    Explore Our
                    <br />
                    Financial Solutions
                  </p>
                  <button
                    style={{
                      padding: 7,
                      borderRadius: "19px",
                      border: " 2px solid #FFF",
                    }}
                  >
                    <BtnArrowWhite />
                  </button>
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
                  <b>Algolab</b> is a financial technology company offering
                  &nbsp;
                  <b>personalized asset management</b> for investors and&nbsp;
                  <b>startup valuation</b> services for emerging businesses,
                  leveraging&nbsp;<b>embedded finance</b>&nbsp;and&nbsp;
                  <b>innovative financial technologies.</b>&nbsp; <br />
                  We provide <b>cutting-edge tools</b> to&nbsp;
                  <b>financial institutions,</b>
                  <b> investors,</b>&nbsp; and <b>startups,</b>&nbsp;and achieve
                  their&nbsp;<b>financial goals.</b>
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
                <ul>
                  <li style={{ listStyle: "inside" }}>
                    Robo-advisory solutions for pension planning and startup
                    valuation
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    Behavioral economics–based personalized asset management
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    Tailored investment strategies and AI-driven reporting
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    Global theme analysis and alternative investment solutions
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
                As we expand beyond <b>Korea into the Asian market,</b> we
                empower our clients to <b>make better financial decisions.</b>
                <br /> Experience the future of <b>finance with Algolab.</b>
              </div>
            </div>
            <div>
              <WhoWeAreBigArrow />
            </div>
          </div>
        </div>
        {/* Why Choose Us? */}
        <div ref={sectionRefs["why-choose-us"]}>
          {" "}
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
                  Retirement Pension Robo-Advisor
                </p>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "27px",
                    color: "#111",
                    wordBreak: "break-all",
                    marginBottom: 24,
                  }}
                >
                  Algolab’s retirement pension robo-advisor integrates &nbsp;
                  <b>behavioral economics</b>&nbsp;and&nbsp;
                  <b>cutting-edge financial technologies</b>&nbsp;  to
                  provide&nbsp;<b>personalized pension management</b>
                  &nbsp; solutions.
                </span>
                <ul style={{ marginLeft: 22 }}>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                      wordBreak: "break-all",
                    }}
                  >
                    Analyzes clients’ investment preferences
                    and designs customized investment plans
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                      wordBreak: "break-all",
                    }}
                  >
                    Optimizes fund and global stock selection through the Global
                    Theme Machine and NLP-based analysis
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                      wordBreak: "break-all",
                    }}
                  >
                    Ensures stable and effective pension management
                    with personalized glide paths
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                      wordBreak: "break-all",
                    }}
                  >
                    Proven track record, including successful collaborations
                    with KB Securities’ MOA service and Kiwoom Asset
                    Management’s TDF
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
                    wordBreak: "break-all",
                    marginBottom: 24,
                  }}
                >
                  Algolab’s early-stage company valuation solution
                  combines&nbsp;<b>corporate data</b>&nbsp;and&nbsp;
                  <b>financial information</b>&nbsp;to deliver&nbsp;
                  <b>reliable, up-to-date valuations.</b>&nbsp;
                </span>
                <ul style={{ marginLeft: 22, marginBottom: 24 }}>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                      wordBreak: "break-all",
                    }}
                  >
                    Conducts precise, data-driven valuations through ERP system
                    integration
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                      wordBreak: "break-all",
                    }}
                  >
                    Streamlines the creation of investment proposals with an IR
                    pitch deck publishing solution, facilitating investment
                    attraction
                  </li>
                  <li
                    style={{
                      listStyle: "outside",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#111",
                      wordBreak: "break-all",
                    }}
                  >
                    Expands across Asia—including Korea, Japan, China, and
                    Vietnam—fostering a global investment ecosystem
                  </li>
                </ul>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "27px",
                    color: "#111",
                    wordBreak: "break-all",
                  }}
                >
                  Make clearer investment decisions with &nbsp;<b>Algolab’s</b>
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
                  placeholder=""
                  width="740px"
                  height="50px"
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
                  placeholder=""
                  width="740px"
                  height="50px"
                />
                <InputComp
                  label="Company Name"
                  type="input"
                  placeholder=""
                  width="740px"
                  height="50px"
                />
              </div>

              {/* Textarea Field */}
              <InputComp
                label="Message"
                type="textarea"
                placeholder="Tell us how can we help!
Leave your message, and we’ll get back to you shortly."
                height="250px"
                resize="none"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <button
                style={{
                  padding: "12px 24px",

                  borderRadius: 5,
                  backgroundColor: "#111",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "30px",
                  }}
                >
                  Sumbit
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer scrollToSection={scrollToSection}/>
    </div>
  );
};

export default Dashboard;
