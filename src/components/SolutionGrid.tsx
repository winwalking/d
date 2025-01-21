import React, { useRef, useState } from "react";
import OnboardingImage from "assets/image/onbroading.webp";
import PaymentImage from "assets/image/payments.webp";
import FraudPreventionImage from "assets/image/frady_prevention.webp";
import CreditUnderwritingImage from "assets/image/credit_underwriting.webp";

interface CardProps {
  image: string;
  title: string;
  description: string;
  action: string;
  name: string;
}

const cards: CardProps[] = [
  {
    image: OnboardingImage,
    title: "Onboarding",
    description:
      "Onboard customers in seconds with a flow used by 1 in 3 U.S. adults with a bank account.",
    action: "Onboard users faster",
    name: "onboarding",
  },
  {
    image: PaymentImage,
    title: "Payments",
    description:
      "Instantly verify accounts, check balances, and support multi-rail payments for faster, more secure money movement.",
    action: "Move money safely",
    name: "payments",
  },
  {
    image: FraudPreventionImage,
    title: "Fraud Prevention",
    description:
      "Stop fraud in more places with network-powered signals, real-time alerts, and advanced identity verification.",
    action: "Fight fraud at scale",
    name: "fraud_prevention",
  },
  {
    image: CreditUnderwritingImage,
    title: "Credit Underwriting",
    description:
      "Make smarter lending decisions with easy access to cash flow data and risk insights from the Plaid Network.",
    action: "Qualify more borrowers",
    name: "credit_underwriting",
  },
];

const SolutionsGrid: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 카드 그룹화 (2개씩)
  const groupedCards: CardProps[][] = [];
  for (let i = 0; i < cards.length; i += 2) {
    groupedCards.push(cards.slice(i, i + 2));
  }

  const scrollToGroup = (index: number) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollAmount = slider.offsetWidth * index;
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="solutions_grid_section">
      <div ref={sliderRef} className="solution_grid">
        {groupedCards.map((group, groupIndex) => (
          <div key={groupIndex} className="group">
            {group.map((card, index) => (
              <div key={index} className="card">
                <img
                  style={{ marginBottom: 10 }}
                  src={card.image}
                  alt={card.title}
                />
                <h3 style={{ marginBottom: 10, textAlign: "left" }}>
                  {card.title}
                </h3>
                <p style={{ marginBottom: 8, textAlign: "left" }}>
                  {card.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <a
                    href="https://plaid.com/layer/"
                    target="_self"
                    className="styles_section_button"
                  >
                    <div className="button_wrap">
                      <span
                        className={`movingIcon movingIcon_${card.name}`}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <svg
                          aria-hidden="false"
                          role="img"
                          aria-label="arrow right"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0605 8.00003L9.38732 2.32684L8.32666 3.3875L12.1892 7.25L1 7.25V8.75L12.1892 8.75L8.32666 12.6126L9.38732 13.6732L15.0605 8.00003Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className={`movingText movingText_${card.name}`}>
                        {card.action}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 네비게이션 인디케이터 */}
      <div className="navigation-indicator">
        {groupedCards.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => scrollToGroup(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SolutionsGrid;
