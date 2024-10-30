export type TScreenKeys = "xs" | "sm" | "md" | "lg" | "xl";

export const screenBreakpoints: { [key in TScreenKeys]: number } = {
  xs: 0,
  sm: 520,
  md: 720,
  lg: 992,
  xl: 1200,
};
