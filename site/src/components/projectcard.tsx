
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import icon from '../assets/icon.png'
import { useNavigate } from 'react-router-dom';
import React from 'react'; // Import React to fix the error//+
export const ProjectCard: React.FC<{images: string;title: string; text:string}> = ({ images, title, text }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/projects/sonder');
};

  return (
    <Card bg="dark" style={{ width: '30rem', height:'50rem'}}>
      <Card.Img src={icon}/>
      <Card.Body>
        <Card.Title style = {{color:"white" }} >{title}</Card.Title>
        <Card.Text style={{color:"white" }}>
          {text}
        </Card.Text>
        <Button onClick={handleButtonClick} variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}

