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
import '../../styles/overlay.css';
import { useState } from 'react';

const BodyEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const isEditorActive = useIsEditorActive(Editors.Body);
  const [selectedHead, setSelectedHead] = useState(0);
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedLegs, setSelectedLegs] = useState(0);

  const headCanvases = [
    <Canvas key={'drawCircleHead'} draw={drawCircleHead} />,
    <Canvas key={'drawOvalVerticalHead'} draw={drawOvalVerticalHead} />,
    <Canvas key={'drawOvalHorizontalHead'} draw={drawOvalHorizontalHead} />,
    <Canvas key={'drawSquareHead'} draw={drawSquareHead} />
  ];
  const bodyCanvases = [
    <Canvas key={'drawStickTorso'} draw={drawStickTorso} />,
    <Canvas key={'drawOvalTorso'} draw={drawOvalTorso} />,
    <Canvas key={'drawCircleTorso'} draw={drawCircleTorso} />
  ];
  const legsCanvases = [
    <Canvas key={'drawStickLegs'} draw={drawStickLegs} />,
    <Canvas key={'drawRoundLegs'} draw={drawRoundLegs} />,
    <Canvas key={'drawRoundSkinnyLegs'} draw={drawRoundSkinnyLegs} />
  ];

  return (
    <div className="overlay-component" style={{ zIndex: 1 }}>
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

export default BodyEditor;
