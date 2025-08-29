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
import TwiggyCarousel from 'components/TwiggyCarousel';
import { Editor } from 'constants/app';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import StaticCanvasWrapper from 'pages/StaticCanvasWrapper';
import React, { useMemo } from 'react';
import 'styles/overlay.css';
import { rotateArray } from 'utils/arrayUtils';

const HeadCanvas = (canvasProps: CanvasProps & { key: React.Key }) => {
  return <Canvas style={{ height: '80%', marginTop: '40px' }} {...canvasProps} />;
};
const LegsCanvas = (canvasProps: CanvasProps & { key: React.Key }) => {
  return <Canvas style={{ height: '80%', marginBottom: '40px' }} {...canvasProps} />;
};

interface BodyStepsAwayFromStart {
  head: number;
  body: number;
  legs: number;
}
const stepsAwayFromStart: BodyStepsAwayFromStart = {
  head: 0,
  body: 0,
  legs: 0
};

const BodyEditor = () => {
  const isEditorActive = useIsEditorActive(Editor.Body);

  const headCanvases = useMemo(() => {
    return rotateArray(
      [
        <HeadCanvas key={'drawCircleHead'} draw={drawCircleHead} />,
        <HeadCanvas key={'drawOvalVerticalHead'} draw={drawOvalVerticalHead} />,
        <HeadCanvas key={'drawOvalHorizontalHead'} draw={drawOvalHorizontalHead} />,
        <HeadCanvas key={'drawSquareHead'} draw={drawSquareHead} />,
        <React.Fragment key={'drawHeadEmpty'}></React.Fragment>
      ],
      stepsAwayFromStart.head
    );
  }, [isEditorActive]); // eslint-disable-line react-hooks/exhaustive-deps
  const bodyCanvases = useMemo(() => {
    return rotateArray(
      [
        <Canvas key={'drawStickTorso'} draw={drawStickTorso} />,
        <Canvas key={'drawOvalTorso'} draw={drawOvalTorso} />,
        <Canvas key={'drawCircleTorso'} draw={drawCircleTorso} />,
        <Canvas key={'drawTorso'} draw={drawTorso} />,
        <Canvas key={'drawOvalTorsoNoArms'} draw={drawOvalTorsoNoArms} />,
        <Canvas key={'drawCircleTorsoNoArms'} draw={drawCircleTorsoNoArms} />,
        <React.Fragment key={'drawBodyEmpty'}></React.Fragment>
      ],
      stepsAwayFromStart.body
    );
  }, [isEditorActive]); // eslint-disable-line react-hooks/exhaustive-deps
  const legsCanvases = useMemo(() => {
    return rotateArray(
      [
        <LegsCanvas key={'drawStickLegs'} draw={drawStickLegs} />,
        <LegsCanvas key={'drawRoundLegs'} draw={drawRoundLegs} />,
        <LegsCanvas key={'drawRoundSkinnyLegs'} draw={drawRoundSkinnyLegs} />,
        <LegsCanvas key={'drawOneMiddleLeg'} draw={drawOneMiddleLeg} />,
        <React.Fragment key={'drawLegsEmpty'}></React.Fragment>
      ],
      stepsAwayFromStart.legs
    );
  }, [isEditorActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (
    isNext: boolean,
    now: number | undefined,
    stepsAwayFromStartKey: keyof BodyStepsAwayFromStart
  ) => {
    if (now === undefined) {
      return;
    }

    if (now === 0) {
      stepsAwayFromStart[stepsAwayFromStartKey] = 0;
    } else {
      if (isNext) {
        stepsAwayFromStart[stepsAwayFromStartKey]++;
      } else {
        stepsAwayFromStart[stepsAwayFromStartKey]--;
      }
    }
  };

  return (
    <div className="overlay-component" style={{ zIndex: 1 }}>
      {isEditorActive ? (
        <div>
          <TwiggyCarousel
            next={(now?: number) => handleChange(true, now, 'head')}
            prev={(now?: number) => handleChange(false, now, 'head')}
          >
            {headCanvases}
          </TwiggyCarousel>
          <TwiggyCarousel
            next={(now?: number) => handleChange(true, now, 'body')}
            prev={(now?: number) => handleChange(false, now, 'body')}
          >
            {bodyCanvases}
          </TwiggyCarousel>
          <TwiggyCarousel
            next={(now?: number) => handleChange(true, now, 'legs')}
            prev={(now?: number) => handleChange(false, now, 'legs')}
          >
            {legsCanvases}
          </TwiggyCarousel>
        </div>
      ) : (
        <div className="canvas-overlay">
          <StaticCanvasWrapper>{headCanvases[0]}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{bodyCanvases[0]}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{legsCanvases[0]}</StaticCanvasWrapper>
        </div>
      )}
    </div>
  );
};

export default BodyEditor;
