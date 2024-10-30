export const PidnFormatter: (string, boolean?) => string = (
  value: string,
  toApi?: boolean
) => {
  if (toApi) {
    return value ? value.toString().replace(/\D/g, "") : undefined;
  }
  if (!value) {
    return "";
  }
  let formatted = value.replace(/\D/g, "");
  formatted = validatedYear(formatted);

  if (value.endsWith("-") && formatted.length === 8) {
    return `${formatted}-`;
  }

  if (formatted.length > 8) {
    return formatted.slice(0, 8) + "-" + formatted.slice(8);
  }
  return formatted;
};

const validatedYear = (value: string) => {
  if (value.length >= 2) {
    const prefix = parseInt(value.slice(0, 2), 10);
    if (prefix != 19 && prefix != 20) {
      const yearDiff = new Date().getFullYear() % 1000;
      const prepend = prefix >= yearDiff ? "19" : "20";
      return prepend + value;
    }
  }
  return value;
};
