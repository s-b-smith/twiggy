import { DrawProps } from '../../components/Canvas';
import { setDefaultProps } from '../defaults';

export const drawImage = (props: DrawProps) => {
  if (!props.image) {
    return;
  }

  const ctx = setDefaultProps(props.ctx);
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(props.image, 0, 0, ctx.canvas.width, ctx.canvas.height);
};
