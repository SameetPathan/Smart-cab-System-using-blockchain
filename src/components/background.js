import React, { useRef, useEffect } from 'react';

const MatrixAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = 550);
    if (canvas.height < 350) {
      h = canvas.height = 300;
    }
    let cols = Math.floor(w / 20) + 1;
    let ypos = Array(cols).fill(0);

    const resizeCanvas = () => {
      if (canvas.width < window.innerWidth) {
        w = canvas.width = window.innerWidth;
      }
      if (canvas.height < 550) {
        h = canvas.height = 550;
      }
      if (canvas.height < 350) {
        h = canvas.height = 350;
      }
      cols = Math.floor(w / 20) + 1;
      ypos = Array(cols).fill(0);
    };

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0,0,0,.05)';
      ctx.fillRect(0, 0, window.innerWidth, h);

      ctx.fillStyle = 'rgb(0, 255, 0, 0.3)';
      ctx.font = '15pt monospace';

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    };

    resizeCanvas();
    setInterval(drawMatrix, 50);

    return () => {
      clearInterval(drawMatrix);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MatrixAnimation;
