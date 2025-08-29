// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-undef
const reqBackgrounds = (require as any).context(
  'assets/backgrounds',
  false,
  /\.(png|jpe?g|gif|svg|webp|avif)$/
);

const entries = reqBackgrounds.keys().map((k: string) => ({
  key: k,
  id: reqBackgrounds.resolve(k),
  url: reqBackgrounds(k) as string
}));
// Deduplicate by module id due to absolute + relative path matching
const backgroundUrls = Array.from(
  new Map(entries.map((e: { id: string; url: string }) => [e.id, e.url])).values()
) as string[];

export default backgroundUrls;
