import React from 'react';
import {Carouselka} from "../../components/carousel"
import photo1 from '../../assets/screenshot1.png'
import photo2 from '../../assets/screenshot2.png'
import photo3 from '../../assets/screenshot3.png'
import {TypingText} from '../../components/typingtext';
import { TechnologyCard } from '../../components/technologycard';
import react_logo from'../../assets/react_logo.png'
import ts from '../../assets/ts.png'
import js from '../../assets/js.png'
import springBoot from "../../assets/spring_boot.png"
import postgress from "../../assets/postgress.png"
export const Sonder = ()=>{
    const images = [{src:photo1,caption:''},{src:photo2,caption:''},{src:photo3,caption:''}]
    return (
        <div className='backgroundPuprle'>
         <div className='centeredContainer'>
            <Carouselka images = {images} width = {300} className='carouselka'/>
            <TypingText className='Title' speed={30}>Sonder </TypingText>
            <TypingText className='justtext1' styles={{ marginTop: "5%" }} speed={10}>
                A mobile app that encourages people to go outside and complete social tasks and getting some reward for that.
                The app will provide some theoretical knowledge about human psychology in order to help people improve their social skills.
            </TypingText>
            <TypingText className='Title' speed={30}>Technology Stack</TypingText>
        </div>
        <div className='rowsContainer'>
            <TechnologyCard image={react_logo} title="React Native"/>
            <TechnologyCard image={ts} title="TypeScript"/>
            <TechnologyCard image={js} title="JavaScript"/>
            <TechnologyCard image={springBoot} title="Spring Boot"/>
            <TechnologyCard image={postgress} title="postgreSQL"/>

        </div>


        <div className='centeredContainer'>

            <TypingText className='justtext1' styles={{ marginTop: "5%" }} speed={10}>
                The app was writte in using react native and has backend server developed in javva spring boot for user data storage
                and keepong the data in the app.
            </TypingText>
            <TypingText className='justtext1' styles={{ marginTop: "5%" }} speed={10}>
                The app also featers integrated chat system
            </TypingText>
        </div>
       </div>
        
    )
}