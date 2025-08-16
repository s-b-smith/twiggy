import { DrawProps } from '../components/Canvas';
import { defaults, setDefaultProps } from './defaults';

export const drawCircleHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = ctx.canvas.height / 2 - defaults.offset;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.stroke();
};
export const drawColorCircleHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = ctx.canvas.height / 2 - defaults.offset;
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.stroke();
};

export const drawOvalVerticalHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radiusY = ctx.canvas.height / 2 - defaults.offset;
  const radiusX = radiusY * (2 / 3);
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI, false);
  ctx.stroke();
};
export const drawColorOvalVerticalHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radiusY = ctx.canvas.height / 2 - defaults.offset;
  const radiusX = radiusY * (2 / 3);
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI, false);
  ctx.stroke();
};

export const drawOvalHorizontalHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radiusX = ctx.canvas.height * (2 / 3) - defaults.offset;
  const radiusY = ctx.canvas.height / 2 - defaults.offset;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI, false);
  ctx.stroke();
};

export const drawColorOvalHorizontalHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radiusX = ctx.canvas.height * (2 / 3) - defaults.offset;
  const radiusY = ctx.canvas.height / 2 - defaults.offset;
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI, false);
  ctx.stroke();
};

export const drawSquareHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const topLeftX = ctx.canvas.width / 4 + defaults.offset;
  const topLeftY = defaults.offset;
  const sideLength = ctx.canvas.height - defaults.offset;
  ctx.strokeRect(topLeftX, topLeftY, sideLength, sideLength - defaults.offset);
};
export const drawColorSquareHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const topLeftX = ctx.canvas.width / 4 + defaults.offset;
  const topLeftY = defaults.offset;
  const sideLength = ctx.canvas.height - defaults.offset;
  ctx.strokeStyle = 'green';
  ctx.strokeRect(topLeftX, topLeftY, sideLength, sideLength - defaults.offset);
};
