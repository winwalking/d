import React from "react";

const ImageSlider: React.FC = () => {
  const texts = [
    "Data Analytics",
    " \u00A0\u2022\u00A0 ", // Add non-breaking spaces around "•"
    "Platform",
    " \u00A0\u2022\u00A0 ",
    "Healthcare",
    " \u00A0\u2022\u00A0 ",
    "Artificial Intelligence",
    " \u00A0\u2022\u00A0 ",
    "Mobility",
    " \u00A0\u2022\u00A0 ",
    "Software",
    " \u00A0\u2022\u00A0 ",
  ];

  return (
    <div className="slider">
      <div className="slideTrack">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`slide ${
              text === "Artificial Intelligence" ? "wide" : ""
            }`}
          >
            <span className="md:fw_bold">{text}</span>
          </div>
        ))}
        {texts.map((text, index) => (
          <div
            key={index + texts.length}
            className={`slide ${
              text === "Artificial Intelligence" ? "wide" : ""
            }`}
          >
            <span className="md:fw_bold">{text}</span>
          </div>
        ))}
        {texts.map((text, index) => (
          <div
            key={index + texts.length * 2}
            className={`slide ${
              text === "Artificial Intelligence" ? "wide" : ""
            }`}
          >
            <span className="md:fw_bold">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
