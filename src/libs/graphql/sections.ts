import { graphql } from "gatsby";
// Sections available for Wordpress Page
export const pageSectionFields = graphql`
  fragment pageSectionFields on WpPage_Pagefields_Sections {
    __typename
    ... on WpPage_Pagefields_Sections_Hero {
      ...heroSectionFields
    }
    ... on WpPage_Pagefields_Sections_CardsRow {
      ...cardsRowSectionFields
    }
    ... on WpPage_Pagefields_Sections_Person {
      ...personSectionFields
    }
    ... on WpPage_Pagefields_Sections_TextAndImageScatter {
      ...textAndImageScatterSectionFields
    }
    ... on WpPage_Pagefields_Sections_Quote {
      ...quoteSectionFields
    }
    ... on WpPage_Pagefields_Sections_RecipeList {
      ...recipeListSectionFields
    }
    ... on WpPage_Pagefields_Sections_Product {
      ...productSectionFields
    }
    ... on WpPage_Pagefields_Sections_Recipe {
      ...recipeSectionFields
    }
    ... on WpPage_Pagefields_Sections_Video {
      ...videoSectionFields
    }
    ... on WpPage_Pagefields_Sections_Nutrition {
      ...nutritionSectionFields
    }
    ... on WpPage_Pagefields_Sections_ProductOrigin {
      ...productOriginSectionFields
    }
    ... on WpPage_Pagefields_Sections_Statement {
      ...statementSectionFields
    }
    ... on WpPage_Pagefields_Sections_TextAndImage {
      ...textAndImageSectionFields
    }
    ... on WpPage_Pagefields_Sections_Faq {
      ...FAQSectionFields
    }
    ... on WpPage_Pagefields_Sections_Contact {
      ...ContactSectionFields
    }
    ... on WpPage_Pagefields_Sections_PrivacyPolicy {
      ...PrivacyPolicySectionFields
    }
  }
`;

export const heroFields = graphql`
  fragment heroSectionFields on WpPage_Pagefields_Sections_Hero {
    heroImage {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 3000, quality: 90, formats: [AUTO, WEBP])
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

export const cardsRowFields = graphql`
  fragment cardsRowSectionFields on WpPage_Pagefields_Sections_CardsRow {
    title
    cards {
      title
      description
      bottomText
      link {
        target
        title
        url
      }
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

export const PersonFields = graphql`
  fragment personSectionFields on WpPage_Pagefields_Sections_Person {
    personTitle
    personName
    image {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
        }
      }
    }
    description
    smallDescription
    backgroundColor
  }
`;

export const TextAndImageScatterFields = graphql`
  fragment textAndImageScatterSectionFields on WpPage_Pagefields_Sections_TextAndImageScatter {
    description
    link {
      target
      title
      url
    }
    textAndImagesGroups {
      textAndImages {
        text
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
    }
    backgroundColor
  }
`;

export const QuoteFields = graphql`
  fragment quoteSectionFields on WpPage_Pagefields_Sections_Quote {
    text
    backgroundColor
  }
`;

export const RecipeListFields = graphql`
  fragment recipeListSectionFields on WpPage_Pagefields_Sections_RecipeList {
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

export const ProductFields = graphql`
  fragment productSectionFields on WpPage_Pagefields_Sections_Product {
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

// recipeVideo includes two cloned fields from VideoFields. Maybe better to move them out in a fragment in some way?
export const RecipeFields = graphql`
  fragment recipeSectionFields on WpPage_Pagefields_Sections_Recipe {
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
            gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
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

export const VideoFields = graphql`
  fragment videoSectionFields on WpPage_Pagefields_Sections_Video {
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

export const NutritionFields = graphql`
  fragment nutritionSectionFields on WpPage_Pagefields_Sections_Nutrition {
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

export const ProductOriginFields = graphql`
  fragment productOriginSectionFields on WpPage_Pagefields_Sections_ProductOrigin {
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

export const StatementFields = graphql`
  fragment statementSectionFields on WpPage_Pagefields_Sections_Statement {
    statementText {
      text
      styleKey
    }
    backgroundColor
    subsections {
      textAndImage {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
            }
          }
        }
        bottomText
        bottomImage {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
            }
          }
        }
      }
    }
  }
`;

export const TextAndImageFields = graphql`
  fragment textAndImageSectionFields on WpPage_Pagefields_Sections_TextAndImage {
    backgroundColor
    textAndImageGroups {
      textAndImage {
        title
        subtitle
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
            }
          }
        }
        extraImages {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, quality: 100, formats: [AUTO, WEBP])
              }
            }
          }
        }
        alignImage
        styleKeys
      }
    }
  }
`;

export const FAQFields = graphql`
  fragment FAQSectionFields on WpPage_Pagefields_Sections_Faq {
    title
    questions {
      question
      answer
    }
  }
`;

export const ContactFields = graphql`
  fragment ContactSectionFields on WpPage_Pagefields_Sections_Contact {
    description
    socialMediaLinks {
      linkedin
      instagram
      twitter
    }
    contactInfo {
      address
      city
      postCode
      email
      phoneNumber
    }
  }
`;

export const PrivacyPolicyFields = graphql`
  fragment PrivacyPolicySectionFields on WpPage_Pagefields_Sections_PrivacyPolicy {
    textSectionGroups {
      textSection {
        title
        bodyText
      }
    }
  }
`;
