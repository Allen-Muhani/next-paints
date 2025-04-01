export const getUri = (uri: string) => {
  return process.env.GITHUB_PAGES ? `/next-paints${uri}` : uri
};

