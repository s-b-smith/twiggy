import { forwardRef } from 'react';
import useCanvas from '../hooks/useCanvas';

export interface DrawProps {
  ctx: CanvasRenderingContext2D;
  counter: number;
  image?: HTMLImageElement;
}
export interface CanvasProps {
  draw: (drawProps: DrawProps) => void;
  isAnimated?: boolean;
  zIndex?: number;
  redrawDependencies?: unknown[];
  style?: React.CSSProperties;
  image?: HTMLImageElement;
}

const CanvasWrapper = forwardRef<HTMLCanvasElement, CanvasProps>(function create(props, ref) {
  // TODO: Work on centering the canvases with the new height
  return <canvas style={{ height: '100%', ...props.style }} ref={ref} />;
});
const Canvas = (props: CanvasProps) => {
  const canvasRef = useCanvas(props);

  return <CanvasWrapper ref={canvasRef} {...props} />;
};

export default Canvas;
