import React, { useRef } from "react";

interface SlideItem {
  src: string;
  alt: string;
}

const slides: SlideItem[] = [
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    alt: "Image 2",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    alt: "Image 3",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    alt: "Image 4",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    alt: "Image 5",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    alt: "Image 6",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    alt: "Image 7",
  },
  {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    alt: "Image 1",
  },
];

const InfiniteSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = "running";
    }
  };
  return (
    <div
      className="slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide-track">
        {slides.concat(slides).map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.src} alt={slide.alt} draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
