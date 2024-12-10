import React from 'react';
import {TypingText} from "../components/typingtext"
import { ConsoleHeader } from '../components/consoleheader';
export const Home = ()=>{
    return (
        <div>
            <ConsoleHeader />
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <TypingText styles={{ margin: "0 auto", display: "block" }} speed={30}>
                    Welcome to my page!
                </TypingText>
            </div>
            <div style={{ display: "flex",marginTop:"5%", justifyContent: "center", width: "100%" }}>
                <TypingText styles={{ margin: "0 auto", display: "block" }} speed={30}>
                    Hello, my name is Aziz and I am a full stack developer with 3+ years of experience
                </TypingText>
            </div>


       </div>
        
    );
}