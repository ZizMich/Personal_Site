import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import RetroLoadingAnimation from './retroLoadingAnim';
export const Carouselka: React.FC<{
  width: number;
  images: { src: string; caption: string }[];
  className?: string;
  ascii: string;
}> = ({ width, images, className, ascii }) => {
  const [visible, setVisible] = useState(false);
  
  return (
    <div className={className} style={{ width: width+100, alignContent: 'center',  border: '3px dotted green',
    }}>
      {visible ? (
        <Carousel fade style={{alignContent: 'center'}}>
          {images.map((element) => (
            <Carousel.Item key={element.src} style={{
              alignContent: 'center',
              justifyContent: "center",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Carousel.Caption>
                <p style={{ color: 'gray' }}>{element.caption}</p>
              </Carousel.Caption>
              <img
                src={element.src}
                width={width}
                height="auto"
                style={{ maxWidth: '100%', objectFit: 'contain' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <RetroLoadingAnimation callback={()=>{setVisible(true)}} imageSrc={images[0].src} asciiArt={ascii}></RetroLoadingAnimation>
      )}
    </div>
  );
};
