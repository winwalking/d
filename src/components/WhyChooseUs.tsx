import React from "react";
import FinancialTechnologies from "assets/image/why_choose_us_finanicial_techno.svg";
import HyperPersonlized from "assets/image/why_choose_us_hyper_personali.svg";
import ProvenTrust from "assets/image/why_choose_us_proven_trust.svg";
import Leadership from "assets/image/why_choose_us_leadership.svg";

const WhyChooseUs = () => {
  // Data array for dynamic rendering
  const reasons = [
    {
      img: <FinancialTechnologies />,
      title: "Innovative Financial Technologies",
      article: (
        <span
          style={{
            fontSize: 18,
            fontWeight: 400,
            lineHeight: "27px",
            textAlign: "left",
            wordBreak: "break-all",
          }}
        >
          We deliver precise asset
          <br /> management using Embedded
          <br /> Finance and advanced technologies.
        </span>
      ),
    },
    {
      img: <HyperPersonlized />,
      title: "Hyper-Personalized Services",
      article: (
        <span
          style={{
            fontSize: 18,
            fontWeight: 400,
            lineHeight: "27px",
            textAlign: "left",
            wordBreak: "break-all",
          }}
        >
          We help achieve financial goals with
          <br /> customized investment plans and
          <br />
          global theme insights.
        </span>
      ),
    },
    {
      img: <ProvenTrust />,
      title: "Proven Trust and Reliability",
      article: (
        <span
          style={{
            fontSize: 18,
            fontWeight: 400,
            lineHeight: "27px",
            textAlign: "left",
            wordBreak: "break-all",
          }}
        >
          Our domestic and international
          <br /> success stories showcase our
          <br /> expertise and reliability.
        </span>
      ),
    },
    {
      img: <Leadership />,
      title: "Leadership in the Asian Market",
      article: (
        <span
          style={{
            fontSize: 18,
            fontWeight: 400,
            lineHeight: "27px",
            textAlign: "left",
            wordBreak: "break-all",
          }}
        >
          Expanding from Korea, we are
          <br /> shaping the global financial
          <br /> ecosystem across Asia.
        </span>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "#F5EFDC" }}>
      <div
        className="styles_section"
        style={{
          margin: "0 auto",
          padding: "180px 0",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Dynamic rendering using map */}
        <div
          style={{ display: "flex", gap: "40px", flexWrap: "wrap", width: 740 }}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                width: 350,
                padding: "40px 28px",
                boxSizing: "border-box",
                borderRadius: 30,
                background: "#fff",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    width: 97,
                    height: 97,
                    padding: "25px 24px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 10,
                    flexShrink: 0,
                    borderRadius: 48.5,
                    background: "rgba(146, 177, 227, 0.30)",
                    marginBottom: 32,
                  }}
                >
                  {/* Render image */}
                  {reason.img}
                </div>
                <p
                  style={{
                    width: 189,
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "left",
                    marginBottom: 12,
                  }}
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
        <div style={{ width: 610 }}>
          <h2
            style={{
              fontSize: 56,
              fontWeight: 400,
              lineHeight: "84px",
              marginBottom: "28px",
            }}
          >
            Why
            <br /> Choose Us?
          </h2>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: "27px",
              color: "#33322E",
            }}
          >
            Algolab is a trusted partner that helps clients achieve their
            financial goals through innovative financial technologies and
            hyper-personalized services. As a leader in the Asian market, we are
            shaping the future of finance together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
