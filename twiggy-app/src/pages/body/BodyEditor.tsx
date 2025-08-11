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
import { Editors, useIsEditorActive } from 'hooks/active-editor-hooks';

const BodyEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const isEditorActive = useIsEditorActive(Editors.Body);

  return (
    <>
      <TwiggyCarousel isNavDrawerOpen={isNavDrawerOpen} isEnabled={isEditorActive}>
        <Canvas draw={drawCircleHead} />
        <Canvas draw={drawOvalVerticalHead} />
        <Canvas draw={drawOvalHorizontalHead} />
        <Canvas draw={drawSquareHead} />
      </TwiggyCarousel>
      <TwiggyCarousel isNavDrawerOpen={isNavDrawerOpen} isEnabled={isEditorActive}>
        <Canvas draw={drawStickTorso} />
        <Canvas draw={drawOvalTorso} />
        <Canvas draw={drawCircleTorso} />
      </TwiggyCarousel>
      <TwiggyCarousel isNavDrawerOpen={isNavDrawerOpen} isEnabled={isEditorActive}>
        <Canvas draw={drawStickLegs} />
        <Canvas draw={drawRoundLegs} />
        <Canvas draw={drawRoundSkinnyLegs} />
      </TwiggyCarousel>
    </>
  );
};

export default BodyEditor;
