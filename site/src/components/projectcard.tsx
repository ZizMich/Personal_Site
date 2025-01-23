import React from 'react';
import { useNavigate } from 'react-router-dom';
export const ProjectCard: React.FC<{images: string; title: string; text: string; link: string;}> = ({ images, title, text, link }) => {
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
        <button onClick={handleButtonClick} className='projButton'>Read more</button>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  width: '25vw',
  backgroundColor: "rgba(45,45,45,0.4)",
  color: 'white',
  height:"75vh",
  borderRadius: '8px',
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
  margin: '0 0 10px 0',
  fontFamily:"Safton",

};

const textStyle: React.CSSProperties = {
  margin: '0 0 15px 0',
  fontFamily:"Safton",
};

