import useCanvas from 'hooks/useCanvas';
import { forwardRef } from 'react';

export interface DrawProps {
  ctx: CanvasRenderingContext2D;
  counter: number;
  image?: HTMLImageElement;
  startX?: 'left' | 'center' | 'right';
  startY?: 'top' | 'center' | 'bottom';
}
export interface CanvasProps {
  draw: (drawProps: DrawProps) => void;
  isAnimated?: boolean;
  zIndex?: number;
  redrawDependencies?: unknown[];
  style?: React.CSSProperties;
  image?: HTMLImageElement;
  startX?: 'left' | 'center' | 'right';
  startY?: 'top' | 'center' | 'bottom';
}

const CanvasWrapper = forwardRef<HTMLCanvasElement, CanvasProps>(function create(props, ref) {
  return <canvas style={{ height: '100%', ...props.style }} ref={ref} />;
});
const Canvas = (props: CanvasProps): React.ReactElement => {
  const canvasRef = useCanvas(props);

  return <CanvasWrapper ref={canvasRef} {...props} />;
};

export default Canvas;
