// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqHeadsClothes = (require as any).context('./heads', true, /\.(png)$/);
const headsClothesUrls: string[] = reqHeadsClothes
  .keys()
  .map((k: string) => reqHeadsClothes(k) as string);

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqBodiesClothes = (require as any).context('./bodies', true, /\.(png)$/);
const bodiesClothesUrls: string[] = reqBodiesClothes
  .keys()
  .map((k: string) => reqBodiesClothes(k) as string);

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqLegsClothes = (require as any).context('./legs', true, /\.(png)$/);
const legsClothesUrls: string[] = reqLegsClothes
  .keys()
  .map((k: string) => reqLegsClothes(k) as string);

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqShoesClothes = (require as any).context('./shoes', true, /\.(png)$/);
const shoesClothesUrls: string[] = reqShoesClothes
  .keys()
  .map((k: string) => reqShoesClothes(k) as string);

interface ClothesImagesUrls {
  heads: string[];
  bodies: string[];
  legs: string[];
  shoes: string[];
}
export const allClothesUrls: ClothesImagesUrls = {
  heads: headsClothesUrls,
  bodies: bodiesClothesUrls,
  legs: legsClothesUrls,
  shoes: shoesClothesUrls
};
