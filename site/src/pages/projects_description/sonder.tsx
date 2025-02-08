import React from 'react';
import { Carouselka } from '../../components/carousel';
import photo1 from '../../assets/screenshot1.png';
import photo2 from '../../assets/screenshot2.png';
import photo3 from '../../assets/screenshot3.png';
import { TypingText } from '../../components/typingtext';
import { TechnologyCard } from '../../components/technologycard';
import react_logo from '../../assets/technologies/react_logo.png';
import ts from '../../assets/technologies/ts.png';
import js from '../../assets/technologies/js.png';
import springBoot from '../../assets/technologies/spring_boot.png';
import postgress from '../../assets/technologies/postgress.png';
import java from '../../assets/technologies/java.png';
import jwt from '../../assets/technologies/jwt.png';
import expo from '../../assets/technologies/expo.png';
import apple from '../../assets/technologies/apple.png';
import html from '../../assets/technologies/html.png';
import css from '../../assets/technologies/css.png';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
export const Sonder = () => {
  const [description, setDescription] = useState("click on icons!");
  const [BEdescription, setBEdescription] = useState("click on icons!");
  const handlePush = (option: string) => {
    switch (option) {
      case 'react_native':
        setDescription(
          'React native is the main framework on which the app was coded. It was chosen bacause of simplicity of development and deployment'
        );
        break;
      case 'js':
        setDescription(
          'Javascript simple parts of the code which do not require static typizations were written on js in order to increase development speed'
        );
        break;
      case 'html':
        setDescription(
          'React native uses JSX which is very similar to html in structure, so html knowledge helped me extremely in the process'
        );
        break;
      case 'ts':
        setDescription(
          'React native is written in typescript so knowledge of this programming language was simpply neccessary for development. Many components and app logic is written on typescript'
        );
        break;
    case 'css':
            setDescription(
              'Css the standard of the industry, it is used in the most of the frontend frameworks and React is not an exception. The visual styles of components were made in css.'
            );
            break;
            case 'expo':
                setDescription(
                  'Expo is an addon for React native that significatnly simplifies the process of developing native apps. Expo provides a lot of tools for debugging and developent such as Expo GO or EAS that rediced time costs of the app. '
                );
                break;
      case 'ts':
            setDescription(
              'React native is written in typescript so knowledge of this programming language was simpply neccessary for development. Many components and app logic is written on typescript'
            );
      break;
      case 'java':
        setBEdescription(
          'Java was the main language on which the backend was written.'
        );
        break;
       case 'spring_boot':
            setBEdescription(
              'The backend of the app is developed on spring boot because of its popularity and felxibility. The server stores the data and sends it via REST API endpoints'
            );
            break;
        case 'jwt':
                setBEdescription(
                  'JWT was used and authorization and authentication proccess for the API endpoints'
                );
            break;
        case 'apn':
                setBEdescription(
                  'Apple Notification Service is used for sending notifications to the user who use IOS devices.'
                );
            break;
        case 'postgress':
                setBEdescription(
                  'PostgressSQL is database management system that provides an easy communication between the database and the application. Most of the app and user data is stored there.'
                );
            break;
            
      default:
        setDescription(
          'Click on the logo in order to find out why it was used!'
        );
        setBEdescription(
          'Click on the logo in order to find out why it was used!'
        );
        break;
    }
  };

  const images = [
    { src: photo1, caption: '' },
    { src: photo2, caption: '' },
    { src: photo3, caption: '' },
  ];
  return (
    <div className="backgroundPuprle">
      <div className="centeredContainer">
        <Carouselka images={images} width={300} className="carouselka" />
        <TypingText className="Title" speed={30}>
          Sonder
        </TypingText>
        <TypingText
          className="justtext1"
          styles={{ marginTop: '5%' }}
          speed={10}
        >
          A mobile app designed to inspire people to step outside, engage in
          social activities, and earn rewards for their participation. This app
          was created to combat the growing loneliness epidemic, which has been
          exacerbated by the increasing use of technology and the isolation
          caused by the COVID-19 pandemic. While the app is still in
          development, significant progress has already been made.
        </TypingText>
        <TypingText className="Title" speed={30}>
          Technologies
        </TypingText>
        <TypingText className="Title" speed={10}>
          Front end
        </TypingText>
        <TypingText className="justtext1" speed={10}>
          {description}
        </TypingText>
      </div>
      <div className="rowsContainer">
        <TechnologyCard
          image={react_logo}
          title="React Native"
          onclick={() => handlePush('react_native')}
        />
        <TechnologyCard
          image={ts}
          title="TypeScript"
          onclick={() => handlePush('ts')}
        />
        <TechnologyCard
          image={js}
          title="JavaScript"
          onclick={() => handlePush('js')}
        />
        <TechnologyCard
          image={expo}
          title="Expo"
          onclick={() => handlePush('expo')}
        />
        <TechnologyCard
          image={html}
          title="HTML"
          onclick={() => handlePush('html')}
        />
        <TechnologyCard
          image={css}
          title="CSS"
          onclick={() => handlePush('css')}
        />
      </div>

      <div className="centeredContainer">
        <TypingText className="Title" speed={10}>
          Back end
        </TypingText>
        <TypingText className="justtext1" speed={10}>
          {BEdescription}
        </TypingText>
      </div>
      <div className="rowsContainer">
        <TechnologyCard
          image={springBoot}
          title="Spring Boot"
          onclick={() => handlePush('spring_boot')}
        />
        <TechnologyCard
          image={postgress}
          title="postgreSQL"
          onclick={() => handlePush('postgress')}
        />
        <TechnologyCard
          image={java}
          title="Java"
          onclick={() => handlePush('java')}
        />
        <TechnologyCard
          image={jwt}
          title="JWT"
          onclick={() => handlePush('jwt')}
        />
        <TechnologyCard
          image={apple}
          title="APN"
          onclick={() => handlePush('apn')}
        />
      </div>
      {/* <div className="centeredContainer">
        <TypingText
          className="justtext1"
          styles={{ marginTop: '5%' }}
          speed={10}
        >
          More details you can read in the documentation.
        </TypingText>
      </div> */}
    </div>
  );
};
