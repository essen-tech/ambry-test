import React, { Component } from "react";
import { IProductSections, IRecipeSections, ISections } from "~models";
import {
  Hero,
  CardsRow,
  Person,
  Quote,
  TextAndImageScatter,
  RecipeList,
  Recipe,
  Product,
  Video,
  Nutrition,
  ProductOrigin,
  Statement,
  FAQ,
  Contact,
  PrivacyPolicy,
  TextAndImage,
} from "~sections";

export interface SectionsProps {
  sections?: ISections | IRecipeSections | IProductSections;
}

export class Sections extends Component<SectionsProps> {
  render() {
    const { sections } = this.props;

    const renderedSections = (sections || []).map((section, i) => {
      switch (section.__typename) {
        case "WpPage_Pagefields_Sections_Hero":
          return <Hero key={section.__typename + i} section={section} />;
        case "WpRecipe_Recipefields_Sections_Hero":
          return <Hero key={section.__typename + i} section={section} />;
        case "WpProduct_Productfields_Sections_Hero":
          return <Hero key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_CardsRow":
          return <CardsRow key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Person":
          return <Person key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Quote":
          return <Quote key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_TextAndImageScatter":
          return <TextAndImageScatter key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_RecipeList":
          return <RecipeList key={section.__typename + i} section={section} />;
        case "WpRecipe_Recipefields_Sections_RecipeList":
          return <RecipeList key={section.__typename + i} section={section} />;
        case "WpProduct_Productfields_Sections_RecipeList":
          return <RecipeList key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Product":
          return <Product key={section.__typename + i} section={section} />;
        case "WpProduct_Productfields_Sections_Product":
          return <Product key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Recipe":
          return <Recipe key={section.__typename + i} section={section} />;
        case "WpRecipe_Recipefields_Sections_Recipe":
          return <Recipe key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Video":
          return <Video key={section.__typename + i} section={section} />;
        case "WpProduct_Productfields_Sections_Video":
          return <Video key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Nutrition":
          return <Nutrition key={section.__typename + i} section={section} />;
        case "WpProduct_Productfields_Sections_Nutrition":
          return <Nutrition key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_ProductOrigin":
          return <ProductOrigin key={section.__typename + i} section={section} />;
        case "WpProduct_Productfields_Sections_ProductOrigin":
          return <ProductOrigin key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Statement":
          return <Statement key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_TextAndImage":
          return <TextAndImage key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Faq":
          return <FAQ key={section.__typename + i} section={section} />;
        case "WpProduct_Productfields_Sections_Faq":
          return <FAQ key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_Contact":
          return <Contact key={section.__typename + i} section={section} />;
        case "WpPage_Pagefields_Sections_PrivacyPolicy":
          return <PrivacyPolicy key={section.__typename + i} section={section} />;

        default:
          return <div key={i.toString()} />;
      }
    });

    return renderedSections;
  }
}
