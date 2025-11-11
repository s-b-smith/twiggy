import {
  drawCircleHead,
  drawOvalHorizontalHead,
  drawOvalVerticalHead,
  drawSquareHead
} from 'canvas/shapes/heads';
import {
  drawOneMiddleLeg,
  drawRoundLegs,
  drawRoundSkinnyLegs,
  drawStickLegs
} from 'canvas/shapes/legs';
import {
  drawCircleTorso,
  drawCircleTorsoNoArms,
  drawOvalTorso,
  drawOvalTorsoNoArms,
  drawStickTorso,
  drawTorso
} from 'canvas/shapes/torsos';
import Canvas, { CanvasProps } from 'components/Canvas';
import CarouselNavArrows from 'components/CarouselNavArrows';
import TwiggyCarousel from 'components/TwiggyCarousel';
import { Editor } from 'constants/app';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import React, { useMemo, useRef } from 'react';
import 'styles/overlay.css';

const HeadCanvas = (canvasProps: CanvasProps & { key: React.Key }) => {
  return <Canvas style={{ height: '80%', marginTop: '40px' }} {...canvasProps} />;
};
const LegsCanvas = (canvasProps: CanvasProps & { key: React.Key }) => {
  return <Canvas style={{ height: '80%', marginBottom: '40px' }} {...canvasProps} />;
};

const BodyEditor = () => {
  const isEditorActive = useIsEditorActive(Editor.Body);
  const nextHeadClickRef = useRef<(() => void) | null>(null);
  const prevHeadClickRef = useRef<(() => void) | null>(null);
  const nextBodyClickRef = useRef<(() => void) | null>(null);
  const prevBodyClickRef = useRef<(() => void) | null>(null);
  const nextLegsClickRef = useRef<(() => void) | null>(null);
  const prevLegsClickRef = useRef<(() => void) | null>(null);

  const headCanvases = useMemo(() => {
    return [
      <HeadCanvas key={'drawCircleHead'} draw={drawCircleHead} />,
      <HeadCanvas key={'drawOvalVerticalHead'} draw={drawOvalVerticalHead} />,
      <HeadCanvas key={'drawOvalHorizontalHead'} draw={drawOvalHorizontalHead} />,
      <HeadCanvas key={'drawSquareHead'} draw={drawSquareHead} />,
      <React.Fragment key={'drawHeadEmpty'}></React.Fragment>
    ];
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const bodyCanvases = useMemo(() => {
    return [
      <Canvas key={'drawStickTorso'} draw={drawStickTorso} />,
      <Canvas key={'drawOvalTorso'} draw={drawOvalTorso} />,
      <Canvas key={'drawCircleTorso'} draw={drawCircleTorso} />,
      <Canvas key={'drawTorso'} draw={drawTorso} />,
      <Canvas key={'drawOvalTorsoNoArms'} draw={drawOvalTorsoNoArms} />,
      <Canvas key={'drawCircleTorsoNoArms'} draw={drawCircleTorsoNoArms} />,
      <React.Fragment key={'drawBodyEmpty'}></React.Fragment>
    ];
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const legsCanvases = useMemo(() => {
    return [
      <LegsCanvas key={'drawStickLegs'} draw={drawStickLegs} />,
      <LegsCanvas key={'drawRoundLegs'} draw={drawRoundLegs} />,
      <LegsCanvas key={'drawRoundSkinnyLegs'} draw={drawRoundSkinnyLegs} />,
      <LegsCanvas key={'drawOneMiddleLeg'} draw={drawOneMiddleLeg} />,
      <React.Fragment key={'drawLegsEmpty'}></React.Fragment>
    ];
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // TODO: Double check if this css class is necessary after converting other carousels to controlled
  // TODO: Wrapper component for each carousel
  return (
    <div className="overlay-component">
      <div className="overlay-container" style={{ height: '200px' }}>
        <div className="overlay-component" style={{ zIndex: 0 }}>
          <TwiggyCarousel prevRef={prevHeadClickRef} nextRef={nextHeadClickRef}>
            {headCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component">
          <CarouselNavArrows
            isEnabled={isEditorActive}
            prevOnClick={() => {
              prevHeadClickRef.current?.();
            }}
            nextOnClick={() => {
              nextHeadClickRef.current?.();
            }}
          />
        </div>
      </div>
      <div className="overlay-container" style={{ height: '175px' }}>
        <div className="overlay-component" style={{ zIndex: 0 }}>
          <TwiggyCarousel prevRef={prevBodyClickRef} nextRef={nextBodyClickRef} height="175px">
            {bodyCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component">
          <CarouselNavArrows
            isEnabled={isEditorActive}
            prevOnClick={() => {
              prevBodyClickRef.current?.();
            }}
            nextOnClick={() => {
              nextBodyClickRef.current?.();
            }}
          />
        </div>
      </div>
      <div className="overlay-container" style={{ height: '200px' }}>
        <div className="overlay-component" style={{ zIndex: 0 }}>
          <TwiggyCarousel prevRef={prevLegsClickRef} nextRef={nextLegsClickRef}>
            {legsCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component">
          <CarouselNavArrows
            isEnabled={isEditorActive}
            prevOnClick={() => {
              prevLegsClickRef.current?.();
            }}
            nextOnClick={() => {
              nextLegsClickRef.current?.();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyEditor;
