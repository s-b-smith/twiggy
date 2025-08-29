import { useEffect, useMemo, useRef, useState } from 'react';

const ERROR_MESSAGE = 'Something went wrong loading image:';

type ItemStatus = 'loading' | 'loaded' | 'error';
type LoadedImage = {
  src: string;
  img: HTMLImageElement | undefined;
  status: ItemStatus;
  error?: string | null;
};
interface UseImagesResult {
  images: LoadedImage[];
  allReady: boolean;
  readyCount: number;
  errorCount: number;
}
// TODO: Review this
export const useImages = (urls: string[]): UseImagesResult => {
  // Stable key so the effect only restarts when the *content* of urls changes.
  const urlsKey = useMemo(() => JSON.stringify([...urls].sort()), [urls]);

  const [images, setImages] = useState<LoadedImage[]>(() =>
    urls.map(src => ({ src, img: undefined, status: 'loading' as const }))
  );

  useEffect(() => {
    // reset state for new set of URLs
    setImages(urls.map(src => ({ src, img: undefined, status: 'loading' })));

    let cancelled = false;
    const handlers: Array<{
      img: HTMLImageElement;
      onLoad: () => void;
      onError: () => void;
    }> = [];

    urls.forEach(src => {
      const img = new Image();

      const onLoad = () => {
        if (cancelled) return;
        setImages(prev =>
          prev.map(it => (it.src === src ? { ...it, img, status: 'loaded', error: null } : it))
        );
      };

      const onError = () => {
        if (cancelled) return;
        setImages(prev =>
          prev.map(it =>
            it.src === src ? { ...it, img: undefined, status: 'error', error: 'load error' } : it
          )
        );
      };

      img.addEventListener('load', onLoad);
      img.addEventListener('error', onError);
      img.src = src;

      handlers.push({ img, onLoad, onError });
    });

    return () => {
      cancelled = true;
      handlers.forEach(({ img, onLoad, onError }) => {
        img.removeEventListener('load', onLoad);
        img.removeEventListener('error', onError);
      });
    };
  }, [urlsKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const allReady =
    images.length > 0 && images.every(it => it.status === 'loaded' && it.img !== null);

  // Optional: expose counts for progress UI
  const readyCount = images.filter(it => it.status === 'loaded').length;
  const errorCount = images.filter(it => it.status === 'error').length;

  return { images, allReady, readyCount, errorCount };
};

export interface UseImageProps {
  src: string;
  name: string;
}
export const useImage = (props: UseImageProps): HTMLImageElement | undefined => {
  const { src, name } = props;
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      return;
    }

    let image = imageRef.current;

    const needToCreateImage = !image || image.src !== src;
    if (needToCreateImage) {
      image = new Image();
      image.onload = () => {
        setIsImageLoaded(true);
      };
      image.onerror = () => console.error(ERROR_MESSAGE, name);

      imageRef.current = image;
      image.src = src;
    }
  }, [src, name]);

  return imageRef.current && isImageLoaded ? imageRef.current : undefined;
};
