export const NumberFormatter: (string, boolean?) => string | number = (
  value: string,
  toApi?: boolean
) => {
  const normValue = value ? value.toString().replace(/[^0-9.]/g, "") : "";

  if (toApi) {
    return normValue ? parseInt(normValue, 10) : 0;
  }

  return normValue ? Number(normValue).toString() : "";
};
