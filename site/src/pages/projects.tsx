import React from 'react';
import {ProjectCard} from "../components/projectcard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tgbotik from '../assets/tgbot.jpg'
import icon from "../assets/icon.png"
import vpn from "../assets/vpn.png"
export const Projects = ()=>{
    return (
    <div className='backgroundGray'>
    <Container>
        <Row>
          <Col xs><ProjectCard images={icon} title="Sonder" text="A mobile app developed in React Native that encourages poeple to go outside and meet other people in person." link="sonder"/></Col>
          <Col xs={{ order: 0 }}><ProjectCard images={tgbotik} title="Collage Bot" text="A telegram bot that is dedicated to solve an actual bussiness problem of a retail store." link = "tgbot"/></Col>
          <Col xs={{ order: 0 }}><ProjectCard images={vpn} title="Vpn app" text="a fully functioning vpn service" link = "vpn"/></Col>

        </Row>
      </Container>
    </div>
    )
}