import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import { useMemo } from 'react';
import { Editor } from 'constants/app';
import StaticCanvasWrapper from 'pages/StaticCanvasWrapper';
import { useImages } from 'hooks/imageHooks';
import backgroundUrls from 'assets/backgroundUrls';
import React from 'react';
import { rotateArray } from 'utils/arrayUtils';
import { drawImage } from 'canvas/images';

let stepsAwayFromStart = 0;

const BackgroundEditor = () => {
  const isEditorActive = useIsEditorActive(Editor.Background);

  const backgroundImages = useImages(backgroundUrls);

  const backgroundCanvases = useMemo(() => {
    if (!backgroundImages.allReady) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawBackgroundEmpty'}></React.Fragment>,
        ...Object.entries(backgroundImages.images).map(([key, background]) => {
          return (
            <Canvas
              key={`drawBackground${key}`}
              draw={drawImage}
              image={background.img}
              style={{ display: 'block', width: '100%', height: '100%' }} // width: 84.8em
            />
          );
        })
      ],
      stepsAwayFromStart
    );
  }, [isEditorActive, backgroundImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (isNext: boolean, now: number | undefined) => {
    if (now === undefined) {
      return;
    }

    if (now === 0) {
      stepsAwayFromStart = 0;
    } else {
      if (isNext) {
        stepsAwayFromStart++;
      } else {
        stepsAwayFromStart--;
      }
    }
  };

  return (
    <div className="overlay-component" style={{ zIndex: 0 }}>
      {isEditorActive ? (
        <TwiggyCarousel
          next={(now?: number) => handleChange(true, now)}
          prev={(now?: number) => handleChange(false, now)}
          height={'40.65em'} // 650px
          marginTop={'-0.7em'}
        >
          {backgroundCanvases}
        </TwiggyCarousel>
      ) : (
        <StaticCanvasWrapper style={{ height: '40.65em', marginTop: '-0.7em' }}>
          {backgroundCanvases[0]}
        </StaticCanvasWrapper>
      )}
    </div>
  );
};

export default BackgroundEditor;
