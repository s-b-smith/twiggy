import { DrawProps } from '../components/Canvas';
import { defaults, setDefaultProps } from './defaults';

const drawStickArms = (
  ctx: CanvasRenderingContext2D,
  startLeftArmX: number,
  startLeftArmY: number,
  startRightArmX: number,
  startRightArmY: number
) => {
  const endLeftArmX = defaults.offset;
  const endLeftArmY = defaults.offset;
  const endRightArmX = ctx.canvas.width - defaults.offset;
  const endRightArmY = defaults.offset;
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

  const startLeftArmX = ctx.canvas.width / 2 - (defaults.offset - defaults.offset / 5);
  const startLeftArmY = ctx.canvas.height / 4;
  const startRightArmX = ctx.canvas.width / 2 + (defaults.offset - defaults.offset / 5);
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
  const radiusY = ctx.canvas.height / 2 - defaults.offset;
  const radiusX = radiusY * (3 / 4);

  const startLeftArmX = ctx.canvas.width / 3 + defaults.offset / 5;
  const startLeftArmY = ctx.canvas.height / 4;
  const startRightArmX = ctx.canvas.width * (2 / 3) - defaults.offset / 5;
  const startRightArmY = ctx.canvas.height / 4;

  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI, false);
  drawStickArms(ctx, startLeftArmX, startLeftArmY, startRightArmX, startRightArmY);
  ctx.stroke();
};

export const drawCircleTorso = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = ctx.canvas.height / 2 - defaults.offset;

  const angleInRadians = (Math.PI * 30) / 180;
  const startLeftArmX = centerX - radius * Math.cos(angleInRadians);
  const startLeftArmY = centerY - radius * Math.sin(angleInRadians);
  const startRightArmX = centerX + radius * Math.cos(angleInRadians);
  const startRightArmY = centerY - radius * Math.sin(angleInRadians);

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  drawStickArms(ctx, startLeftArmX, startLeftArmY, startRightArmX, startRightArmY);
  ctx.stroke();
};

const drawColorStickArms = (
  ctx: CanvasRenderingContext2D,
  startLeftArmX: number,
  startLeftArmY: number,
  startRightArmX: number,
  startRightArmY: number
) => {
  const endLeftArmX = defaults.offset;
  const endLeftArmY = defaults.offset;
  const endRightArmX = ctx.canvas.width - defaults.offset;
  const endRightArmY = defaults.offset;
  ctx.strokeStyle = 'green';
  ctx.moveTo(startLeftArmX, startLeftArmY);
  ctx.lineTo(endLeftArmX, endLeftArmY);
  ctx.moveTo(startRightArmX, startRightArmY);
  ctx.lineTo(endRightArmX, endRightArmY);
};

export const drawColorStickTorso = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const startBodyX = ctx.canvas.width / 2;
  const startBodyY = 0;
  const endBodyX = ctx.canvas.width / 2;
  const endBodyY = ctx.canvas.height;

  const startLeftArmX = ctx.canvas.width / 2 - (defaults.offset - defaults.offset / 5);
  const startLeftArmY = ctx.canvas.height / 4;
  const startRightArmX = ctx.canvas.width / 2 + (defaults.offset - defaults.offset / 5);
  const startRightArmY = ctx.canvas.height / 4;

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(startBodyX, startBodyY);
  ctx.lineTo(endBodyX, endBodyY);
  drawColorStickArms(ctx, startLeftArmX, startLeftArmY, startRightArmX, startRightArmY);
  ctx.stroke();
};

export const drawColorOvalTorso = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radiusY = ctx.canvas.height / 2 - defaults.offset;
  const radiusX = radiusY * (3 / 4);

  const startLeftArmX = ctx.canvas.width / 3 + defaults.offset / 5;
  const startLeftArmY = ctx.canvas.height / 4;
  const startRightArmX = ctx.canvas.width * (2 / 3) - defaults.offset / 5;
  const startRightArmY = ctx.canvas.height / 4;

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI, false);
  drawColorStickArms(ctx, startLeftArmX, startLeftArmY, startRightArmX, startRightArmY);
  ctx.stroke();
};

export const drawColorCircleTorso = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = ctx.canvas.height / 2 - defaults.offset;

  const angleInRadians = (Math.PI * 30) / 180;
  const startLeftArmX = centerX - radius * Math.cos(angleInRadians);
  const startLeftArmY = centerY - radius * Math.sin(angleInRadians);
  const startRightArmX = centerX + radius * Math.cos(angleInRadians);
  const startRightArmY = centerY - radius * Math.sin(angleInRadians);

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  drawColorStickArms(ctx, startLeftArmX, startLeftArmY, startRightArmX, startRightArmY);
  ctx.stroke();
};
