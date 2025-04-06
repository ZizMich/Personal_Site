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
import html from '../../assets/technologies/html.png';
import css from '../../assets/technologies/css.png';
import { sonder_preview } from '../../assets/asciiarts';
import { useState } from 'react';
export const ThisWebsite = () => {

  const [description, setDescription] = useState("click on icons!");
  const handlePush = (option: string) => {
    switch (option) {
      case 'react':
        setDescription(" the main framework of the website, was chosen because of its interactiveness and simpicity");
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

      case 'ts':
            setDescription(
              'React native is written in typescript so knowledge of this programming language was simpply neccessary for development. Many components and app logic is written on typescript'
            );
      break;



            
      default:
        setDescription(
          'Click on the logo in order to find out why it was used!'
        );
        break;
    }
  };

  return (
    <div className="backgroundBlack">
      <div className="crt">
      <div className="centeredContainer">
        <TypingText className="Title" speed={30}>
          This website
        </TypingText>
        <TypingText
          className="justtext"
          styles={{ marginTop: '5%' }}
          speed={10}
        >
            this website was made with react,and hosted on vercel because it automatically pulls the newest version from github, and generally is quite convinient. All the animations are react components and not gifs.
            It does not have content manager, but if it grows larger and I will also implement it.
        </TypingText>
        <TypingText className="Title" speed={30}>
          Technologies
        </TypingText>
        <TypingText className="Title" speed={10}>
          Front end
        </TypingText>
        <TypingText className="justtext" speed={10}>
          {description}
        </TypingText>
      </div>
      <div className="rowsContainer">
        <TechnologyCard
          image={react_logo}
          title="React"
          onclick={() => handlePush('react')}
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

      </div>
    </div>
  );
};
