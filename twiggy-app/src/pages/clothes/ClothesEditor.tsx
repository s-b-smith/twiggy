import assetUrls from 'assets/assetUrls';
import { drawImage } from 'canvas/images';
import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import { Editor } from 'constants/app';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import { useImages } from 'hooks/imageHooks';
import React, { useMemo } from 'react';
import 'styles/overlay.css';

interface ClothesIndices {
  head: number;
  body: number;
  legs: number;
  shoes: number;
}
const clothesIndices: ClothesIndices = {
  head: 0,
  body: 0,
  legs: 0,
  shoes: 0
};

// TODO: Work on loading state (for all menu items). Check into doing 1 context for URLs
const ClothesEditor = () => {
  const isEditorActive = useIsEditorActive(Editor.Clothes);

  const headImages = useImages(assetUrls.clothes.heads);
  const bodyImages = useImages(assetUrls.clothes.bodies);
  const legsImages = useImages(assetUrls.clothes.legs);
  const shoesImages = useImages(assetUrls.clothes.shoes);

  const headCanvases = useMemo(() => {
    if (!headImages.allReady) {
      return [];
    }

    return [
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
    ];
  }, [isEditorActive, headImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps
  const bodyCanvases = useMemo(() => {
    if (!bodyImages.allReady) {
      return [];
    }

    return [
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
    ];
  }, [isEditorActive, bodyImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps
  const legsCanvases = useMemo(() => {
    if (!legsImages.allReady) {
      return [];
    }

    return [
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
    ];
  }, [isEditorActive, legsImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps
  const shoesCanvases = useMemo(() => {
    if (!shoesImages.allReady) {
      return [];
    }

    return [
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
    ];
  }, [isEditorActive, shoesImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (
    isNext: boolean,
    now: number | undefined,
    clothesIndex: keyof ClothesIndices
  ) => {
    if (now === undefined) {
      return;
    }

    if (now === 0) {
      clothesIndices[clothesIndex] = 0;
    } else {
      if (isNext) {
        clothesIndices[clothesIndex]++;
      } else {
        clothesIndices[clothesIndex]--;
      }
    }
  };

  // TODO: For some reason the shoes arrows disappeared
  // z index is 2
  return (
    <div className="overlay-component" style={{ zIndex: 2 }}>
      <TwiggyCarousel
        isEnabled={isEditorActive}
        index={clothesIndices['head']}
        onNextClick={(now?: number) => handleChange(true, now, 'head')}
        onPrevClick={(now?: number) => handleChange(false, now, 'head')}
      >
        {headCanvases}
      </TwiggyCarousel>
      <TwiggyCarousel
        isEnabled={isEditorActive}
        index={clothesIndices['body']}
        onNextClick={(now?: number) => handleChange(true, now, 'body')}
        onPrevClick={(now?: number) => handleChange(false, now, 'body')}
      >
        {bodyCanvases}
      </TwiggyCarousel>
      <div className="overlay-container">
        <div className="overlay-component" style={{ zIndex: 3 }}>
          <TwiggyCarousel
            isEnabled={isEditorActive}
            index={clothesIndices['legs']}
            onNextClick={(now?: number) => handleChange(true, now, 'legs')}
            onPrevClick={(now?: number) => handleChange(false, now, 'legs')}
            height={'160px'}
            navButtonPaddingBottom="100px"
          >
            {legsCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component" style={{ marginTop: '100px' }}>
          <TwiggyCarousel
            isEnabled={isEditorActive}
            index={clothesIndices['shoes']}
            onNextClick={(now?: number) => handleChange(true, now, 'shoes')}
            onPrevClick={(now?: number) => handleChange(false, now, 'shoes')}
            height={'120px'}
            navButtonPaddingTop="50px"
          >
            {shoesCanvases}
          </TwiggyCarousel>
        </div>
      </div>
    </div>
  );
};

export default ClothesEditor;
