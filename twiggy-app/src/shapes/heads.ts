import { DrawProps } from '../components/Canvas';

const setDefaultProps = (ctx: CanvasRenderingContext2D) => {
  ctx.lineWidth = 10;

  return ctx;
};

export const drawCircleHead = (props: DrawProps) => {
  const ctx = setDefaultProps(props.ctx);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const radius = 70;
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
  //   ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
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
  //   ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.ellipse(centerX, centerY, radiusX, radiuxY, 0, 0, 2 * Math.PI, false);
  ctx.stroke();
};
