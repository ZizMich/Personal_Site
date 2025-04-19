import React, { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const TvNoiseTransition: React.FC = () => {
  // const [isTransitioning, setIsTransitioning] = useState(true);
  const location = useLocation();
  const [imageProgress, setImageProgress] = useState(100);
  



  useEffect(() => {
    setImageProgress(100)
    const timer = setTimeout(
      () => {
        const imageInterval = setInterval(() => {
          setImageProgress((prev) => {
            if (prev <=0) {
              clearInterval(imageInterval);
              return prev;
            }
            return prev -1;
          });
        }, 15);
      },
      250
    );
    

    return () => clearTimeout(timer); // Cleanup timeout on component unmount or location change
  }, [location]);

  return (
    <div style={ {
      backgroundColor:"black",
      width: "100%",
      height: "100%",
      position: "fixed",
      zIndex:100000,
      imageRendering: "pixelated",
      clipPath: `inset(${100 - imageProgress}% 0 0 0)`,
      //opacity: imageProgress ==0 ? 1 : 0,
    }
    }
      >
    </div>
  );
};


export default TvNoiseTransition;
