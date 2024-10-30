import { graphql } from "gatsby";
// Sections available for Wordpress Page
export const productPageSectionFields = graphql`
  fragment productPageSectionFields on WpProduct_Productfields_Sections {
    __typename
    ... on WpProduct_Productfields_Sections_Hero {
      ...productHeroSectionFields
    }
    ... on WpProduct_Productfields_Sections_RecipeList {
      ...productRecipeListSectionFields
    }
    ... on WpProduct_Productfields_Sections_Product {
      ...productProductSectionFields
    }
    ... on WpProduct_Productfields_Sections_Video {
      ...productVideoSectionFields
    }
    ... on WpProduct_Productfields_Sections_Nutrition {
      ...productNutritionSectionFields
    }
    ... on WpProduct_Productfields_Sections_ProductOrigin {
      ...productProductOriginSectionFields
    }
    ... on WpProduct_Productfields_Sections_Faq {
      ...productFaqSectionFields
    }
  }
`;

export const ProductHeroFields = graphql`
  fragment productHeroSectionFields on WpProduct_Productfields_Sections_Hero {
    heroImage {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300, quality: 90, formats: [AUTO, WEBP])
          }
        }
      }
      styleKey
    }
    heroText {
      title
      smallTitle
      description
      leftText
      rightText
      styleKey
    }
    backgroundColor
  }
`;

export const ProductRecipeListFields = graphql`
  fragment productRecipeListSectionFields on WpProduct_Productfields_Sections_RecipeList {
    sectionTitle
    textsWithImage {
      title
      description
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
          }
        }
      }
      bottomText
      link {
        target
        title
        url
      }
    }
    backgroundColor
  }
`;

export const ProductProductFields = graphql`
  fragment productProductSectionFields on WpProduct_Productfields_Sections_Product {
    smallTitle
    title
    description
    link {
      target
      title
      url
    }
    styleKey
    backgroundImage {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 3000, quality: 90, formats: [AUTO, WEBP])
        }
      }
    }
  }
`;

export const ProductVideoFields = graphql`
  fragment productVideoSectionFields on WpProduct_Productfields_Sections_Video {
    videoFile {
      mediaItemUrl
    }
    backgroundImage {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 3000, quality: 90, formats: [AUTO, WEBP])
        }
      }
    }
  }
`;

export const ProductNutritionFields = graphql`
  fragment productNutritionSectionFields on WpProduct_Productfields_Sections_Nutrition {
    tags
    ingredients
    description
    image {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
        }
      }
    }
    nutritionTable {
      headerRow {
        columnName
      }
      rows {
        nutritionName
        amount
        dailyValue
      }
      bottomText
    }
  }
`;

export const ProductProductOriginFields = graphql`
  fragment productProductOriginSectionFields on WpProduct_Productfields_Sections_ProductOrigin {
    title
    subtitle
    description
    images {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`;

export const ProductFaqFields = graphql`
  fragment productFaqSectionFields on WpProduct_Productfields_Sections_Faq {
    title
    questions {
      question
      answer
    }
  }
`;
