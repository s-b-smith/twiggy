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
} from '../../canvas/shapes/heads';
import {
  drawCircleTorso,
  drawColorCircleTorso,
  drawColorOvalTorso,
  drawColorStickTorso,
  drawOvalTorso,
  drawStickTorso
} from '../../canvas/shapes/torsos';
import { drawRoundLegs, drawRoundSkinnyLegs, drawStickLegs } from '../../canvas/shapes/legs';
import { Editors, useIsEditorActive } from 'hooks/activeEditorHooks';
import '../../styles/overlay.css';
import { useState } from 'react';
import { drawHeadImage } from 'canvas/clothes/clothes';
import { useClothesImages } from 'hooks/imageHooks';

const ClothesEditor = () => {
  const {
    blackTopHat,
    blackFedora,
    blackBowlerHat,
    steampunkHat,
    cowboyHat,
    baseballCap,
    pirateHat
  } = useClothesImages();
  const allImagesLoaded =
    blackTopHat &&
    blackFedora &&
    blackBowlerHat &&
    steampunkHat &&
    cowboyHat &&
    baseballCap &&
    pirateHat;

  const isEditorActive = useIsEditorActive(Editors.Clothes);
  const [selectedHead, setSelectedHead] = useState(0);
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedLegs, setSelectedLegs] = useState(0);
  if (!allImagesLoaded) {
    return;
  }

  const headCanvasStyles = { width: '150px', height: '75px' };
  const headCanvases = [
    <Canvas
      key={'drawBlackTopHat'}
      draw={drawHeadImage}
      image={blackTopHat}
      style={headCanvasStyles}
    />,
    <Canvas
      key={'drawBlackFedora'}
      draw={drawHeadImage}
      image={blackFedora}
      style={headCanvasStyles}
    />,
    <Canvas
      key={'drawBlackBowlerHat'}
      draw={drawHeadImage}
      image={blackBowlerHat}
      style={headCanvasStyles}
    />,
    <Canvas
      key={'drawSteampunkHat'}
      draw={drawHeadImage}
      image={steampunkHat}
      style={headCanvasStyles}
    />,
    <Canvas
      key={'drawCowboyHat'}
      draw={drawHeadImage}
      image={cowboyHat}
      style={headCanvasStyles}
    />,
    <Canvas
      key={'drawBaseballCap'}
      draw={drawHeadImage}
      image={baseballCap}
      style={headCanvasStyles}
    />,
    <Canvas key={'drawPirateHat'} draw={drawHeadImage} image={pirateHat} style={headCanvasStyles} />
  ];
  const bodyCanvases = [
    <Canvas key={'drawStickTorso2'} draw={drawColorStickTorso} />,
    <Canvas key={'drawOvalTorso2'} draw={drawColorOvalTorso} />,
    <Canvas key={'drawCircleTorso2'} draw={drawColorCircleTorso} />
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
        <TwiggyCarousel onChange={(now?: number) => setSelectedHead(now ?? 0)}>
          {headCanvases}
        </TwiggyCarousel>
        {/* <TwiggyCarousel onChange={(now?: number) => setSelectedBody(now ?? 0)}>
          {bodyCanvases}
        </TwiggyCarousel>
        <TwiggyCarousel onChange={(now?: number) => setSelectedLegs(now ?? 0)}>
          {legsCanvases}
        </TwiggyCarousel> */}
      </div>
      <div
        className="canvas-overlay"
        style={{
          visibility: isEditorActive ? 'hidden' : 'visible'
        }}
      >
        <div style={{ height: '200px' }}>{headCanvases[selectedHead]}</div>
        {/* <div style={{ height: '200px' }}>{bodyCanvases[selectedBody]}</div>
        <div style={{ height: '200px' }}>{legsCanvases[selectedLegs]}</div> */}
      </div>
    </div>
  );
};

export default ClothesEditor;
