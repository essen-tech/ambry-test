const format = (text: string) => {
  if (text.length > 20) {
    return text.replace(/^(.{8})(.{4})(.{4})(.{4})(.*)+$/, "$1-$2-$3-$4-$5");
  } else if (text.length > 16) {
    return text.replace(/^(.{8})(.{4})(.{4})(.*)+$/, "$1-$2-$3-$4");
  } else if (text.length > 12) {
    return text.replace(/^(.{8})(.{4})(.*)+$/, "$1-$2-$3");
  } else if (text.length > 8) {
    return text.replace(/^(.{8})(.*)+$/, "$1-$2");
  }
  return text;
};

export const UUID4Formatter: (string, boolean?) => string = (
  value: string,
  toApi?: boolean
) => {
  var norm = value ? value : "";
  if (toApi) {
    return norm ? norm : undefined;
  }

  norm = norm.replace(/-/g, "");
  if (!norm) {
    return "";
  }

  return format(norm).trim();
};
