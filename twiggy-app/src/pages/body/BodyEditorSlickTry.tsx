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
import { drawCircleTorso, drawOvalTorso, drawStickTorso } from 'canvas/shapes/torsos';
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
        {
          id: 'drawCircleHead',
          content: <HeadCanvas key={'drawCircleHead'} draw={drawCircleHead} />
        },
        {
          id: 'drawOvalVerticalHead',
          content: <HeadCanvas key={'drawOvalVerticalHead'} draw={drawOvalVerticalHead} />
        },
        {
          id: 'drawOvalHorizontalHead',
          content: <HeadCanvas key={'drawOvalHorizontalHead'} draw={drawOvalHorizontalHead} />
        },
        {
          id: 'drawSquareHead',
          content: <HeadCanvas key={'drawSquareHead'} draw={drawSquareHead} />
        },
        {
          id: 'drawHeadEmpty',
          content: <React.Fragment key={'drawHeadEmpty'}></React.Fragment>
        }
      ],
      stepsAwayFromStart.head
    );
  }, [isEditorActive]); // eslint-disable-line react-hooks/exhaustive-deps
  const bodyCanvases = useMemo(() => {
    return rotateArray(
      [
        { id: 'drawStickTorso', content: <Canvas key={'drawStickTorso'} draw={drawStickTorso} /> },
        { id: 'drawOvalTorso', content: <Canvas key={'drawOvalTorso'} draw={drawOvalTorso} /> },
        {
          id: 'drawCircleTorso',
          content: <Canvas key={'drawCircleTorso'} draw={drawCircleTorso} />
        }
        // <Canvas key={'drawTorso'} draw={drawTorso} />,
        // <Canvas key={'drawOvalTorsoNoArms'} draw={drawOvalTorsoNoArms} />,
        // <Canvas key={'drawCircleTorsoNoArms'} draw={drawCircleTorsoNoArms} />,
        // <React.Fragment key={'drawBodyEmpty'}></React.Fragment>
      ],
      stepsAwayFromStart.body
    );
  }, [isEditorActive]); // eslint-disable-line react-hooks/exhaustive-deps
  const legsCanvases = useMemo(() => {
    return rotateArray(
      [
        { id: 'drawStickLegs', content: <LegsCanvas key={'drawStickLegs'} draw={drawStickLegs} /> },
        { id: 'drawRoundLegs', content: <LegsCanvas key={'drawRoundLegs'} draw={drawRoundLegs} /> },
        {
          id: 'drawRoundSkinnyLegs',
          content: <LegsCanvas key={'drawRoundSkinnyLegs'} draw={drawRoundSkinnyLegs} />
        },
        {
          id: 'drawOneMiddleLeg',
          content: <LegsCanvas key={'drawOneMiddleLeg'} draw={drawOneMiddleLeg} />
        }
        // <LegsCanvas key={'drawRoundSkinnyLegs'} draw={drawRoundSkinnyLegs} />,
        // <LegsCanvas key={'drawOneMiddleLeg'} draw={drawOneMiddleLeg} />,
        // <React.Fragment key={'drawLegsEmpty'}></React.Fragment>
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
            onNextClick={() => {}}
            onPrevClick={() => {}}
            next={(now?: number) => handleChange(true, now, 'head')}
            prev={(now?: number) => handleChange(false, now, 'head')}
          >
            {headCanvases.map(canvas => canvas.content)}
          </TwiggyCarousel>
          {/* <SlickCarousel /> */}
          {/* <EmblaCarousel slides={legsCanvases} /> */}

          <TwiggyCarousel
            onNextClick={() => {}}
            onPrevClick={() => {}}
            next={(now?: number) => handleChange(true, now, 'body')}
            prev={(now?: number) => handleChange(false, now, 'body')}
          >
            {bodyCanvases.map(canvas => canvas.content)}
          </TwiggyCarousel>
          <TwiggyCarousel
            onNextClick={() => {}}
            onPrevClick={() => {}}
            next={(now?: number) => handleChange(true, now, 'legs')}
            prev={(now?: number) => handleChange(false, now, 'legs')}
          >
            {legsCanvases.map(canvas => canvas.content)}
          </TwiggyCarousel>
        </div>
      ) : (
        <div className="canvas-overlay">
          <StaticCanvasWrapper>{headCanvases[0]['content']}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{bodyCanvases[0]['content']}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{legsCanvases[0]['content']}</StaticCanvasWrapper>
        </div>
      )}
    </div>
  );
};

export default BodyEditor;
