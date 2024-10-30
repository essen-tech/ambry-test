export const getDevice = () => {
  const userAgent = (
    navigator.userAgent ||
    navigator.vendor ||
    window.opera ||
    ""
  ).toLowerCase();

  if (/ipad|iphone|ipod/.test(userAgent)) {
    return "ios";
  }

  if (/mac/.test(userAgent)) {
    return "mac";
  }

  if (/windows phone/.test(userAgent)) {
    return "windows phone";
  }

  if (/android/.test(userAgent)) {
    return "android";
  }

  if (/win/.test(userAgent)) {
    return "windows";
  }

  return "desktop";
};
