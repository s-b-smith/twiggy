import { useRef, useEffect } from 'react';
import { CanvasProps } from '../components/Canvas';

const useCanvas = (draw: CanvasProps['draw']) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    let requestAnimationId = 0;
    let counter = 0;
    const render = (ctx: CanvasRenderingContext2D) => {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(ctx, counter);
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
