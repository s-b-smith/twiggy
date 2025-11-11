import assetUrls from 'assets/assetUrls';
import { drawImage } from 'canvas/images';
import Canvas from 'components/Canvas';
import TwiggyCarousel from 'components/TwiggyCarousel';
import { Editor } from 'constants/app';
import { useIsEditorActive } from 'hooks/activeEditorHooks';
import { useImages } from 'hooks/imageHooks';
import React, { useMemo } from 'react';

let backgroundIndex = 0;

const BackgroundEditor = () => {
  const isEditorActive = useIsEditorActive(Editor.Background);

  const backgroundImages = useImages(assetUrls.backgrounds);

  const backgroundCanvases = useMemo(() => {
    if (!backgroundImages.allReady) {
      return [];
    }

    return [
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
    ];
  }, [isEditorActive, backgroundImages.allReady]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (isNext: boolean, now: number | undefined) => {
    if (now === undefined) {
      return;
    }

    if (now === 0) {
      backgroundIndex = 0;
    } else {
      if (isNext) {
        backgroundIndex++;
      } else {
        backgroundIndex--;
      }
    }
  };

  return (
    <div className="overlay-component" style={{ zIndex: 0, overflowY: 'clip' }}>
      <TwiggyCarousel
        isEnabled={isEditorActive}
        index={backgroundIndex}
        onNextClick={(now?: number) => handleChange(true, now)}
        onPrevClick={(now?: number) => handleChange(false, now)}
        height={'40.65em'} // 650px
        marginTop={'-0.7em'}
      >
        {backgroundCanvases}
      </TwiggyCarousel>
    </div>
  );
};

export default BackgroundEditor;
