const format = (number: string) => {
  if (number.length > 8) {
    return number.replace(/^(\d{3})(\d{3})(\d{2})(\d*)+$/, "$1-$2 $3 $4");
  } else if (number.length > 6) {
    return number.replace(/^(\d{3})(\d{3})(\d*)+$/, "$1-$2 $3");
  } else if (number.length > 3) {
    return number.replace(/^(\d{3})(\d*)+$/, "$1-$2");
  }
  return number;
};

export const PhoneFormatter: (string) => string = (value: string) => {
  let norm = value ? value.replace(/[^0-9+]/g, "") : "";
  if (norm.startsWith("+") || norm.startsWith("00")) {
    norm = norm.replace("00", "+");
    const first7Index = norm.indexOf("7");
    if (first7Index > -1) {
      norm = `(${norm.slice(0, first7Index)}) ${format(
        "0" + norm.slice(first7Index)
      ).slice(1)}`;
    }
    return norm;
  }

  return format(norm);
};
