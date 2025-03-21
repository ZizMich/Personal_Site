import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useRef } from 'react';
export const TechnologyCard: React.FC<{
  image: string;
  title: string;
  onclick: Function;
}> = ({ image, title, onclick }) => {
  const [isDark, setIsDark] = useState(false);
  const reference = useRef(null);
  const handleClick = () => {
    setIsDark(true);
    onclick();
  };

  return (
    <motion.div
      style={{
        marginTop: '5%',
        objectFit: 'contain',
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.5)' : 'transparent', // Darken the background
        transition: 'background-color 0.3s ease', // Smooth transition
      }}
      ref={reference}
      onMouseDown={handleClick}
      onMouseUp={() => setIsDark(false)}
      whileInView={{ rotate:360 }}
      whileHover={{scale:1.2}}
      whileTap={{scale:0.8}}
    >
      <img
        
        height="100rem"
        width="auto"
        src={image}
        alt="me"
        style={{ borderRadius: '15px' }}
      />
      <p className="justtext">{title}</p>
    </motion.div>
  );
};
