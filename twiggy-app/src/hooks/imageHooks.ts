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

// TODO: Put the images in folders, then loop them
interface ClothesImages {
  heads: HTMLImageElement[];
  bodies: HTMLImageElement[];
  legs: HTMLImageElement[];
  shoes: HTMLImageElement[];
}
export const useClothesImages = (): ClothesImages | false => {
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
  const blackTshirt = useImage({
    src: '/images/black_tshirt.png',
    name: 'black_tshirt'
  });
  const femaleWhiteTop = useImage({
    src: '/images/female_white_top.png',
    name: 'female_white_top'
  });
  const femaleRedTop = useImage({
    src: '/images/female_red_top.png',
    name: 'female_red_top'
  });
  const dressShirt = useImage({
    src: '/images/dress_shirt.png',
    name: 'dress_shirt'
  });
  const bluePolo = useImage({
    src: '/images/blue_polo.png',
    name: 'blue_polo'
  });
  const redTshirtPocket = useImage({
    src: '/images/red_tshirt_with_pocket.png',
    name: 'red_tshirt_with_pocket'
  });
  const trousers = useImage({
    src: '/images/trousers.png',
    name: 'trousers'
  });
  const whitePants = useImage({
    src: '/images/white_pants.png',
    name: 'white_pants'
  });
  const sweatPants = useImage({
    src: '/images/sweat_pants.png',
    name: 'sweat_pants'
  });
  const stripedPants = useImage({
    src: '/images/striped_pants.png',
    name: 'striped_pants'
  });
  const blueShorts = useImage({
    src: '/images/blue_shorts.png',
    name: 'blue_shorts'
  });
  const beachShorts = useImage({
    src: '/images/beach_shorts.png',
    name: 'beach_shorts'
  });
  const pinkSkirt = useImage({
    src: '/images/pink_skirt.png',
    name: 'pink_skirt'
  });
  const redSkirt = useImage({
    src: '/images/red_skirt.png',
    name: 'red_skirt'
  });
  const yellowSkirt = useImage({
    src: '/images/yellow_skirt.png',
    name: 'yellow_skirt'
  });
  const blackSneakers = useImage({
    src: '/images/black_sneakers.png',
    name: 'black_sneakers'
  });
  const brownDressShoes = useImage({
    src: '/images/brown_dress_shoes.png',
    name: 'brown_dress_shoes'
  });
  const whiteTennisShoes = useImage({
    src: '/images/white_tennis_shoes.png',
    name: 'white_tennis_shoes'
  });
  const brownFlats = useImage({
    src: '/images/brown_flats.png',
    name: 'brown_flats'
  });
  const flipFlops = useImage({
    src: '/images/flip_flops.png',
    name: 'flip_flops'
  });
  const punkBoots = useImage({
    src: '/images/punk_boots.png',
    name: 'punk_boots'
  });
  const clownShoes = useImage({
    src: '/images/clown_shoes.png',
    name: 'clown_shoes'
  });
  const cowboyBoots = useImage({
    src: '/images/cowboy_boots.png',
    name: 'cowboy_boots'
  });

  const allImagesLoaded =
    blackTopHat &&
    blackFedora &&
    blackBowlerHat &&
    steampunkHat &&
    cowboyHat &&
    baseballCap &&
    pirateHat &&
    blackTshirt &&
    femaleWhiteTop &&
    femaleRedTop &&
    dressShirt &&
    bluePolo &&
    redTshirtPocket &&
    trousers &&
    whitePants &&
    sweatPants &&
    stripedPants &&
    blueShorts &&
    beachShorts &&
    pinkSkirt &&
    redSkirt &&
    yellowSkirt &&
    blackSneakers &&
    brownDressShoes &&
    whiteTennisShoes &&
    brownFlats &&
    flipFlops &&
    punkBoots &&
    clownShoes &&
    cowboyBoots;

  return allImagesLoaded
    ? {
        heads: [
          blackTopHat,
          blackFedora,
          blackBowlerHat,
          steampunkHat,
          cowboyHat,
          baseballCap,
          pirateHat
        ],
        bodies: [blackTshirt, femaleWhiteTop, femaleRedTop, dressShirt, bluePolo, redTshirtPocket],
        legs: [
          trousers,
          whitePants,
          sweatPants,
          stripedPants,
          blueShorts,
          beachShorts,
          pinkSkirt,
          redSkirt,
          yellowSkirt
        ],
        shoes: [
          blackSneakers,
          brownDressShoes,
          whiteTennisShoes,
          brownFlats,
          flipFlops,
          punkBoots,
          clownShoes,
          cowboyBoots
        ]
      }
    : false;
};
