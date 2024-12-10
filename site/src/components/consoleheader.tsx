import React, { useEffect, useRef } from 'react';

export const ConsoleHeader = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(333);

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#FFF';
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (  Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="console" />;
};