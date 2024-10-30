export const MoneyFormatter: (string, boolean?) => string | number = (
  value: string,
  toApi?: boolean
) => {
  const norm = value ? value.toString().replace(/\D/g, "") : "";

  if (toApi) {
    return norm ? parseInt(norm, 10) : 0;
  }

  return norm ? Number(norm).toLocaleString("sv") : "";
};
