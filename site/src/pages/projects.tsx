import React from 'react';
import {ProjectCard} from "../components/projectcard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Projects = ()=>{
    return (
    <Container>
        <Row>
          <Col xs><ProjectCard images="../assets/icon.png" title="Sonder" text="A mobile app developed in React Native that encourages poeple to go outside and meet other people in person"/></Col>
          <Col xs={{ order: 5 }}><ProjectCard images="../assets/icon.png" title="Sonder" text="A mobile app developed in React Native that encourages poeple to go outside and meet other people in person"/></Col>
          <Col xs={{ order: 0 }}><ProjectCard images="../assets/icon.png" title="Sonder" text="A mobile app developed in React Native that encourages poeple to go outside and meet other people in person"/></Col>
        </Row>
      </Container>
    )
}