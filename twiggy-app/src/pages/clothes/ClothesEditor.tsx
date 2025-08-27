import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import '../../styles/overlay.css';
import { useMemo } from 'react';
import { drawImage } from 'canvas/clothes/clothes';
import { useClothesImages } from 'hooks/imageHooks';
import StaticCanvasWrapper from 'pages/StaticCanvasWrapper';
import React from 'react';
import { Editor } from 'constants/app';
import { rotateArray } from 'utils/arrayUtils';

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

// TODO: Work on initial load time
const ClothesEditor = () => {
  const isEditorActive = useIsEditorActive(Editor.Clothes);
  const clothesImages = useClothesImages();

  const headCanvasStyles = { width: '150px', height: '75px' };
  const headCanvases = useMemo(() => {
    if (!clothesImages) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawClothesHeadEmpty'}></React.Fragment>,
        ...Object.entries(clothesImages.heads).map(([key, head]) => {
          return (
            <Canvas
              key={`drawClothesHead${key}`}
              draw={drawImage}
              image={head}
              style={headCanvasStyles}
            />
          );
        })
      ],
      stepsAwayFromStart.head
    );
  }, [isEditorActive, clothesImages]); // eslint-disable-line
  const bodyCanvasStyles = { width: '300px' };
  const bodyCanvases = useMemo(() => {
    if (!clothesImages) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawClothesBodyEmpty'}></React.Fragment>,
        ...Object.entries(clothesImages.bodies).map(([key, body]) => {
          return (
            <Canvas
              key={`drawClothesBody${key}`}
              draw={drawImage}
              image={body}
              style={bodyCanvasStyles}
            />
          );
        })
      ],
      stepsAwayFromStart.body
    );
  }, [isEditorActive, clothesImages]); // eslint-disable-line
  const legsCanvasStyles = { width: '300px' };
  const legsCanvases = useMemo(() => {
    if (!clothesImages) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawClothesLegsEmpty'}></React.Fragment>,
        ...Object.entries(clothesImages.legs).map(([key, legsImage]) => {
          return (
            <Canvas
              key={`drawClothesLegs${key}`}
              draw={drawImage}
              image={legsImage}
              style={legsCanvasStyles}
            />
          );
        })
      ],
      stepsAwayFromStart.legs
    );
  }, [isEditorActive, clothesImages]); // eslint-disable-line
  const shoesCanvasStyles = { width: '300px' };
  const shoesCanvases = useMemo(() => {
    if (!clothesImages) {
      return [];
    }

    return rotateArray(
      [
        <React.Fragment key={'drawClothesShoesEmpty'}></React.Fragment>,
        ...Object.entries(clothesImages.shoes).map(([key, shoesImage]) => {
          return (
            <Canvas
              key={`drawClothesShoes${key}`}
              draw={drawImage}
              image={shoesImage}
              style={shoesCanvasStyles}
            />
          );
        })
      ],
      stepsAwayFromStart.shoes
    );
  }, [isEditorActive, clothesImages]); // eslint-disable-line

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

  if (!clothesImages) {
    return;
  }
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
          <StaticCanvasWrapper height={'160px'} zIndex={3}>
            {legsCanvases[0]}
          </StaticCanvasWrapper>
          <StaticCanvasWrapper height={'120px'} marginTop={'-60px'}>
            {shoesCanvases[0]}
          </StaticCanvasWrapper>
        </div>
      )}
    </div>
  );
};

export default ClothesEditor;
