import React from 'react';
import { useState } from 'react';

interface AsciiButtonProps {
  onclick: Function;
  label: string;
  size?: number; // Make size optional
}

export const AsciiButton: React.FC<AsciiButtonProps> = ({
  label,
  onclick,
  size = 14, // Default value here
}) => {
  const normalstate = `+-----------------+\n|${label}|\n+-----------------+`;
  const howered =
    "+-----------------+\n|    Let's go!    |\n+-----------------+";
  const [text, setText] = useState(normalstate);

  return (
    <div
      className="ascii-button"
      onClick={() => onclick()}
      onMouseEnter={() => setText(howered)}
      onMouseLeave={() => setText(normalstate)}
    >
      <pre style={{ fontFamily: 'Deter', fontSize: size }}>{text}</pre>
    </div>
  );
};
