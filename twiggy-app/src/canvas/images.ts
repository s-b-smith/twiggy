import { DrawProps } from 'components/Canvas';
import { setDefaultProps } from 'canvas/defaults';

export const drawImage = (props: DrawProps) => {
  if (!props.image) {
    return;
  }
  const ctx = setDefaultProps(props.ctx);

  let startX;
  let startY;
  switch (props.startX) {
    case 'left':
      startX = 0;
      break;
    case 'center':
      startX = ctx.canvas.width / 2 - props.image.width / 2;
      break;
    case 'right':
      startX = ctx.canvas.width - props.image.width;
      break;
    default:
      startX = 0;
  }
  switch (props.startY) {
    case 'top':
      startY = 0;
      break;
    case 'center':
      startY = ctx.canvas.height / 2 - props.image.height / 2;
      break;
    case 'bottom':
      startY = ctx.canvas.height - props.image.height;
      break;
    default:
      startY = 0;
  }

  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(props.image, startX, startY, ctx.canvas.width, ctx.canvas.height);
};
