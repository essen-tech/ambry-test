export const AccountNumberFormatter: (string, boolean?) => string = (
  value: string,
  toApi?: boolean
) => {
  var norm = value ? value.replace(/\D/g, "") : "";

  if (toApi) {
    return norm ? norm : undefined;
  }
  if (!norm) {
    return "";
  }
  return norm.replace(/(.{4})/g, "$1 ").trim();
};
