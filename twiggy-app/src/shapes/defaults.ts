const lineWidth = 10;
const offset = lineWidth / 2;

export const defaults = {
  lineWidth,
  offset
};

export const setDefaultProps = (ctx: CanvasRenderingContext2D) => {
  ctx.lineWidth = defaults.lineWidth;

  return ctx;
};
