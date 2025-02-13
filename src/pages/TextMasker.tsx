import React, { useState, useEffect } from "react";

const TextMasker: React.FC = () => {
  const text = "로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다.";
  const [maskedIndices, setMaskedIndices] = useState<Set<number>>(new Set());

  const handleWordClick = (index: number, word: string) => {
    if (/\S/.test(word)) { // 공백이 아닌 경우만 처리
      setMaskedIndices((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    }
  };

  useEffect(() => {
    if (maskedIndices.size > 0) {
      const disableInspect = (event: KeyboardEvent) => {
        if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
          event.preventDefault();
        }
      };
      
      const disableContextMenu = (event: MouseEvent) => {
        event.preventDefault();
      };
      
      document.addEventListener("keydown", disableInspect);
      document.addEventListener("contextmenu", disableContextMenu);
      
      return () => {
        document.removeEventListener("keydown", disableInspect);
        document.removeEventListener("contextmenu", disableContextMenu);
      };
    }
  }, [maskedIndices]);

  return (
    <div style={{ padding: "20px", fontSize: "18px", lineHeight: "1.6" }}>
      {text.split(/(\s+)/).map((word, index) => (
        <span
          key={index}
          onClick={() => handleWordClick(index, word)}
          style={{
            cursor: /\S/.test(word) ? "pointer" : "default",
            backgroundColor: maskedIndices.has(index) ? "black" : "transparent",
            color: maskedIndices.has(index) ? "black" : "inherit",
            userSelect: maskedIndices.has(index) ? "none" : "text",
            WebkitUserSelect: maskedIndices.has(index) ? "none" : "text",
            MozUserSelect: maskedIndices.has(index) ? "none" : "text",
            msUserSelect: maskedIndices.has(index) ? "none" : "text",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextMasker;