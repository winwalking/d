import React, { useEffect, useState, useRef } from "react";

interface Section {
  id: string;
  label: string;
  description: string;
}

const sections: Section[] = [
  {
    id: "section1",
    label: "AI early adopters dominate the market",
    description:
      "AI has profoundly shifted the competitive landscape. Companies that capitalized on it early, particularly those purpose-built for AI, will continue to lead the wave of innovative customer experience offerings this year, gaining market share and getting further out in front of their more traditional competitors.",
  },
  { id: "section2", label: "Capital investment in AI has taken off", description: "Driven by rapid improvements in AI models and corporate adoption, AI maturity is becoming a key indicator of economic health, prompting governments to rethink policies, regulations, and even education to support AI-driven growth. Leadership strategies will extend beyond humans, targeting AI agents as both customers and collaborators" },
  { id: "section3", label: "Demand for data center capacity surges", description: "AI adoption in enterprise infrastructure is expected to increase by over 30% by 2026.2 This rapid adoption rate has created global demand for “AI-ready” data center capacity—in other words, data center space capable of handling the high computational power and power density required for AI workloads. Demand for AI-ready data center capacity is expected to rise at an average rate of 33% per year through 2030,3 and spending on data centers is expected to double in the next five years." },
];

const ProcessBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = sectionRefs.current[section.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="content">
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionRefs.current[section.id] = el;
          }}
          className="section" // ${activeSection === section.id ? 'active' : ''}
        >
          <div className="section-content">
            <div style={{ display: "flex" }}>
              <div
                className={`section-label ${
                  activeSection === section.id ? "active" : ""
                }`}
              ></div>
              <div style={{ marginLeft: 20, width:500 }}>
                <h2
                  style={{
                    color: "#FFF",
                    marginBottom: 40,
                    fontWeight: 600,
                    fontSize: 24,
                  }}
                >
                  {section.label}
                </h2>
                <span style={{ color: "#FFF" }}>{section.description}</span>
              </div>
            </div>
          </div>
          {index !== sections.length - 1 && <div className="connector"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProcessBar;
