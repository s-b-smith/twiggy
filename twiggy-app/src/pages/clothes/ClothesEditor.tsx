import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import {
  drawCircleHead,
  drawColorCircleHead,
  drawColorOvalHorizontalHead,
  drawColorOvalVerticalHead,
  drawColorSquareHead,
  drawOvalHorizontalHead,
  drawOvalVerticalHead,
  drawSquareHead
} from '../../shapes/heads';
import { drawCircleTorso, drawOvalTorso, drawStickTorso } from '../../shapes/torsos';
import { drawRoundLegs, drawRoundSkinnyLegs, drawStickLegs } from '../../shapes/legs';
import { useAppSelector } from 'hooks/react-redux-hooks';
import { Editors, useIsEditorActive } from 'hooks/activeEditorHooks';
import '../../styles/overlay.css';
import { useState } from 'react';

const ClothesEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const isEditorActive = useIsEditorActive(Editors.Clothes);
  const [selectedHead, setSelectedHead] = useState(0);
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedLegs, setSelectedLegs] = useState(0);

  const headCanvases = [
    <Canvas key={'drawCircleHead2'} draw={drawColorCircleHead} />,
    <Canvas key={'drawOvalVerticalHead2'} draw={drawColorOvalVerticalHead} />,
    <Canvas key={'drawColorOvalHorizontalHead'} draw={drawColorOvalHorizontalHead} />,
    <Canvas key={'drawSquareHead2'} draw={drawColorSquareHead} />
  ];
  const bodyCanvases = [
    <Canvas key={'drawStickTorso2'} draw={drawStickTorso} />,
    <Canvas key={'drawOvalTorso2'} draw={drawOvalTorso} />,
    <Canvas key={'drawCircleTorso2'} draw={drawCircleTorso} />
  ];
  const legsCanvases = [
    <Canvas key={'drawStickLegs2'} draw={drawStickLegs} />,
    <Canvas key={'drawRoundLegs2'} draw={drawRoundLegs} />,
    <Canvas key={'drawRoundSkinnyLegs2'} draw={drawRoundSkinnyLegs} />
  ];

  // TODO: Implement. Currently copy of body
  return (
    <div className="overlay-component" style={{ zIndex: 2 }}>
      <div style={{ visibility: isEditorActive ? 'visible' : 'hidden' }}>
        <TwiggyCarousel
          isNavDrawerOpen={isNavDrawerOpen}
          onChange={(now?: number) => setSelectedHead(now ?? 0)}
        >
          {headCanvases}
        </TwiggyCarousel>
        <TwiggyCarousel
          isNavDrawerOpen={isNavDrawerOpen}
          onChange={(now?: number) => setSelectedBody(now ?? 0)}
        >
          {bodyCanvases}
        </TwiggyCarousel>
        <TwiggyCarousel
          isNavDrawerOpen={isNavDrawerOpen}
          onChange={(now?: number) => setSelectedLegs(now ?? 0)}
        >
          {legsCanvases}
        </TwiggyCarousel>
      </div>
      <div
        className="canvas-overlay"
        style={{
          visibility: isEditorActive ? 'hidden' : 'visible'
        }}
      >
        <div style={{ height: '200px' }}>{headCanvases[selectedHead]}</div>
        <div style={{ height: '200px' }}>{bodyCanvases[selectedBody]}</div>
        <div style={{ height: '200px' }}>{legsCanvases[selectedLegs]}</div>
      </div>
    </div>
  );
};

export default ClothesEditor;
