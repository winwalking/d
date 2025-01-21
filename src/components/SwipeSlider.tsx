import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface LogoItem {
  src: string;
  srcsetMobile: string;
  srcsetDesktop: string;
  alt: string;
}

const logos: LogoItem[] = [
  {
    src: "https://images.ctfassets.net/ss5kfr270og3/ebYJc7sK8GMrGVlCEI8DV/3660c37f62412762f8aaa098b71e1d80/Betterment.png?fm=webp&w=370&q=60",
    srcsetMobile:
      "https://images.ctfassets.net/ss5kfr270og3/ebYJc7sK8GMrGVlCEI8DV/3660c37f62412762f8aaa098b71e1d80/Betterment.png?fm=webp&w=278&q=60",
    srcsetDesktop:
      "https://images.ctfassets.net/ss5kfr270og3/ebYJc7sK8GMrGVlCEI8DV/3660c37f62412762f8aaa098b71e1d80/Betterment.png?fm=webp&w=370&q=60",
    alt: "Betterment logo with a half-circle icon followed by the word 'Betterment' in bold black font.",
  },
  {
    src: "https://images.ctfassets.net/ss5kfr270og3/36Q9pxq2fxLJiWEcLXYp0o/008471b1fd0c81db36748a25a19143a9/Chime.png?fm=webp&w=370&q=60",
    srcsetMobile:
      "https://images.ctfassets.net/ss5kfr270og3/36Q9pxq2fxLJiWEcLXYp0o/008471b1fd0c81db36748a25a19143a9/Chime.png?fm=webp&w=278&q=60",
    srcsetDesktop:
      "https://images.ctfassets.net/ss5kfr270og3/36Q9pxq2fxLJiWEcLXYp0o/008471b1fd0c81db36748a25a19143a9/Chime.png?fm=webp&w=370&q=60",
    alt: "Chime logo in bold black font with a small registered trademark symbol (®) on the top right corner.",
  },
  {
    src: "https://images.ctfassets.net/ss5kfr270og3/20KdCbQcNzuRE8Mdimo68O/a5d0a2a0c680b0cd0a25794a23c981e1/Dave.png?fm=webp&w=278&q=60",
    srcsetMobile:
      "https://images.ctfassets.net/ss5kfr270og3/20KdCbQcNzuRE8Mdimo68O/a5d0a2a0c680b0cd0a25794a23c981e1/Dave.png?fm=webp&w=370&q=60",
    srcsetDesktop:
      "https://images.ctfassets.net/ss5kfr270og3/20KdCbQcNzuRE8Mdimo68O/a5d0a2a0c680b0cd0a25794a23c981e1/Dave.png?fm=webp&w=370&q=60",
    alt: "Logo with the word 'Dave' in bold black typography. A registered trademark symbol (®) is positioned at the upper right of the word.",
  },
];

const LogoSlider: React.FC = () => {
// DOM 요소를 참조 (틀)
const swiperRef = useRef<HTMLDivElement>(null);

// Swiper 인스턴스를 참조 (리모컨)
const swiperInstance = useRef<Swiper | null>(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Autoplay],
        slidesPerView: "auto", // 여러 개를 한 번에 보여줌
        loop: true, // 무한 루프
        speed: 3000, // 슬라이드 속도
        spaceBetween: 1, // 각 슬라이드 사이의 간격
        autoplay: {
          delay: 0, // 딜레이 없음
          disableOnInteraction: false, // 상호작용 시 자동 재생 유지
        },
        allowTouchMove: false, // 터치 스와이프 방지
      });
    }

    // Hover 이벤트로 autoplay 제어
    const swiperEl = swiperRef.current;
    const handleMouseEnter = () => swiperInstance.current?.autoplay.stop();
    const handleMouseLeave = () => swiperInstance.current?.autoplay.start();

    swiperEl?.addEventListener("mouseenter", handleMouseEnter);
    swiperEl?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      swiperEl?.removeEventListener("mouseenter", handleMouseEnter);
      swiperEl?.removeEventListener("mouseleave", handleMouseLeave);
      swiperInstance.current?.destroy();
    };
  }, []);

  return (
    <div className="swiper-container"ref={swiperRef}>
      <div className="swiper-wrapper" >
        {logos.map((logo, index) => (
          <div key={index} className="swiper-slide">
            <picture>
              <source media="(max-width: 639px)" srcSet={logo.srcsetMobile} />
              <source media="(min-width: 640px)" srcSet={logo.srcsetDesktop} />
              <img
                src={logo.src}
                alt={logo.alt}
                width="162"
                height="72"
                draggable="false"
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
