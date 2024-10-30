import i18next from "i18next";

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param vars Additional values sure to replace.
 */
export const tx = (key: string, vars?: object) =>
  (key ? i18next.t(key, vars) : null) as string;
