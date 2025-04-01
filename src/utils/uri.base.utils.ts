export const getUri = (uri: string) => {
  return process.env.GITHUB_PAGES ? `/website${uri}` : uri
};

