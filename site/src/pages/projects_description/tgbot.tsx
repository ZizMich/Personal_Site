import React from 'react';
import { TypingText } from '../../components/typingtext';
import { Carouselka } from '../../components/carousel';
import tgbot1 from '../../assets/tgbot1.png';
import tgbot2 from '../../assets/tgbot2.png';
import { TechnologyCard } from '../../components/technologycard';
import python from '../../assets/technologies/python.png';
import sqlite from '../../assets/technologies/sqlite.png';
import aiogram from '../../assets/technologies/aiogram.png';
import { useState } from 'react';

export const Tgbot = () => {
  const [description, setDescription] = useState('click on icons!');
  const images = [
    { src: tgbot1, caption: '' },
    { src: tgbot2, caption: '' },
  ];
  const handleClick = (option: string) => {
    switch (option) {
      case 'aiogram':
        setDescription(
          'Aiogram stands for Asyncornous Telegram. This is a python library for interaracting with Telegram API, which allows to create bots, shops abd other featers of telegram'
        );
        break;
      case 'sqlite':
        setDescription(
          'sqlite is a lightweight database for python and other languages. It was used for storing user data and settings'
        );
        break;
      case 'python':
        setDescription(
          'Python was used due to its simpicity and development speed'
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
    <div className="backgroundBlue">
      <div style={{ padding: '5%' }} className="centeredContainer">
        <Carouselka width={300} images={images} />
        <TypingText
          className="Title"
          styles={{ margin: '0 auto', display: 'block', marginTop: '5%' }}
          speed={30}
        >
          Telegram Bot
        </TypingText>
      </div>
      <div className="centeredContainer">
        <TypingText
          className="justtext1"
          styles={{ textAlign: 'center', marginTop: '5%' }}
          speed={2}
        >
          A telegram bot that was made for solving an actual bussiness problem.
          My parents own a retail shop which has a telegram channel in order to
          inform people about new products and show them new deals. However,
          turned out customers quickly forget about the older products after
          releasing new ones since they pay attention only to them. So we had to
          somehow constantly remind about availability of previous products.
          Thats what this bot does, it gets random available products from the
          configured time span and posts them regularly in the channel so the
          collection pretty much always stays in the bottom and informs people
          about older products.
        </TypingText>
        <TypingText speed={2} className="Title">
          Technologies
        </TypingText>
        <TypingText speed={2} className="justtext1">
          {description}
        </TypingText>
      </div>
      <div className="rowsContainer">
        <TechnologyCard
          image={python}
          title="Python"
          onclick={() => handleClick('python')}
        />
        <TechnologyCard
          image={sqlite}
          title="Telegram Bot API"
          onclick={() => handleClick('sqlite')}
        />
        <TechnologyCard
          image={aiogram}
          title="Aiogram"
          onclick={() => handleClick('aiogram')}
        />
      </div>
    </div>
  );
};
