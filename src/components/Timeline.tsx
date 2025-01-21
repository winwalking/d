import React, { useState, useRef } from "react";

const Timeline = () => {
  const [activeYear, setActiveYear] = useState<string>("2020");

  const yearContent: { [key: string]: React.ReactNode } = {
    "2020": (
      <>
        <h3 className="history_date">February 2020</h3>
        <p className="history_description">
          Selected as a cohort 7-1 member of Shinhan Future’s Lab.
        </p>
        <h3 className="history_date">April 2020</h3>
        <p className="history_description">
          Supplied advisory platform to Eugene Investment & Securities.
        </p>
        <h3 className="history_date">September 2020</h3>
        <p className="history_description">
          Seoul Venture Hub Space and Accelerating Program.
        </p>
        
      </>
    ),
    "2021": (
      <>
        <h3 className="history_date">February 2021</h3>
        <p className="history_description">
          Selected as a cohort 7-1 member of Shinhan Future’s Lab.
        </p>
        <h3 className="history_date">April 2021</h3>
        <p className="history_description">
          Supplied advisory platform to Eugene Investment & Securities.
        </p>
        <h3 className="history_date">September 2021</h3>
        <p className="history_description">
          Seoul Venture Hub Space and Accelerating Program.
        </p>
        <h3 className="history_date">October 2021</h3>
        <p className="history_description">
          Kodit (Korea Credit Guarantee Fund) Innovative Startup.
        </p>
        <h3 className="history_date">December 2021</h3>
        <p className="history_description">
          Supplied NLP and factor investing strategy solutions to Kiwoom
          Securities.
          <br /> Signed an MOU for research and development of
          hyper-personalized asset management with KB Securities.
        </p>
      </>
    ),
    "2022": (
      <>
        <h3 className="history_date">February 2022</h3>
        <p className="history_description">
          Selected as a cohort 7-1 member of Shinhan Future’s Lab.
        </p>
        <h3 className="history_date">April 2022</h3>
        <p className="history_description">
          Supplied advisory platform to Eugene Investment & Securities.
        </p>
        <h3 className="history_date">September 2022</h3>
        <p className="history_description">
          Seoul Venture Hub Space and Accelerating Program.
        </p>
        <h3 className="history_date">October 2022</h3>
        <p className="history_description">
          Kodit (Korea Credit Guarantee Fund) Innovative Startup.
        </p>
        <h3 className="history_date">December 2022</h3>
        <p className="history_description">
          Supplied NLP and factor investing strategy solutions to Kiwoom
          Securities.
          <br /> Signed an MOU for research and development of
          hyper-personalized asset management with KB Securities.
        </p>
        <h3 className="history_date">December 2022</h3>
        <p className="history_description">
          Supplied NLP and factor investing strategy solutions to Kiwoom
          Securities.
          <br /> Signed an MOU for research and development of
          hyper-personalized asset management with KB Securities.
        </p>
      </>
    ),
    "2023": (
      <>
        <h3 className="history_date">February 2023</h3>
        <p className="history_description">
          Selected as a cohort 7-1 member of Shinhan Future’s Lab.
        </p>
        <h3 className="history_date">April 2023</h3>
        <p className="history_description">
          Supplied advisory platform to Eugene Investment & Securities.
        </p>
        <h3 className="history_date">September 2023</h3>
        <p className="history_description">
          Seoul Venture Hub Space and Accelerating Program.
        </p>
        <h3 className="history_date">October 2023</h3>
        <p className="history_description">
          Kodit (Korea Credit Guarantee Fund) Innovative Startup.
        </p>
        <h3 className="history_date">December 2023</h3>
        <p className="history_description">
          Supplied NLP and factor investing strategy solutions to Kiwoom
          Securities.
          <br /> Signed an MOU for research and development of
          hyper-personalized asset management with KB Securities.
        </p>
        <h3 className="history_date">October 2023</h3>
        <p className="history_description">
          Kodit (Korea Credit Guarantee Fund) Innovative Startup.
        </p>
        <h3 className="history_date">December 2023</h3>
        <p className="history_description">
          Supplied NLP and factor investing strategy solutions to Kiwoom
          Securities.
          <br /> Signed an MOU for research and development of
          hyper-personalized asset management with KB Securities.
        </p>
      </>
    ),
    "2024": (
      <>
        <h3 className="history_date">February 2024</h3>
        <p className="history_description">
          Selected as a cohort 7-1 member of Shinhan Future’s Lab.
        </p>
        <h3 className="history_date">April 2024</h3>
        <p className="history_description">
          Supplied advisory platform to Eugene Investment & Securities.
        </p>
        <h3 className="history_date">September 2024</h3>
        <p className="history_description">
          Seoul Venture Hub Space and Accelerating Program.
        </p>
        <h3 className="history_date">October 2024</h3>
        <p className="history_description">
          Kodit (Korea Credit Guarantee Fund) Innovative Startup.
        </p>
        <h3 className="history_date">December 2024</h3>
        <p className="history_description">
          Supplied NLP and factor investing strategy solutions to Kiwoom
          Securities.
          <br /> Signed an MOU for research and development of
          hyper-personalized asset management with KB Securities.
        </p>
      </>
    ),
  };

  const years = Object.keys(yearContent);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Handle click-based navigation
  const handleYearClick = (year: string) => {
    setActiveYear(year);
    // Scroll the timeline-container into view
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Scroll to the specific year section within the timeline
    sectionRefs.current[year]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`timeline-container ${activeYear ? "pt_84 pb_84" : ""}`}
      ref={containerRef}
    >
      {/* History Heading */}
      <div className="history-heading">
        <h2
          style={{
            fontSize: 56,
            fontWeight: 400,
            lineHeight: "84px",
            color: "#111",
            marginBottom: 80,
          }}
        >
          History
        </h2>
      </div>

      {/* Timeline Content */}
      <div className="timeline-content">
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
        <div className="right-sidebar">
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
