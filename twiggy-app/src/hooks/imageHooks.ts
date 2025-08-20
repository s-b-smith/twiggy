import { useEffect, useRef, useState } from 'react';

const ERROR_MESSAGE = 'Something went wrong loading image:';

interface UseImageProps {
  src: string;
  name: string;
}
const useImage = (props: UseImageProps): HTMLImageElement | false => {
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

  return imageRef.current && isImageLoaded ? imageRef.current : false;
};

// TODO: Make this looped, so it can be dynamic
interface ClothesImages {
  blackTopHat: HTMLImageElement | false;
  blackFedora: HTMLImageElement | false;
  blackBowlerHat: HTMLImageElement | false;
  steampunkHat: HTMLImageElement | false;
  cowboyHat: HTMLImageElement | false;
  baseballCap: HTMLImageElement | false;
  pirateHat: HTMLImageElement | false;
}
export const useClothesImages = (): ClothesImages => {
  const blackTopHat = useImage({
    src: '/images/black_top_hat.png',
    name: 'black_top_hat'
  });
  const blackFedora = useImage({
    src: '/images/black_fedora.png',
    name: 'black_fedora'
  });
  const blackBowlerHat = useImage({
    src: '/images/black_bowler_hat.png',
    name: 'black_bowler_hat'
  });
  const steampunkHat = useImage({
    src: '/images/steampunk_hat.png',
    name: 'steampunk_hat'
  });
  const cowboyHat = useImage({
    src: '/images/cowboy_hat.png',
    name: 'cowboy_hat'
  });
  const baseballCap = useImage({
    src: '/images/baseball_cap.png',
    name: 'baseball_cap'
  });
  const pirateHat = useImage({
    src: '/images/pirate_hat.png',
    name: 'pirate_hat'
  });

  return {
    blackTopHat,
    blackFedora,
    blackBowlerHat,
    steampunkHat,
    cowboyHat,
    baseballCap,
    pirateHat
  };
};
