export interface IImage {
  id: string;
  caption: string;
  localFile?: {
    childImageSharp: GatsbyImageProps;
  };
  url?: string;
}
