import React, { useState, useEffect } from "react";

export const TypingText: React.FC<{text:string, speed:number}> = ({ text, speed=50 }) => {
    const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) { // Change made here
        setDisplayedText(text.slice(0, index+1) + "|");
        index++;
      } else {
        clearInterval(interval);
        setDisplayedText(text);
      }
    }, speed);

    return () => clearInterval(interval); // Очистка таймера при размонтировании компонента
  }, [text, speed]);

  return <span className="justtext"> {displayedText}</span>;
};

export default TypingText;