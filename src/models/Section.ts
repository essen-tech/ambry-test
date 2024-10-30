import { IImage } from "~models";
import { ILink } from "./Link";

export interface IHero {
  __typename:
    | "WpPage_Pagefields_Sections_Hero"
    | "WpRecipe_Recipefields_Sections_Hero"
    | "WpProduct_Productfields_Sections_Hero";
  heroImage: {
    image: IImage;
    styleKey: string;
  };
  heroText: {
    title: string;
    smallTitle: string;
    description: string;
    leftText: string;
    rightText: string;
    styleKey: string[];
  };
  backgroundColor: string;
}

export interface ICardsRow {
  __typename: "WpPage_Pagefields_Sections_CardsRow";
  title: string;
  cards: [
    {
      title: string;
      description: string;
      bottomText: string;
      link: ILink;
      image: IImage;
    }
  ];
}

export interface IPerson {
  __typename: "WpPage_Pagefields_Sections_Person";
  personTitle: string;
  personName: string;
  image: IImage;
  smallDescription: string;
  description: string;
  backgroundColor: string;
}

export interface ITextAndImageScatter {
  __typename: "WpPage_Pagefields_Sections_TextAndImageScatter";
  description: string;
  link: ILink;
  textAndImagesGroups: [
    {
      textAndImages: {
        text: string;
        images: [
          {
            image: IImage;
          }
        ];
      };
    }
  ];
}

export interface IQuote {
  __typename: "WpPage_Pagefields_Sections_Quote";
  text: string;
  backgroundColor: string;
}

export interface IRecipeList {
  __typename:
    | "WpPage_Pagefields_Sections_RecipeList"
    | "WpRecipe_Recipefields_Sections_RecipeList"
    | "WpProduct_Productfields_Sections_RecipeList";
  sectionTitle: string;
  textsWithImage: [
    {
      title: string;
      description: string;
      image: IImage;
      bottomText: string;
      link: ILink;
    }
  ];
  backgroundColor: string;
}

export interface IProduct {
  __typename:
    | "WpPage_Pagefields_Sections_Product"
    | "WpProduct_Productfields_Sections_Product";
  title: string;
  description: string;
  link: ILink;
  backgroundImage: IImage;
  styleKey: string;
  smallTitle: string;
}

export interface IRecipe {
  __typename:
    | "WpPage_Pagefields_Sections_Recipe"
    | "WpRecipe_Recipefields_Sections_Recipe";
  description: string;
  time: string;
  servings: string;
  recipeVideo: {
    videoFile: {
      mediaItemUrl: string;
    };
    backgroundImage: IImage;
  };
  ingredientListsTitle: {
    title: string;
    titleNote: string;
  };
  instructionsTitle: {
    title: string;
  };
  ingredientLists: [
    {
      listTitle: string;
      list: [
        {
          ingredient: string;
        }
      ];
    }
  ];
  instructions: [
    {
      instruction: string;
    }
  ];
  notes: [
    {
      note: string;
    }
  ];
}

export interface IVideo {
  __typename:
    | "WpPage_Pagefields_Sections_Video"
    | "WpProduct_Productfields_Sections_Video";
  backgroundImage: IImage;
  videoFile: {
    mediaItemUrl: string;
  };
}

export interface INutrition {
  __typename:
    | "WpPage_Pagefields_Sections_Nutrition"
    | "WpProduct_Productfields_Sections_Nutrition";
  tags: string;
  ingredients: string;
  description: string;
  image: IImage;
  nutritionTable: {
    headerRow: [
      {
        columnName: string;
      }
    ];
    rows: [
      {
        nutritionName: string;
        amount: string;
        dailyValue: string;
      }
    ];
    bottomText: string;
  };
}

export interface IProductOrigin {
  __typename:
    | "WpPage_Pagefields_Sections_ProductOrigin"
    | "WpProduct_Productfields_Sections_ProductOrigin";
  title: string;
  subtitle: string;
  description: string;
  images: [
    {
      image: IImage;
    }
  ];
}

export interface IStatement {
  __typename: "WpPage_Pagefields_Sections_Statement";
  statementText: {
    text: string;
    styleKey: string;
  };
  backgroundColor: string;
  subsections: [
    {
      textAndImage: {
        title: string;
        image: IImage;
        bottomText: string;
        bottomImage: IImage;
      };
    }
  ];
}

export interface ITextAndImage {
  __typename: "WpPage_Pagefields_Sections_TextAndImage";
  backgroundColor: string;
  textAndImageGroups: [
    {
      textAndImage: {
        title: string;
        subtitle: string;
        description: string;
        image: IImage;
        extraImages: [
          {
            image: IImage;
          }
        ];
        alignImage: string;
        styleKeys: string[];
      };
    }
  ];
}
export interface IFAQ {
  __typename: "WpPage_Pagefields_Sections_Faq" | "WpProduct_Productfields_Sections_Faq";
  title: string;
  questions: [
    {
      question: string;
      answer: string;
    }
  ];
}

export interface IContact {
  __typename: "WpPage_Pagefields_Sections_Contact";
  description: string;
  socialMediaLinks: {
    linkedin: string;
    instagram: string;
    twitter: string;
  };
  contactInfo: {
    address: string;
    city: string;
    postCode: string;
    email: string;
    phoneNumber: string;
  };
}

export interface IPrivacyPolicy {
  __typename: "WpPage_Pagefields_Sections_PrivacyPolicy";
  textSectionGroups: [
    {
      textSection: {
        title: string;
        bodyText: string;
      };
    }
  ];
}

export type ISections = (
  | IHero
  | ICardsRow
  | IPerson
  | ITextAndImageScatter
  | IQuote
  | IRecipeList
  | IProduct
  | IVideo
  | INutrition
  | IProductOrigin
  | IStatement
  | ITextAndImage
  | IFAQ
  | IContact
  | IPrivacyPolicy
  | IRecipe
)[];

export type IRecipeSections = (IHero | IRecipeList | IRecipe)[];

export type IProductSections = (
  | IHero
  | IRecipeList
  | IProduct
  | IProductOrigin
  | IFAQ
  | IVideo
  | INutrition
)[];
