import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import { Editors, useIsEditorActive } from 'hooks/activeEditorHooks';
import '../../styles/overlay.css';
import { useState } from 'react';
import { drawImage } from 'canvas/clothes/clothes';
import { useClothesImages } from 'hooks/imageHooks';

const ClothesEditor = () => {
  const clothesImages = useClothesImages();
  const isEditorActive = useIsEditorActive(Editors.Clothes);
  const [selectedHead, setSelectedHead] = useState(0);
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedLegs, setSelectedLegs] = useState(0);
  if (!clothesImages) {
    return;
  }

  const headCanvasStyles = { width: '150px', height: '75px' };
  const headCanvases = [
    <></>,
    ...Object.entries(clothesImages.heads).map(([key, head]) => {
      return (
        <Canvas key={`drawHead${key}`} draw={drawImage} image={head} style={headCanvasStyles} />
      );
    })
  ];
  const bodyCanvasStyles = { width: '300px' };
  const bodyCanvases = [
    <></>,
    ...Object.entries(clothesImages.bodies).map(([key, body]) => {
      return (
        <Canvas key={`drawBody${key}`} draw={drawImage} image={body} style={bodyCanvasStyles} />
      );
    })
  ];
  const legsCanvasStyles = { width: '300px', verticalAlign: 'start' } as React.CSSProperties;
  const legsCanvases = [
    <></>,
    ...Object.entries(clothesImages.legs).map(([key, legsImage]) => {
      return (
        <Canvas
          key={`drawBody${key}`}
          draw={drawImage}
          image={legsImage}
          style={legsCanvasStyles}
        />
      );
    })
  ];

  return (
    <div className="overlay-component" style={{ zIndex: 2 }}>
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
        <div style={{ height: '200px' }}>{headCanvases[selectedHead]}</div>
        <div style={{ height: '200px' }}>{bodyCanvases[selectedBody]}</div>
        <div style={{ height: '200px' }}>{legsCanvases[selectedLegs]}</div>
      </div>
    </div>
  );
};

export default ClothesEditor;
