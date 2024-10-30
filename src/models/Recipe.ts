import { ISections } from "./Section";
import { ISeo } from "./Seo";

export interface ISingleWordpressRecipe {
  id: number;
  type: string;
  title: string;
  link: string;
  slug: string;
  pageFields: {
    sections: ISections;
  };
  seo: ISeo;
  date: string;
}
