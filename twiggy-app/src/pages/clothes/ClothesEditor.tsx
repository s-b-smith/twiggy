import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import 'styles/overlay.css';
import { useMemo } from 'react';
import { drawImage } from 'canvas/images';
import StaticCanvasWrapper from 'pages/StaticCanvasWrapper';
import React from 'react';
import { Editor } from 'constants/app';
import { rotateArray } from 'utils/arrayUtils';
import { allClothesUrls } from 'assets/clothes/clothesUrls';
import { useImages } from 'hooks/imageHooks';

interface ClothesStepsAwayFromStart {
  head: number;
  body: number;
  legs: number;
  shoes: number;
}
const stepsAwayFromStart: ClothesStepsAwayFromStart = {
  head: 0,
  body: 0,
  legs: 0,
  shoes: 0
};

// TODO: Work on loading state (for all menu items)
const ClothesEditor = () => {
  const isEditorActive = useIsEditorActive(Editor.Clothes);

  const headImages = useImages(allClothesUrls.heads);
  const bodyImages = useImages(allClothesUrls.bodies);
  const legsImages = useImages(allClothesUrls.legs);
  const shoesImages = useImages(allClothesUrls.shoes);

  const headCanvases = useMemo(() => {
    if (!headImages.allReady) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawClothesHeadEmpty'}></React.Fragment>,
        ...Object.entries(headImages.images).map(([key, head]) => {
          return (
            <Canvas
              key={`drawClothesHead${key}`}
              draw={drawImage}
              image={head.img}
              style={{ width: '150px', height: '75px' }}
            />
          );
        })
      ],
      stepsAwayFromStart.head
    );
  }, [isEditorActive, headImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps
  const bodyCanvases = useMemo(() => {
    if (!bodyImages.allReady) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawClothesBodyEmpty'}></React.Fragment>,
        ...Object.entries(bodyImages.images).map(([key, body]) => {
          return (
            <Canvas
              key={`drawClothesBody${key}`}
              draw={drawImage}
              image={body.img}
              style={{ width: '300px' }}
            />
          );
        })
      ],
      stepsAwayFromStart.body
    );
  }, [isEditorActive, bodyImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps
  const legsCanvases = useMemo(() => {
    if (!legsImages.allReady) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawClothesLegsEmpty'}></React.Fragment>,
        ...Object.entries(legsImages.images).map(([key, legs]) => {
          return (
            <Canvas
              key={`drawClothesLegs${key}`}
              draw={drawImage}
              image={legs.img}
              style={{ width: '300px' }}
            />
          );
        })
      ],
      stepsAwayFromStart.legs
    );
  }, [isEditorActive, legsImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps
  const shoesCanvases = useMemo(() => {
    if (!shoesImages.allReady) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawClothesShoesEmpty'}></React.Fragment>,
        ...Object.entries(shoesImages.images).map(([key, shoes]) => {
          return (
            <Canvas
              key={`drawClothesShoes${key}`}
              draw={drawImage}
              image={shoes.img}
              style={{ width: '300px' }}
            />
          );
        })
      ],
      stepsAwayFromStart.shoes
    );
  }, [isEditorActive, shoesImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (
    isNext: boolean,
    now: number | undefined,
    stepsAwayFromStartKey: keyof ClothesStepsAwayFromStart
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
    <div className="overlay-component" style={{ zIndex: 2 }}>
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
          <div className="overlay-container">
            <div className="overlay-component" style={{ zIndex: 3 }}>
              <TwiggyCarousel
                next={(now?: number) => handleChange(true, now, 'legs')}
                prev={(now?: number) => handleChange(false, now, 'legs')}
                height={'160px'}
                navButtonPaddingBottom="100px"
              >
                {legsCanvases}
              </TwiggyCarousel>
            </div>
            <div className="overlay-component" style={{ marginTop: '100px' }}>
              <TwiggyCarousel
                next={(now?: number) => handleChange(true, now, 'shoes')}
                prev={(now?: number) => handleChange(false, now, 'shoes')}
                height={'120px'}
                navButtonPaddingTop="50px"
              >
                {shoesCanvases}
              </TwiggyCarousel>
            </div>
          </div>
        </div>
      ) : (
        <div className="canvas-overlay">
          <StaticCanvasWrapper>{headCanvases[0]}</StaticCanvasWrapper>
          <StaticCanvasWrapper>{bodyCanvases[0]}</StaticCanvasWrapper>
          <StaticCanvasWrapper style={{ height: '160px', zIndex: 3 }}>
            {legsCanvases[0]}
          </StaticCanvasWrapper>
          <StaticCanvasWrapper style={{ height: '120px', marginTop: '-60px' }}>
            {shoesCanvases[0]}
          </StaticCanvasWrapper>
        </div>
      )}
    </div>
  );
};

export default ClothesEditor;
