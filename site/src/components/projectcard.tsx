import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AsciiButton } from './ascii';
export const ProjectCard: React.FC<{
  images: string;
  title: string;
  text: string;
  link: string;
}> = ({ images, title, text, link }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <div style={cardStyle}>
      <img src={images} alt={title} style={imageStyle} />
      <div style={bodyStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={textStyle}>{text}</p>
        <AsciiButton onclick={handleButtonClick} label = {"   read more   "}></AsciiButton>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  width: '25em',
  backgroundColor: 'rgb(0, 0, 0)',
  color: 'green',
  height: '40em',
  border: '2px dashed green',
  borderRadius: '10px',
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
  color: "green",
  margin: '0 0 10px 0',
  fontFamily: 'Deter',
};

const textStyle: React.CSSProperties = {
  margin: '0 0 15px 0',
  fontFamily: 'Deter',
};
