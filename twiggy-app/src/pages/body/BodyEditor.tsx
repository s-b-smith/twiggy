import Canvas, { CanvasProps } from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import {
  drawCircleHead,
  drawOvalHorizontalHead,
  drawOvalVerticalHead,
  drawSquareHead
} from '../../canvas/shapes/heads';
import {
  drawCircleTorso,
  drawCircleTorsoNoArms,
  drawOvalTorso,
  drawOvalTorsoNoArms,
  drawStickTorso,
  drawTorso
} from '../../canvas/shapes/torsos';
import {
  drawOneMiddleLeg,
  drawRoundLegs,
  drawRoundSkinnyLegs,
  drawStickLegs
} from '../../canvas/shapes/legs';
import { Editors, useIsEditorActive } from 'hooks/activeEditorHooks';
import '../../styles/overlay.css';
import { useState } from 'react';
import StaticCanvasWrapper from 'pages/StaticCanvasWrapper';

const HeadCanvas = (canvasProps: CanvasProps & { key: React.Key }) => {
  return <Canvas style={{ height: '80%', marginTop: '40px' }} {...canvasProps} />;
};
const LegsCanvas = (canvasProps: CanvasProps & { key: React.Key }) => {
  return <Canvas style={{ height: '80%', marginBottom: '40px' }} {...canvasProps} />;
};

const BodyEditor = () => {
  const isEditorActive = useIsEditorActive(Editors.Body);
  const [selectedHead, setSelectedHead] = useState(0);
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedLegs, setSelectedLegs] = useState(0);

  const headCanvases = [
    <HeadCanvas key={'drawCircleHead'} draw={drawCircleHead} />,
    <HeadCanvas key={'drawOvalVerticalHead'} draw={drawOvalVerticalHead} />,
    <HeadCanvas key={'drawOvalHorizontalHead'} draw={drawOvalHorizontalHead} />,
    <HeadCanvas key={'drawSquareHead'} draw={drawSquareHead} />,
    <></>
  ];
  const bodyCanvases = [
    <Canvas key={'drawStickTorso'} draw={drawStickTorso} />,
    <Canvas key={'drawOvalTorso'} draw={drawOvalTorso} />,
    <Canvas key={'drawCircleTorso'} draw={drawCircleTorso} />,
    <Canvas key={'drawTorso'} draw={drawTorso} />,
    <Canvas key={'drawOvalTorsoNoArms'} draw={drawOvalTorsoNoArms} />,
    <Canvas key={'drawCircleTorsoNoArms'} draw={drawCircleTorsoNoArms} />,
    <></>
  ];
  const legsCanvases = [
    <LegsCanvas key={'drawStickLegs'} draw={drawStickLegs} />,
    <LegsCanvas key={'drawRoundLegs'} draw={drawRoundLegs} />,
    <LegsCanvas key={'drawRoundSkinnyLegs'} draw={drawRoundSkinnyLegs} />,
    <LegsCanvas key={'drawOneMiddleLeg'} draw={drawOneMiddleLeg} />,
    <></>
  ];

  return (
    <div className="overlay-component" style={{ zIndex: 1 }}>
      <div style={{ visibility: isEditorActive ? 'visible' : 'hidden' }}>
        <TwiggyCarousel onChange={(now?: number) => setSelectedHead(now ?? 0)}>
          {headCanvases}
        </TwiggyCarousel>
        <TwiggyCarousel onChange={(now?: number) => setSelectedBody(now ?? 0)}>
          {bodyCanvases}
        </TwiggyCarousel>
        <TwiggyCarousel onChange={(now?: number) => setSelectedLegs(now ?? 0)}>
          {legsCanvases}
        </TwiggyCarousel>
      </div>
      <div
        className="canvas-overlay"
        style={{
          visibility: isEditorActive ? 'hidden' : 'visible'
        }}
      >
        <StaticCanvasWrapper>{headCanvases[selectedHead]}</StaticCanvasWrapper>
        <StaticCanvasWrapper>{bodyCanvases[selectedBody]}</StaticCanvasWrapper>
        <StaticCanvasWrapper>{legsCanvases[selectedLegs]}</StaticCanvasWrapper>
      </div>
    </div>
  );
};

export default BodyEditor;
