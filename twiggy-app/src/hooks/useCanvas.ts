import { useRef, useEffect } from 'react';
import { CanvasProps, DrawProps } from '../components/Canvas';

const useCanvas = (draw: CanvasProps['draw']) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    // Get the DPR and size of the canvas
    // const dpr = window.devicePixelRatio;
    // const rect = canvas.getBoundingClientRect();

    // // Set the "actual" size of the canvas
    // canvas.width = rect.width * dpr;
    // canvas.height = rect.height * dpr;

    // // Set the "drawn" size of the canvas
    // canvas.style.width = `${rect.width}px`;
    // canvas.style.height = `${rect.height}px`;

    let requestAnimationId = 0;
    let counter = 0;
    const render = (ctx: CanvasRenderingContext2D) => {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw({ ctx, counter } as DrawProps);
      ctx.restore();
      counter++;
      requestAnimationId = requestAnimationFrame(() => render(ctx));
    };
    render(context);

    return () => {
      cancelAnimationFrame(requestAnimationId);
    };
  });

  return canvasRef;
};

export default useCanvas;
