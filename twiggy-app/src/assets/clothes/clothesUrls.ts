// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqHeadsClothes = (require as any).context('assets/clothes/heads', false, /\.(png)$/);
const headsEntries = reqHeadsClothes.keys().map((k: string) => ({
  key: k,
  id: reqHeadsClothes.resolve(k),
  url: reqHeadsClothes(k) as string
}));
const headsClothesUrls = Array.from(
  new Map(headsEntries.map((e: { id: string; url: string }) => [e.id, e.url])).values()
) as string[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqBodiesClothes = (require as any).context('assets/clothes/bodies', false, /\.(png)$/);
const bodiesEntries = reqBodiesClothes.keys().map((k: string) => ({
  key: k,
  id: reqBodiesClothes.resolve(k),
  url: reqBodiesClothes(k) as string
}));
const bodiesClothesUrls = Array.from(
  new Map(bodiesEntries.map((e: { id: string; url: string }) => [e.id, e.url])).values()
) as string[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqLegsClothes = (require as any).context('assets/clothes/legs', false, /\.(png)$/);
const legsEntries = reqLegsClothes.keys().map((k: string) => ({
  key: k,
  id: reqLegsClothes.resolve(k),
  url: reqLegsClothes(k) as string
}));
const legsClothesUrls = Array.from(
  new Map(legsEntries.map((e: { id: string; url: string }) => [e.id, e.url])).values()
) as string[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqShoesClothes = (require as any).context('assets/clothes/shoes', false, /\.(png)$/);
const shoesEntries = reqShoesClothes.keys().map((k: string) => ({
  key: k,
  id: reqShoesClothes.resolve(k),
  url: reqShoesClothes(k) as string
}));
const shoesClothesUrls = Array.from(
  new Map(shoesEntries.map((e: { id: string; url: string }) => [e.id, e.url])).values()
) as string[];

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
