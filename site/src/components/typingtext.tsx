import React, { useState, useEffect } from "react";

interface TypingTextProps {
  speed: number;
  styles?: React.CSSProperties;
  children: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ speed = 50, styles, children }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < children.length) {
        setDisplayedText(children.slice(0, index + 1) + "|");
        index++;
      } else {
        clearInterval(interval);
        setDisplayedText(children);
      }
    }, speed);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [children, speed]);

  return <span className="justtext" style={styles}>{displayedText}</span>;
};

export default TypingText;