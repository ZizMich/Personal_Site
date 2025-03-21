import React from 'react';
import { useState } from 'react';
export const AsciiButton: React.FC<{onclick: Function; label: string;}> = ({label, onclick})=> {
    console.log(label)
    const normalstate=`+-----------------+\n|${label}|\n+-----------------+`
    const howered ="+-----------------+\n|    Let's go!    |\n+-----------------+"
    const [text, setText] = useState(normalstate);
    return (
      <div className="ascii-button" onClick={() => onclick()} onMouseEnter={() => setText(howered)} onMouseLeave={() => setText(normalstate)}>
        <pre style={{fontFamily:"Deter"}}>
          {text}
        </pre>
      </div>
    );
  };