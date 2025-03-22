import { useEffect, useState, useRef } from 'react';
import stringWidth from 'string-width';
import React from 'react';
const RetroLoadingAnimation = ({
  asciiArt,
  imageSrc,
  callback,
}: {
  asciiArt: string;
  imageSrc: string;
  callback?: () => void;
}) => {
  const [asciiVisible, setAsciiVisible] = useState(true);
  const [asciiProgress, setAsciiProgress] = useState(0);
  const [imageProgress, setImageProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  var asciiWidth = 0;
  for (var i = 6; i < asciiArt.length; i++) {
    if (asciiArt[i] == '\n') {
      asciiWidth = i;
      break;
    }
  }

  useEffect(() => {
    // Анимация ASCII art
    const asciiInterval = setInterval(() => {
      setAsciiProgress((prev) => {
        if (prev >= asciiArt.length) {
          clearInterval(asciiInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 0.0001);

    // Начинаем анимацию изображения после завершения ASCII
    setTimeout(
      () => {
        const imageInterval = setInterval(() => {
          setImageProgress((prev) => {
            if (prev >= 100) {
              clearInterval(imageInterval);
              if (callback){
                callback()
                };
              setTimeout(() => setAsciiVisible(false), 1000);
              return prev;
            }
            return prev + 1;
          });
        }, 30);
 
      },
      asciiArt.length * 10 + 500
    );

    return () => {
      clearInterval(asciiInterval)

    };
  }, [asciiArt]);

  return (
    <div
      className={'container'}
      style={{
        width: asciiWidth * 8.3,
        height: (asciiArt.length / asciiWidth) * 14,
      }}
      ref={containerRef}
    >
      {asciiVisible && (
        <pre className={'ascii'}>{asciiArt.slice(0, asciiProgress)}</pre>
      )}
      <div
        className={'image'}
        style={{
          width: asciiWidth * 8.3,
          height: (asciiArt.length / asciiWidth) * 14,

          clipPath: `inset(0 0 ${100 - imageProgress}% 0)`,
          opacity: imageProgress > 0 ? 1 : 0,
        }}
      >
        <img
          style={{
            width: asciiWidth * 8.3,
            height: (asciiArt.length / asciiWidth) * 14,
          }}
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default RetroLoadingAnimation;
