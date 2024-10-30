import i18next from "i18next";
import sv from "./translations/sv";

i18next.init({
  lng: "sv",
  debug: false,
  resources: {
    sv,
  },
  interpolation: {
    format: (value, format, _) => {
      switch (format) {
        case "upper":
          return value.toUpperCase();
        case "lower":
          return value.toLowerCase();
        case "capital":
          return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
      }

      return value;
    },
  },
});
