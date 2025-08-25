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

const BodyCanvas = (canvasProps: CanvasProps & { key: React.Key }) => {
  const { style, ...remainingCanvasProps } = canvasProps;
  const canvasStyle = { ...style, ...{ height: '80%' } } as React.CSSProperties;

  return <Canvas style={canvasStyle} {...remainingCanvasProps} />;
};
const StaticCanvasWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ height: '200px' }}>{children}</div>;
};

const BodyEditor = () => {
  const isEditorActive = useIsEditorActive(Editors.Body);
  const [selectedHead, setSelectedHead] = useState(0);
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedLegs, setSelectedLegs] = useState(0);

  const headCanvases = [
    <BodyCanvas key={'drawCircleHead'} draw={drawCircleHead} style={{ marginTop: '40px' }} />,
    <BodyCanvas
      key={'drawOvalVerticalHead'}
      draw={drawOvalVerticalHead}
      style={{ marginTop: '40px' }}
    />,
    <BodyCanvas
      key={'drawOvalHorizontalHead'}
      draw={drawOvalHorizontalHead}
      style={{ marginTop: '40px' }}
    />,
    <BodyCanvas key={'drawSquareHead'} draw={drawSquareHead} style={{ marginTop: '40px' }} />,
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
    <BodyCanvas key={'drawStickLegs'} draw={drawStickLegs} style={{ marginBottom: '40px' }} />,
    <BodyCanvas key={'drawRoundLegs'} draw={drawRoundLegs} style={{ marginBottom: '40px' }} />,
    <BodyCanvas
      key={'drawRoundSkinnyLegs'}
      draw={drawRoundSkinnyLegs}
      style={{ marginBottom: '40px' }}
    />,
    <BodyCanvas
      key={'drawOneMiddleLeg'}
      draw={drawOneMiddleLeg}
      style={{ marginBottom: '40px' }}
    />,
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
