import { DrawProps } from '../components/Canvas';
import { defaults, setDefaultProps } from './defaults';

const drawStickLegsHelper = (
  ctx: CanvasRenderingContext2D,
  startLeftLegX: number,
  startLeftLegY: number,
  startRightLegX: number,
  startRightLegY: number
) => {
  const endLeftLegX = defaults.offset;
  const endLeftLegY = ctx.canvas.height - defaults.offset;
  const endRightLegX = ctx.canvas.width - defaults.offset;
  const endRightLegY = ctx.canvas.height - defaults.offset;
  ctx.moveTo(startLeftLegX, startLeftLegY);
  ctx.lineTo(endLeftLegX, endLeftLegY);
  ctx.moveTo(startRightLegX, startRightLegY);
  ctx.lineTo(endRightLegX, endRightLegY);
};

export const drawStickLegs = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const startLeftLegX = ctx.canvas.width / 2 - defaults.offset / 2;
  const startLeftLegY = 0;
  const startRightLegX = ctx.canvas.width / 2 + defaults.offset / 2;
  const startRightLegY = 0;

  ctx.beginPath();
  drawStickLegsHelper(ctx, startLeftLegX, startLeftLegY, startRightLegX, startRightLegY);
  ctx.stroke();
};

export const drawRoundLegs = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const rightLegCenterX = ctx.canvas.width * (2 / 3);
  const rightLegCenterY = ctx.canvas.height / 2;
  const leftLegCenterX = ctx.canvas.width / 3;
  const leftLegCenterY = ctx.canvas.height / 2;
  const radiusY =
    Math.sqrt(Math.pow(ctx.canvas.width / 4, 2) + Math.pow(ctx.canvas.height, 2)) / 2 -
    defaults.offset;
  const radiusX = radiusY / 3;
  const rotationInRadians = (Math.PI * 30) / 180;

  ctx.beginPath();
  ctx.ellipse(
    rightLegCenterX,
    rightLegCenterY,
    radiusX,
    radiusY,
    -rotationInRadians,
    0,
    2 * Math.PI,
    false
  );
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(
    leftLegCenterX,
    leftLegCenterY,
    radiusX,
    radiusY,
    rotationInRadians,
    0,
    2 * Math.PI,
    false
  );
  ctx.stroke();
};

export const drawRoundSkinnyLegs = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const rightLegCenterX = ctx.canvas.width * (2 / 3);
  const rightLegCenterY = ctx.canvas.height / 2;
  const leftLegCenterX = ctx.canvas.width / 3;
  const leftLegCenterY = ctx.canvas.height / 2;
  const radiusY =
    Math.sqrt(Math.pow(ctx.canvas.width / 4, 2) + Math.pow(ctx.canvas.height, 2)) / 2 -
    defaults.offset;
  const radiusX = radiusY / 5;
  const rotationInRadians = (Math.PI * 30) / 180;

  ctx.beginPath();
  ctx.ellipse(
    rightLegCenterX,
    rightLegCenterY,
    radiusX,
    radiusY,
    -rotationInRadians,
    0,
    2 * Math.PI,
    false
  );
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(
    leftLegCenterX,
    leftLegCenterY,
    radiusX,
    radiusY,
    rotationInRadians,
    0,
    2 * Math.PI,
    false
  );
  ctx.stroke();
};
