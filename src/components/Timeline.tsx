import React, { useState, useRef } from "react";

const Timeline = () => {
  const [activeYear, setActiveYear] = useState<string>("2020");

  const yearContent: { [key: string]: React.ReactNode } = {
    "2020": (
      <>
        <h3 className="history_date">January 2020</h3>
        <p className="history_description">Establishment.</p>
        <h3 className="history_date">May 2020</h3>
        <p className="history_description">
          Kiwoom sec. GBI portfolio investment solution.
        </p>
        <h3 className="history_date">June 2020</h3>
        <p className="history_description">
          K-Global Program (Min. of Science & Tech.).
          <br />
          Kiwoom AM, TDF Glidepath simulator.
          <br />
          Hanhwa Life insurance open stage partnership.
        </p>
        <h3 className="history_date">July 2020</h3>
        <p className="history_description">
          Seoul Fintech Lab accelerating program selected.
        </p>
        <h3 className="history_date">September 2020</h3>
        <p className="history_description">
          Yonsei Univ. coding fintech education.
        </p>
        <h3 className="history_date">October 2020</h3>
        <p className="history_description">
          Seoul Fintech Lab startups valuation & pitchbook.
          <br />
          Kiwoom NLP(Natural language process) global thematic investing
          algorithm.
        </p>
      </>
    ),
    "2021": (
      <>
        <h3 className="history_date">February 2021</h3>
        <p className="history_description">Shinhan bank Futures lab.</p>
        <h3 className="history_date">April 2021</h3>
        <p className="history_description">Eugene sec. PB solution.</p>
        <h3 className="history_date">September 2021</h3>
        <p className="history_description">
          Seoul Venture Hub Space and accelerating program.
        </p>
        <h3 className="history_date">October 2021</h3>
        <p className="history_description">
          Kodit(Korea credit guarantee fund) Innovative Startup.
        </p>
        <h3 className="history_date">December 2021</h3>
        <p className="history_description">
          Kiwoom sec. Market Regime Index/ Factor allocation model.
          <br /> KB Sec. Hyper-personalized portfolio solution Research MOU.
        </p>
      </>
    ),
    "2022": (
      <>
        <h3 className="history_date">March 2022</h3>
        <p className="history_description">
          Kiwoom AM, LDI portfolio OCIO simulator.
        </p>
        <h3 className="history_date">July 2022</h3>
        <p className="history_description">Douzon Strategic partnership.</p>
        <h3 className="history_date">August 2022</h3>
        <p className="history_description">
          TIPS(Technical Incubation Program fot Startup Korea), 55 million yen
          support.
        </p>
        <h3 className="history_date">September 2022</h3>
        <p className="history_description">Venture business certification.</p>
        <h3 className="history_date">October 2022</h3>
        <p className="history_description">
          KB sec. AI-driven Hyper-personalized wealth management solution
          project.
        </p>
      </>
    ),
    "2023": (
      <>
        <h3 className="history_date">February 2023</h3>
        <p className="history_description">
          KQC(Korea Quantum Computing) Research.
        </p>
        <h3 className="history_date">March 2023</h3>
        <p className="history_description">IBM QC Subcriber.</p>
        <h3 className="history_date">August 2023</h3>
        <p className="history_description">
          Eugene sec. Private equity valuation and STO research.
          <br />
          Creww(JP, CN, KR), StartupDB(JP), 36kr(CN) Asia startup and private
          equity valuation & investment platform MOU.
        </p>
        <h3 className="history_date">October 2023</h3>
        <p className="history_description">
          KB sec. MOA (AI-driven Hyper-personalized wealth management solution)
          service open.
        </p>
        <h3 className="history_date">November 2023</h3>
        <p className="history_description">
          Vietnam Vietin bank sec. MOU.
          <br />
          TIPS commercialization program, 11 million yen.
        </p>
      </>
    ),
    "2024": (
      <>
        <h3 className="history_date">February 2024</h3>
        <p className="history_description">
          Douzon ERP/groupware SME embedded finance Research MOU.
          <br />
          KOTRA(Korea Trade Investment Promotion Agency) startup, Digital
          pitchbook.
          <br />
          Eugene sec. Private equity STO platform development (Open API).
        </p>
        <h3 className="history_date">March 2024</h3>
        <p className="history_description">
          A super gap venture business, Digital pitchbook.
        </p>
      </>
    ),
  };

  const years = Object.keys(yearContent);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [scrollOffset, setScrollOffset] = useState<number>(-220); 
  // Handle click-based navigation
  // const handleYearClick = (year: string) => {
  //   setActiveYear(year);
  //   // Scroll the timeline-container into view
  //   containerRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });

  //   // Scroll to the specific year section within the timeline
  //   sectionRefs.current[year]?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };
  const handleYearClick = (year: string) => {
    setActiveYear(year);

    requestAnimationFrame(() => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: containerTop + scrollOffset,
          behavior: "smooth",
        });
      }

      if (sectionRefs.current[year]) {
        const sectionTop = sectionRefs.current[year]?.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionTop + scrollOffset,
          behavior: "smooth",
        });
      }
    });
  };
  return (
    <div
      className={`timeline-container ${activeYear ? "pt_160 pb_160 nm:pt_48! nm:pb_48!" : ""}`}
      ref={containerRef}
    >
      {/* History Heading */}
      <div className="history-heading">
        <h2
          className="section_cts_title leading_84px mb_80 md:mb_40 sm:mb_20 nm:fw_bold"
      
        >
          History
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
          {years.map((year) => (
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
