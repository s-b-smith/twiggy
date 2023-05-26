import { DrawProps } from '../components/Canvas';
import { defaults, setDefaultProps } from './defaults';

export const drawCircleHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = ctx.canvas.width / 4 - defaults.lineWidth / 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.stroke();
};

export const drawOvalVerticalHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radiusX = 55;
  const radiuxY = 70;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiuxY, 0, 0, 2 * Math.PI, false);
  ctx.stroke();
};

export const drawOvalHorizontalHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radiusX = 70;
  const radiuxY = 55;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiuxY, 0, 0, 2 * Math.PI, false);
  ctx.stroke();
};

export const drawSquareHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const topLeftX = ctx.canvas.width / 4 + 5; // No idea why I need +5
  const topLeftY = 5;
  ctx.strokeRect(topLeftX, topLeftY, 140, 140);
};
