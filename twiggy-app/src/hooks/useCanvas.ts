import { useRef, useEffect } from 'react';
import { CanvasProps, DrawProps } from '../components/Canvas';

const useCanvas = (props: CanvasProps) => {
  const { draw, isAnimated } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    let requestAnimationId = 0;
    let counter = 0;
    const render = (ctx: CanvasRenderingContext2D) => {
      const dpr = window.devicePixelRatio;
      const rect = canvas.getBoundingClientRect();

      // Don't draw out-of-sight carousel items
      if (rect.width > 0) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      // Needed since my system is set to "make everything bigger" by 175%
      const displayOffset = 4 / 7;
      ctx.scale(dpr * displayOffset, dpr * displayOffset);
      // Don't draw out-of-sight carousel items
      if (rect.width > 0) {
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }

      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw({ ctx, counter } as DrawProps);
      ctx.restore();
      counter++;
      if (isAnimated) {
        requestAnimationId = requestAnimationFrame(() => render(ctx));
      }
    };
    render(context);

    return () => {
      cancelAnimationFrame(requestAnimationId);
    };
  });

  return canvasRef;
};

export default useCanvas;
