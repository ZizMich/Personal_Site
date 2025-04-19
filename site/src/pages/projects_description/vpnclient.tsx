import React from 'react';
import { Carouselka } from '../../components/carousel';
import vpn1 from '../../assets/vpn1.jpg';
import vpn2 from '../../assets/vpn2.jpg';
import vpn3 from '../../assets/vpn3.jpg';
import vpn4 from '../../assets/vpn4.jpg';
import vpn5 from '../../assets/vpn6.jpg';
import vpn6 from '../../assets/vpn6.jpg';
import vpn7 from '../../assets/vpn7.jpg';
import vpn8 from '../../assets/vpn8.jpg';
import python from '../../assets/technologies/python.png';
import { TypingText } from '../../components/typingtext';
import { TechnologyCard } from '../../components/technologycard';
import react_logo from '../../assets/technologies/react_logo.png';
import ts from '../../assets/technologies/ts.png';
import js from '../../assets/technologies/js.png';
import expo from '../../assets/technologies/expo.png';
import html from '../../assets/technologies/html.png';
import css from '../../assets/technologies/css.png';
import django from '../../assets/technologies/django.png';
import openvpn from '../../assets/technologies/openvpn.png';
import { vpn } from '../../assets/asciiarts';
import { useState } from 'react';
import { AsciiButton } from '../../components/ascii';

export const Vpn = () => {
  const [description, setDescription] = useState('click on icons!');
  const [BEdescription, setBEdescription] = useState('click on icons!');
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
      case 'python':
        setBEdescription(
          'I used python since the backend is not designed to do only simple and fast operation, and python is fast enough for these purposes'
        );
        break;
      case 'django':
        setBEdescription(
          'Django is the main backend framwork useed in the project. It is used for fetching the information about available vpn servers and sending configurations'
        );
        break;
      case 'openvpn':
        setBEdescription(
          'OpenVPN is the main protocol used for establishing the vpn connection between the device and the server'
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
    { src: vpn1, caption: '' },
    { src: vpn2, caption: '' },
    { src: vpn3, caption: '' },
    { src: vpn4, caption: '' },
    { src: vpn5, caption: '' },
    { src: vpn6, caption: '' },
    { src: vpn7, caption: '' },
    { src: vpn8, caption: '' },
  ];
  return (
    <div className="backgroundBlack">
      <div className="crt">
      <div className="centeredContainer">
        <Carouselka images={images} width={300} className="carouselka" ascii={vpn}/>
        <TypingText className="Title" speed={30}>
          ZetaVPN
        </TypingText>
        <TypingText
          className="justtext1"
          styles={{ marginTop: '5%' }}
          speed={10}
        >
          A fully functioning vpn service for Android and IOS.
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
                <AsciiButton
                  onclick={() => {
                    window.location.href = '      https://github.com/ZizMich/VPNClient';
                  }}
                  size={20}
                  label="    Github rep   "
                ></AsciiButton>
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
          image={python}
          title="Python"
          onclick={() => handlePush('python')}
        />
        <TechnologyCard
          image={django}
          title="Django"
          onclick={() => handlePush('django')}
        />
        <TechnologyCard
          image={openvpn}
          title="OpenVPN"
          onclick={() => handlePush('openvpn')}
        />
      </div>

            </div>
    </div>
  );
};
