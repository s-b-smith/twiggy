import assetUrls from 'assets/assetUrls';
import { drawImage } from 'canvas/images';
import Canvas from 'components/Canvas';
import CarouselNavArrows from 'components/CarouselNavArrows';
import TwiggyCarousel from 'components/TwiggyCarousel';
import { Editor } from 'constants/app';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import { useImages } from 'hooks/imageHooks';
import React, { useMemo, useRef } from 'react';
import 'styles/overlay.css';

// TODO: Work on loading state (for all menu items). Check into doing 1 context for URLs
const ClothesEditor = () => {
  const isEditorActive = useIsEditorActive(Editor.Clothes);
  const nextHeadClickRef = useRef<(() => void) | null>(null);
  const prevHeadClickRef = useRef<(() => void) | null>(null);
  const nextBodyClickRef = useRef<(() => void) | null>(null);
  const prevBodyClickRef = useRef<(() => void) | null>(null);
  const nextLegsClickRef = useRef<(() => void) | null>(null);
  const prevLegsClickRef = useRef<(() => void) | null>(null);
  const nextShoesClickRef = useRef<(() => void) | null>(null);
  const prevShoesClickRef = useRef<(() => void) | null>(null);

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

  // TODO: Cleanup these wrapper divs
  return (
    <div className="overlay-component">
      <div className="overlay-container" style={{ height: '200px' }}>
        <div className="overlay-component" style={{ zIndex: 2 }}>
          <TwiggyCarousel prevRef={prevHeadClickRef} nextRef={nextHeadClickRef}>
            {headCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component" style={{ marginTop: '-60px' }}>
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
        <div className="overlay-component" style={{ zIndex: 2 }}>
          <TwiggyCarousel prevRef={prevBodyClickRef} nextRef={nextBodyClickRef} height="175px">
            {bodyCanvases}
          </TwiggyCarousel>
        </div>
        <div className="overlay-component" style={{ marginTop: '-60px' }}>
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
      <div className="overlay-container" style={{ height: '230px' }}>
        <div className="overlay-container" style={{ height: '160px' }}>
          <div className="overlay-component" style={{ zIndex: 3 }}>
            <TwiggyCarousel prevRef={prevLegsClickRef} nextRef={nextLegsClickRef} height="160px">
              {legsCanvases}
            </TwiggyCarousel>
          </div>
          <div className="overlay-component" style={{ marginTop: '-60px' }}>
            <CarouselNavArrows
              isEnabled={isEditorActive}
              prevOnClick={() => {
                prevLegsClickRef.current?.();
              }}
              nextOnClick={() => {
                nextLegsClickRef.current?.();
              }}
              height="160px"
              marginBottom="20px"
            />
          </div>
        </div>
        <div className="overlay-container" style={{ height: '120px', marginTop: '-60px' }}>
          <div className="overlay-component" style={{ zIndex: 2 }}>
            <TwiggyCarousel
              prevRef={prevShoesClickRef}
              nextRef={nextShoesClickRef}
              height={'120px'}
            >
              {shoesCanvases}
            </TwiggyCarousel>
          </div>
          <div className="overlay-component" style={{ overflowY: 'clip' }}>
            <CarouselNavArrows
              isEnabled={isEditorActive}
              prevOnClick={() => {
                prevShoesClickRef.current?.();
              }}
              nextOnClick={() => {
                nextShoesClickRef.current?.();
              }}
              height={'120px'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothesEditor;
