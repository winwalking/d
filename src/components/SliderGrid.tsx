import React, { useState, useEffect } from "react";


const items = [
  {
    id: 1,
    title: "Multimodal AI",
    description: "Unleash the power of context",
    color: "red",
  },
  {
    id: 2,
    title: "AI agents",
    description: "The evolution from chatbots to multi-agent systems",
    color: "green",
  },
  {
    id: 3,
    title: "Assistive search",
    description: "The next frontier for knowledge work",
    color: "blue",
  },
  {
    id: 4,
    title: "AI-powered customer experience",
    description: "So seamless, it’s almost invisible",
    color: "orange",
  },
  {
    id: 5,
    title: "Security gets tighter",
    description: "Tougher—with AI",
    color: "purple",
  },
];

const SliderGrid: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 744) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 1180) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="gridContainer">
        <div
          className="grid"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {/* 타이틀 섹션 */}
          <div className="item titleItem" style={{display:"flex", justifyContent:"flex-end"}}>

            <p className="gridSubtitle" style={{
                fontSize:"3.5rem"
            }}>Top 5 Trends at a Glance</p>
          </div>

          {/* 아이템 섹션 */}
          {items.map((item) => (
            <div key={item.id} className={`item bg-${item.color}`}>
              <div
                style={{
                  background: "#fff",
                  padding: "6px 4px",
                  boxSizing: "border-box",
                  borderRadius: "25px",
                  width: 75,
                }}
              >
                <span style={{ color: "#111", fontSize: 12, fontWeight: 600 }}>
                  Trend 0{item.id}
                </span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderGrid;
