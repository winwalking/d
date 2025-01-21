import React from "react";

const ImageSlider: React.FC = () => {
  const texts = [
    "Data Analytics •",
    "Platform •",
    "Healthcare •",
    "Artificial Intelligence •",
    "Mobility •",
    "Software •",
  ];

  return (
    <div className="slider">
      <div className="slideTrack">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`slide ${
              text === "Artificial Intelligence •" ? "wide" : ""
            }`}
          >
            <span
              style={{
                color: "#3260E7",
                fontSize: 56,
                fontWeight: 400,
                lineHeight: "84px",
              }}
            >
              {text}
            </span>
          </div>
        ))}
        {texts.map((text, index) => (
          <div key={index + texts.length}   className={`slide ${
            text === "Artificial Intelligence •" ? "wide" : ""
          }`}>
            <span
              style={{
                color: "#3260E7",
                fontSize: 56,
                fontWeight: 400,
                lineHeight: "84px",
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

// Data Analytics • Platform • Healthcare • Artificial Intelligence • Mobility • Software
