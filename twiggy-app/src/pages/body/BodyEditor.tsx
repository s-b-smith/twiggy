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

interface BodyIndices {
  head: number;
  body: number;
  legs: number;
}
// const bodyIndices: BodyIndices = {
//   head: 0,
//   body: 0,
//   legs: 0
// };

interface BodyEditorProps {
  bodyIndices: BodyIndices;
  setBodyIndices: React.Dispatch<React.SetStateAction<BodyIndices>>;
}
// { bodyIndices, setBodyIndices }: BodyEditorProps
const BodyEditor = ({ bodyIndices, setBodyIndices }: BodyEditorProps) => {
  const isEditorActive = useIsEditorActive(Editor.Body);
  const nextHeadRef = useRef<(() => void) | null>(null);
  const prevHeadRef = useRef<(() => void) | null>(null);
  const nextBodyRef = useRef<(() => void) | null>(null);
  const prevBodyRef = useRef<(() => void) | null>(null);
  const nextLegsRef = useRef<(() => void) | null>(null);
  const prevLegsRef = useRef<(() => void) | null>(null);
  // const [bodyIndicesState, setBodyIndicesState] = useState(bodyIndices);
  // const [headIndex, setHeadIndex] = useState(bodyIndices['head']);
  // const [bodyIndex, setBodyIndex] = useState(bodyIndices['body']);
  // const [legsIndex, setLegsIndex] = useState(bodyIndices['legs']);
  // const [refresh, setRefresh] = useState(false);
  // const headIndex = useMemo(() => bodyIndices['head'], [bodyIndices]);
  // const bodyIndex = bodyIndices['body'];
  // const legsIndex = bodyIndices['legs'];

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

  // const handleChange = (isNext: boolean, now: number | undefined, bodyIndex: keyof BodyIndices) => {
  //   if (now === undefined) {
  //     return;
  //   }

  //   if (now === 0) {
  //     bodyIndices[bodyIndex] = 0;
  //   } else {
  //     if (isNext) {
  //       bodyIndices[bodyIndex]++;
  //     } else {
  //       bodyIndices[bodyIndex]--;
  //     }
  //   }
  // };

  const handleChange = (isNext: boolean, bodyIndex: keyof BodyIndices) => {
    let total;
    // let setter;
    switch (bodyIndex) {
      case 'head':
        total = headCanvases.length;
        // setter = setHeadIndex;
        break;
      case 'body':
        total = bodyCanvases.length;
        // setter = setBodyIndex;
        break;
      case 'legs':
        total = legsCanvases.length;
        // setter = setLegsIndex;
        break;
    }
    const currentIndex = bodyIndices[bodyIndex];
    const newIndex = isNext ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= total) {
      setBodyIndices({ ...bodyIndices, [bodyIndex]: 0 });
      // bodyIndices[bodyIndex] = 0;
      // setter(0);
    } else if (newIndex < 0) {
      setBodyIndices({ ...bodyIndices, [bodyIndex]: total });
      // bodyIndices[bodyIndex] = total - 1;
      // setter(total - 1);
    } else {
      setBodyIndices({ ...bodyIndices, [bodyIndex]: newIndex });
      // bodyIndices[bodyIndex] = newIndex;
      // setter(newIndex);
    }

    // setBodyIndicesState(bodyIndices);
  };

  // const headNextButton = <NextNavButton onClick={() => handleChange(true, 'head')} />;
  // const bodyNextButton = <NextNavButton onClick={() => handleChange(true, 'body')} />;
  // const legsNextButton = <NextNavButton onClick={() => handleChange(true, 'legs')} />;
  // const headPrevButton = <PrevNavButton onClick={() => handleChange(false, 'head')} />;
  // const bodyPrevButton = <PrevNavButton onClick={() => handleChange(false, 'body')} />;
  // const legsPrevButton = <PrevNavButton onClick={() => handleChange(false, 'legs')} />;

  // TODO: Double check if this css class is necessary after converting other carousels to controlled
  return (
    <div className="overlay-component">
      {/* <TwiggyCarousel
            // index={stepsAwayFromStart['head']}
            nextButton={headNextButton}
            prevButton={headPrevButton}
          >
            {headCanvases}
          </TwiggyCarousel>
          <TwiggyCarousel nextButton={bodyNextButton} prevButton={bodyPrevButton}>
            {bodyCanvases}
          </TwiggyCarousel>
          <TwiggyCarousel nextButton={legsNextButton} prevButton={legsPrevButton}>
            {legsCanvases}
          </TwiggyCarousel> */}
      <div className="overlay-container" style={{ height: '200px' }}>
        <div className="overlay-component" style={{ zIndex: 0 }}>
          <TwiggyCarousel
            isEnabled={isEditorActive}
            // index={bodyIndices['head']}
            // onNextClick={() => prevRef.current?.()}
            // onPrevClick={() => nextRef.current?.()}
            prevRef={prevHeadRef}
            nextRef={nextHeadRef}
          >
            {headCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component">
          <CarouselNavArrows
            prevOnClick={() => {
              // handleChange(false, 'head');
              prevHeadRef.current?.();
            }}
            nextOnClick={() => {
              // handleChange(true, 'head');
              nextHeadRef.current?.();
            }}
          />
        </div>
      </div>
      <div className="overlay-container" style={{ height: '200px' }}>
        <div className="overlay-component" style={{ zIndex: 0 }}>
          <TwiggyCarousel
            isEnabled={isEditorActive}
            // index={bodyIndices['head']}
            // onNextClick={() => prevRef.current?.()}
            // onPrevClick={() => nextRef.current?.()}
            prevRef={prevBodyRef}
            nextRef={nextBodyRef}
          >
            {bodyCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component">
          <CarouselNavArrows
            prevOnClick={() => {
              // handleChange(false, 'body');
              prevBodyRef.current?.();
            }}
            nextOnClick={() => {
              // handleChange(true, 'body');
              nextBodyRef.current?.();
            }}
          />
        </div>
      </div>
      <div className="overlay-container" style={{ height: '200px' }}>
        <div className="overlay-component" style={{ zIndex: 0 }}>
          <TwiggyCarousel
            isEnabled={isEditorActive}
            // index={bodyIndices['head']}
            // onNextClick={() => prevRef.current?.()}
            // onPrevClick={() => nextRef.current?.()}
            prevRef={prevLegsRef}
            nextRef={nextLegsRef}
          >
            {legsCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component">
          <CarouselNavArrows
            prevOnClick={() => {
              // handleChange(false, 'legs');
              prevLegsRef.current?.();
            }}
            nextOnClick={() => {
              // handleChange(true, 'legs');
              nextLegsRef.current?.();
            }}
          />
        </div>
      </div>
      {/* <TwiggyCarousel
        isEnabled={isEditorActive}
        index={bodyIndices['body']}
        onNextClick={() => handleChange(true, 'body')}
        onPrevClick={() => handleChange(false, 'body')}
      >
        {bodyCanvases}
      </TwiggyCarousel>
      <TwiggyCarousel
        isEnabled={isEditorActive}
        index={bodyIndices['legs']}
        onNextClick={() => handleChange(true, 'legs')}
        onPrevClick={() => handleChange(false, 'legs')}
      >
        {legsCanvases}
      </TwiggyCarousel> */}
      {/* {!isEditorActive && (
        <div className="canvas-overlay">
          <StaticCanvasWrapper>{headCanvases[bodyIndices['head']]}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{bodyCanvases[0]}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{legsCanvases[0]}</StaticCanvasWrapper>
        </div>
      )} */}
    </div>
  );
};

{
  /* <div className="canvas-overlay">
          <StaticCanvasWrapper>{headCanvases[bodyIndices['head']]}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{bodyCanvases[0]}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{legsCanvases[0]}</StaticCanvasWrapper>
        </div> */
}
export default BodyEditor;
