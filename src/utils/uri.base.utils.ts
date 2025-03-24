export const getUri = (uri: string) => {
  const isProd = process.env.NODE_ENV === "production";
  console.log("env ======> ", isProd);
  if (isProd) {
    return "/next-paints" + uri;
  }
  return uri;
};
