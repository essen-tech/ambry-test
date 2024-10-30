export const ZipFormatter: (string) => string = (value: string) => {
  let norm = value ? value.replace(/\D/g, "") : "";
  if (norm.length > 3) {
    norm = norm.slice(0, 3) + " " + norm.slice(3);
  }
  return norm;
};
