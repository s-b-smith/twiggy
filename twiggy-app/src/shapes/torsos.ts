import { DrawProps } from '../components/Canvas';
import { setDefaultProps } from './defaults';

const drawStickArms = (
  ctx: CanvasRenderingContext2D,
  startLeftArmX: number,
  startLeftArmY: number,
  startRightArmX: number,
  startRightArmY: number
) => {
  const endLeftArmX = 5;
  const endLeftArmY = 5;
  const endRightArmX = ctx.canvas.width - 5;
  const endRightArmY = 5;
  ctx.moveTo(startLeftArmX, startLeftArmY);
  ctx.lineTo(endLeftArmX, endLeftArmY);
  ctx.moveTo(startRightArmX, startRightArmY);
  ctx.lineTo(endRightArmX, endRightArmY);
};

export const drawStickTorso = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const startBodyX = ctx.canvas.width / 2;
  const startBodyY = 0;
  const endBodyX = ctx.canvas.width / 2;
  const endBodyY = ctx.canvas.height;

  const startLeftArmX = ctx.canvas.width / 2 - 4;
  const startLeftArmY = ctx.canvas.height / 4;
  const startRightArmX = ctx.canvas.width / 2 + 4;
  const startRightArmY = ctx.canvas.height / 4;

  ctx.beginPath();
  ctx.moveTo(startBodyX, startBodyY);
  ctx.lineTo(endBodyX, endBodyY);
  drawStickArms(ctx, startLeftArmX, startLeftArmY, startRightArmX, startRightArmY);
  ctx.stroke();
};

export const drawOvalTorso = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radiusX = 55;
  const radiuxY = 75;

  const startLeftArmX = ctx.canvas.width / 3;
  const startLeftArmY = ctx.canvas.height / 4;
  const startRightArmX = ctx.canvas.width / (3 / 2);
  const startRightArmY = ctx.canvas.height / 4;

  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiuxY, 0, 0, 2 * Math.PI, false);
  drawStickArms(ctx, startLeftArmX, startLeftArmY, startRightArmX, startRightArmY);
  ctx.stroke();
};

export const drawCircleTorso = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = 75;

  const startLeftArmX = ctx.canvas.width / 4;
  const startLeftArmY = ctx.canvas.height / 4;
  const startRightArmX = ctx.canvas.width * (3 / 4);
  const startRightArmY = ctx.canvas.height / 4;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  drawStickArms(ctx, startLeftArmX, startLeftArmY, startRightArmX, startRightArmY);
  ctx.stroke();
};
