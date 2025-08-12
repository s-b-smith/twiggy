import { forwardRef } from 'react';
import useCanvas from '../hooks/useCanvas';

export type DrawProps = {
  ctx: CanvasRenderingContext2D;
  counter: number;
};
export type CanvasProps = {
  draw: (drawProps: DrawProps) => void;
  isAnimated?: boolean;
  zIndex?: number;
};

const CanvasWrapper = forwardRef<HTMLCanvasElement, CanvasProps>(function create(props, ref) {
  const canvasElement = (<canvas style={{ height: '100%' }} />) as unknown as HTMLCanvasElement;

  return (
    <canvas
      style={{ height: '100%', zIndex: props.zIndex ?? 0 }}
      height={canvasElement.offsetHeight}
      ref={ref}
    />
  );
});
const Canvas = (props: CanvasProps) => {
  const canvasRef = useCanvas(props);

  return <CanvasWrapper ref={canvasRef} {...props} />;
};

export default Canvas;
