import React from "react";
import { Carousel } from "react-bootstrap";

export const Carouselka: React.FC<{width:number, images:{src: string, caption: string}[], className?:string}> = ({width,images,className}) => {
    return(
        <div className={className} style={{ width: width, alignContent: "center" }}>
            <Carousel fade>
            {
                images.map((element)=>{
                return(
                <Carousel.Item className="crlitem" > 
                <Carousel.Caption>
                
                <p style={{color:'gray'}}>
                    {element.caption}
                </p>
                </Carousel.Caption>
                <img className="crlimg" src={element.src}  width={width} height="auto"/>


                </Carousel.Item>);})
            }
  
        </Carousel>
      </div>
    );
}