import React from 'react';
import Button from 'react-bootstrap/Button';
import {TypingText} from "../components/typingtext"
import { ConsoleHeader } from '../components/consoleheader';
import me from "../assets/me.jpg"
import { motion } from "motion/react"
import { Link,useNavigate } from 'react-router-dom';
export const Home = ()=>{
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate('/projects');
  };
    return (
        <div>
            <ConsoleHeader />
            <div style={{ display: "flex", flexDirection: "column", alignItems:"center", width: "100%"}}>

                <TypingText className='justtext' styles={{ margin: "0 auto", display: "block", marginTop:"5%"}} speed={30}>
                    Welcome to my page!
                </TypingText>
                <TypingText className='justtext' styles={{ textAlign:"center", marginTop: "5%" }} speed={30}>
                Hello, my name is Aziz. I am a passionate developer and a full-time student pursuing a Bachelor's degree in Computer Science.
                </TypingText>

                <motion.div 
                    style={{ marginTop: "5%", objectFit: "contain" }} 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }}
                    >
                    <img 
                        height={400} 
                        width="auto" 
                        src={me} 
                        alt="me" 
                        style={{ borderRadius: "15px" }} 
                    />
                </motion.div> 
                <TypingText className='justtext' styles={{ textAlign:"center", marginTop: "5%" }} speed={10}>
                I specialize in programming languages such as Java, JavaScript, TypeScript, and Python. My experience includes developing software solutions to address various business challenges and creating programs tailored for diverse purposes.
                </TypingText>
                <TypingText className='justtext' styles={{ textIndent:1, textAlign:"center", marginTop: "5%" }} speed={10}>
                Currently, I am in my first year of study, where I am gaining a solid foundation in computer science, including essential concepts in computer and software architecture. These skills will be invaluable in my future career as a developer.
                On my website, you can learn more about the projects I've worked on and find additional details about me.
                </TypingText>
                <Button onClick={handleButtonClick} variant="primary">Go to Projects</Button>

            </div>
        </div>
        
    );
}