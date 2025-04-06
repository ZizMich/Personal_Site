import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AsciiButton } from './ascii';
import RetroLoadingAnimation from './retroLoadingAnim';
export const ProjectCard: React.FC<{
  images?: string;
  title: string;
  text: string;
  link: string;
  ascii: string;
}> = ({ images, title, text, link, ascii }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <div style={cardStyle}>
      {  images ? (
      <RetroLoadingAnimation asciiArt={ascii} imageSrc={images} />) : <div style={{height:"50%", alignContent:"center"}}></div>
      }
      <div style={bodyStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={textStyle}>{text}</p>

        <AsciiButton
          onclick={handleButtonClick}
          label={'    read more    '}
        ></AsciiButton>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  width: '25em',
  textAlign: 'center',
  backgroundColor: 'rgb(0, 0, 0)',
  color: 'green',
  height: '40em',
  border: '3px dotted green',
  borderRadius: '3px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  margin: '20px',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '50%',
  objectFit: 'cover',
};

const bodyStyle: React.CSSProperties = {
  padding: '15px',
};

const titleStyle: React.CSSProperties = {
  color: 'green',
  margin: '0 0 10px 0',
  fontFamily: 'Deter',
};

const textStyle: React.CSSProperties = {
  margin: '0 0 15px 0',
  fontFamily: 'Deter',
};
