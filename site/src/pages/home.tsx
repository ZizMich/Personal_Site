import React from 'react';
import Button from 'react-bootstrap/Button';
import { TypingText } from '../components/typingtext';
import { ConsoleHeader } from '../components/consoleheader';
import me1 from '../assets/me.jpg';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { AsciiButton } from '../components/ascii';
import "../crt.css"
import {me} from "../assets/asciiarts";
import RetroLoadingAnimation from "../components/retroLoadingAnim";
export const Home = () => {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/projects');
  };
  return (
  <div className="crt">
    <div className="backgroundBlack">
      <ConsoleHeader />
      <div className="centeredContainer">
        <TypingText
          className="justtext"
          styles={{ margin: '0 auto', display: 'block', marginTop: '5%' }}
          speed={30}
        >
          Welcome to my page!
        </TypingText>
        <TypingText
          className="justtext"
          styles={{ textAlign: 'center', marginTop: '5%' }}
          speed={30}
        >
          Hello, my name is Aziz. I am a passionate developer and a full-time
          student pursuing a Bachelor's degree in Computer Science.
        </TypingText>

        <RetroLoadingAnimation 
        asciiArt={me}
        imageSrc={me1}
      />
        <TypingText
          className="justtext"
          styles={{ textAlign: 'center', marginTop: '5%' }}
          speed={10}
          
        >
          I specialize in programming languages such as Java, JavaScript,
          TypeScript, and Python. My experience includes developing software
          solutions to address various business challenges and creating programs
          tailored for diverse purposes.
        </TypingText>
        <TypingText
          className="justtext"
          styles={{ textIndent: 1, textAlign: 'center', marginTop: '5%' }}
          speed={10}
        >
          Currently, I am in my first year of study, where I am gaining a solid
          foundation in computer science, including essential concepts in
          computer and software architecture. These skills will be invaluable in
          my future career as a developer. On my website, you can learn more
          about the projects I've worked on and find additional details about
          me.
        </TypingText>
        <AsciiButton
          onclick={handleButtonClick}
          label=" go to projects! "
        ></AsciiButton>
      </div>
    </div>
    </div>
  );
};
