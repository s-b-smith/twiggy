import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import {
  drawCircleHead,
  drawOvalHorizontalHead,
  drawOvalVerticalHead,
  drawSquareHead
} from '../../canvas/shapes/heads';
import { drawCircleTorso, drawOvalTorso, drawStickTorso } from '../../canvas/shapes/torsos';
import { drawRoundLegs, drawRoundSkinnyLegs, drawStickLegs } from '../../canvas/shapes/legs';
import { useAppSelector } from 'hooks/react-redux-hooks';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import { useEffect } from 'react';
import { Editor } from 'constants/app';

const ColorEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const isEditorActive = useIsEditorActive(Editor.Color);

  useEffect(() => {
    if (isEditorActive) {
      alert('Not built yet');
    }
  }, [isEditorActive]);

  return <></>;
};

export default ColorEditor;
