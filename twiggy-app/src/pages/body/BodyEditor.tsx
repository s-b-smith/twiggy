import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import {
  drawCircleHead,
  drawOvalHorizontalHead,
  drawOvalVerticalHead,
  drawSquareHead
} from '../../shapes/heads';
import { drawCircleTorso, drawOvalTorso, drawStickTorso } from '../../shapes/torsos';
import { drawRoundLegs, drawRoundSkinnyLegs, drawStickLegs } from '../../shapes/legs';
import { useAppSelector } from 'hooks/react-redux-hooks';

const BodyEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);

  return (
    <>
      <TwiggyCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Canvas draw={drawCircleHead} />
        <Canvas draw={drawOvalVerticalHead} />
        <Canvas draw={drawOvalHorizontalHead} />
        <Canvas draw={drawSquareHead} />
      </TwiggyCarousel>
      <TwiggyCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Canvas draw={drawStickTorso} />
        <Canvas draw={drawOvalTorso} />
        <Canvas draw={drawCircleTorso} />
      </TwiggyCarousel>
      <TwiggyCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Canvas draw={drawStickLegs} />
        <Canvas draw={drawRoundLegs} />
        <Canvas draw={drawRoundSkinnyLegs} />
      </TwiggyCarousel>
    </>
  );
};

export default BodyEditor;
