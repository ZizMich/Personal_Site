import React, { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const TvNoiseTransition: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 200);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount or location change
  }, [location]);

  return (
    <div className={isTransitioning ? "tv-noise":""}>
    </div>
  );
};

export default TvNoiseTransition;