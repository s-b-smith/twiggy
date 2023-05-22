import useCanvas from '../hooks/useCanvas';

export type CanvasProps = {
  draw: (ctx: CanvasRenderingContext2D, counter: number) => void;
};

const Canvas = (props: CanvasProps) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
