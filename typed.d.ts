declare module "*.scss" {
  const content: { [key: string]: string };
  export = content;
}

declare module "*.sass" {
  const content: { [key: string]: string };
  export = content;
}

declare module "*.css" {
  const content: { [key: string]: string };
  export = content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
