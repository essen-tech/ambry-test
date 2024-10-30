import { ISeo } from "~models";
import { IProductSections, IRecipeSections, ISections } from "./Section";

export interface IPage {
  __typename: "Page";
  _id: string;
  slug: string;
  sections: ISections;
}
export interface ISingleWordpressPage {
  id: number;
  type: string;
  title: string;
  link: string;
  slug: string;
  pageFields?: {
    sections: ISections;
  };
  recipeFields?: {
    sections: IRecipeSections;
  };
  productFields?: {
    sections: IProductSections;
  };
  seo: ISeo;
  date: string;
}
