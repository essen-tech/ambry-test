import { graphql } from "gatsby";

export const recipePageSectionFields = graphql`
  fragment recipePageSectionFields on WpRecipe_Recipefields_Sections {
    __typename
    ... on WpRecipe_Recipefields_Sections_Hero {
      ...heroSectionRecipeFields
    }
    ... on WpRecipe_Recipefields_Sections_RecipeList {
      ...recipeListSectionRecipeFields
    }
    ... on WpRecipe_Recipefields_Sections_Recipe {
      ...recipeSectionRecipeFields
    }
  }
`;

export const heroRecipeFields = graphql`
  fragment heroSectionRecipeFields on WpRecipe_Recipefields_Sections_Hero {
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

export const RecipeListRecipeFields = graphql`
  fragment recipeListSectionRecipeFields on WpRecipe_Recipefields_Sections_RecipeList {
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

// recipeVideo includes two cloned fields from VideoFields. Maybe better to move them out in a fragment in some way?
export const RecipeRecipeFields = graphql`
  fragment recipeSectionRecipeFields on WpRecipe_Recipefields_Sections_Recipe {
    description
    time
    servings
    recipeVideo {
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
    ingredientListsTitle {
      title
      titleNote
    }
    instructionsTitle {
      title
    }
    ingredientLists {
      listTitle
      list {
        ingredient
      }
    }
    instructions {
      instruction
    }
    notes {
      note
    }
  }
`;
