export const rewriteToInternal = (url) => {
  const regex = "^(.*:)//([A-Za-z0-9-.]+)(:[0-9]+)?(.*)$"; // eslint-disable-line
  if (url) {
    return `${process.env.GATSBY_WP_BASE_URL}${url.match(regex)[4]}`;
  }
  return "";
};

export const buildCanonicalUrl = (origin: string, url: string) => {
  if (origin && url) {
    return origin + url;
  }
};

export const isBrowser = () => typeof window !== "undefined";

export const pushToArray = (arr, obj) => {
  const index = arr.findIndex((e) => e.id === obj.id);

  if (index === -1) {
    arr.push(obj);
  } else {
    arr[index] = { ...arr[index], ...obj };
  }
};
