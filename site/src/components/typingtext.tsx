import React, { useState, useEffect, useRef } from "react";

interface TypingTextProps {
  speed: number;
  styles?: React.CSSProperties;
  children: string;
  className?:string;
}

export const TypingText: React.FC<TypingTextProps> = ({ speed = 50, styles,className, children }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null); // Reference to the element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible, children, speed]);

  return (
    <span
      style={styles}
      className={className}
      ref={elementRef} // Attach the ref to the span
    >
      {isVisible ? displayedText : ""}
    </span>
  );
};

export default TypingText;