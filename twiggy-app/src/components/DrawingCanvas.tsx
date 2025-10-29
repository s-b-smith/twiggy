import { useEffect, useRef, useState } from 'react';

// TODO: Move mouse events up the tree so you can have continuous draw when moving outside canvas
export interface DrawnPoint {
  x: number;
  y: number;
  color?: string;
  width?: number;
}

interface DrawingCanvasProps {
  isDrawingActive: boolean;
  drawnPoints: DrawnPoint[];
  setDrawnPoints: (drawnPoints: DrawnPoint[]) => void;
  style?: React.CSSProperties;
}
const DrawingCanvas = (props: DrawingCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // Set initial canvas properties
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    // Handle high pixel density devices
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    // Redraw any existing lines if needed (for more complex drawing apps)
    // You would store drawn lines as data and redraw them here.
    props.drawnPoints.forEach(drawnPoint => {
      ctx.strokeStyle = drawnPoint.color ?? 'black';
      ctx.lineWidth = drawnPoint.width ?? 2;
      console.log('POINT');
      console.log('COLOR', drawnPoint.color);
      console.log('WIDTH', drawnPoint.width);

      ctx.fillRect(drawnPoint.x, drawnPoint.y, 1, 1);
    });
  }, []);

  const getMousePos = (
    canvas: HTMLCanvasElement,
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!props.isDrawingActive) {
      return;
    }
    // console.log('MOUSE DOWN');
    const canvas = canvasRef.current as HTMLCanvasElement;
    const pos = getMousePos(canvas, e);
    setLastPos(pos);
    setIsDrawing(true);

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillRect(pos.x, pos.y, 1, 1);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    // console.log('MOUSE MOVING');
    if (!isDrawing) return;
    // console.log('MOUSE DRAWING');
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const newPos = getMousePos(canvas, e);

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(newPos.x, newPos.y);
    ctx.stroke();

    setLastPos(newPos);

    props.setDrawnPoints([...props.drawnPoints, { x: newPos.x, y: newPos.y }]);
  };

  const handleMouseUp = () => {
    // console.log('MOUSE UP');
    setIsDrawing(false);
  };

  const handleMouseOut = () => {
    // console.log('MOUSE OUT');
    setIsDrawing(false); // Stop drawing if mouse leaves canvas
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseOut}
      style={{
        ...props.style,
        border: props.isDrawingActive ? props.style?.border : 'solid transparent'
        // border: 'none'
      }}
    />
  );
};

export default DrawingCanvas;
