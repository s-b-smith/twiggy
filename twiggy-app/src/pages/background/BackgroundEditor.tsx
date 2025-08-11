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
import { useEffect } from 'react';

const BackgroundEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const isEditorActive = useIsEditorActive(Editors.Background);

  useEffect(() => {
    if (isEditorActive) {
      alert('Not built yet');
    }
  }, [isEditorActive]);

  return <></>;
};

export default BackgroundEditor;
