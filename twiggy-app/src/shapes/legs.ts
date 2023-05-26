import { DrawProps } from '../components/Canvas';
import { setDefaultProps } from './defaults';

// type Point = {
//   x: number;
//   y: number;
// };

const drawStickLegsHelper = (
  ctx: CanvasRenderingContext2D,
  startLeftLegX: number,
  startLeftLegY: number,
  startRightLegX: number,
  startRightLegY: number
) => {
  const endLeftLegX = 5;
  const endLeftLegY = ctx.canvas.height - 5;
  const endRightLegX = ctx.canvas.width - 5;
  const endRightLegY = ctx.canvas.height - 5;
  ctx.moveTo(startLeftLegX, startLeftLegY);
  ctx.lineTo(endLeftLegX, endLeftLegY);
  ctx.moveTo(startRightLegX, startRightLegY);
  ctx.lineTo(endRightLegX, endRightLegY);
};

export const drawStickLegs = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const startLeftLegX = ctx.canvas.width / 2 - 4;
  const startLeftLegY = 0;
  const startRightLegX = ctx.canvas.width / 2 + 4;
  const startRightLegY = 0;

  ctx.beginPath();
  drawStickLegsHelper(ctx, startLeftLegX, startLeftLegY, startRightLegX, startRightLegY);
  ctx.stroke();
};

// function drawArc(ctx: CanvasRenderingContext2D, [p0, p1, p2]: Point[], r: number) {
//   ctx.moveTo(p0.x, p0.y);
//   ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
//   ctx.lineTo(p2.x, p2.y);
// }

// export const drawRoundLegs = (props: DrawProps) => {
//   const ctx = setDefaultProps(props.ctx);

//   const startLeftLegPt = { x: ctx.canvas.width / 2 - 50, y: 0 };
//   const arcLeftLegPt = { x: 5, y: ctx.canvas.height - 5 };
//   const endLeftLegPt = { x: ctx.canvas.width / 2, y: 0 };
//   const startRightLegPt = { x: ctx.canvas.width / 2 + 50, y: 0 };
//   const arcRightLegPt = { x: ctx.canvas.width - 5, y: ctx.canvas.height - 5 };
//   const endRightLegPt = { x: ctx.canvas.width / 2, y: 0 };
//   const radius = 1;

//   ctx.beginPath();
//   drawArc(ctx, [startLeftLegPt, arcLeftLegPt, endLeftLegPt], radius);
//   drawArc(ctx, [startRightLegPt, arcRightLegPt, endRightLegPt], radius);
//   ctx.stroke();
// };

export const drawRoundLegs = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const rightLegCenterX = ctx.canvas.width * (2 / 3);
  const rightLegCenterY = ctx.canvas.height / 2;
  const leftLegCenterX = ctx.canvas.width / 3;
  const leftLegCenterY = ctx.canvas.height / 2;
  const radiusX = 25;
  const radiuxY = 79;
  const rotationInRadians = 0.5;

  ctx.beginPath();
  ctx.ellipse(
    rightLegCenterX,
    rightLegCenterY,
    radiusX,
    radiuxY,
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
    radiuxY,
    rotationInRadians,
    0,
    2 * Math.PI,
    false
  );
  ctx.stroke();
};

export const drawRoundSkinnyLegs = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const rightLegCenterX = ctx.canvas.width * (3 / 4);
  const rightLegCenterY = ctx.canvas.height / 2;
  const leftLegCenterX = ctx.canvas.width / 4;
  const leftLegCenterY = ctx.canvas.height / 2;
  const radiusX = 15;
  const radiuxY = 97;
  const rotationInRadians = 0.8;

  ctx.beginPath();
  ctx.ellipse(
    rightLegCenterX,
    rightLegCenterY,
    radiusX,
    radiuxY,
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
    radiuxY,
    rotationInRadians,
    0,
    2 * Math.PI,
    false
  );
  ctx.stroke();
};
