// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqAssets = (require as any).context('assets', true, /\.(png|jpe?g|gif|svg|webp|avif)$/);

const relativeClothesDir = './clothes/';
const headsDir = 'heads/';
const bodiesDir = 'bodies/';
const legsDir = 'legs/';
const shoesDir = 'shoes/';

const relativeBackgroundsDir = './backgrounds/';

interface AssetEntries {
  clothes: {
    heads: string[];
    bodies: string[];
    legs: string[];
    shoes: string[];
  };
  backgrounds: string[];
}
const assetUrls = {
  clothes: {
    heads: [],
    bodies: [],
    legs: [],
    shoes: []
  },
  backgrounds: []
} as AssetEntries;

reqAssets.keys().forEach((k: string) => {
  if (k.includes(relativeClothesDir)) {
    if (k.includes(headsDir)) {
      assetUrls.clothes.heads.push(reqAssets(k));
    } else if (k.includes(bodiesDir)) {
      assetUrls.clothes.bodies.push(reqAssets(k));
    } else if (k.includes(legsDir)) {
      assetUrls.clothes.legs.push(reqAssets(k));
    } else if (k.includes(shoesDir)) {
      assetUrls.clothes.shoes.push(reqAssets(k));
    }
  } else if (k.includes(relativeBackgroundsDir)) {
    assetUrls.backgrounds.push(reqAssets(k));
  }
});

export default assetUrls;
