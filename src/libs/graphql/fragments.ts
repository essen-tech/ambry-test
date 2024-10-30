import { graphql } from "gatsby";

export const singleWpPage = graphql`
  fragment singleWpPageFragment on WpPage {
    id
    databaseId
    slug
    title
    link
    type: nodeType
    date(formatString: "D/M, Y")
    pageFields {
      sections {
        ...pageSectionFields
      }
    }
    seo {
      ...seoFragment
    }
  }
`;

export const singleWpRecipe = graphql`
  fragment singleWpRecipeFragment on WpRecipe {
    id
    databaseId
    slug
    title
    link
    type: nodeType
    date(formatString: "D/M, Y")
    recipeFields {
      sections {
        ...recipePageSectionFields
      }
    }
    seo {
      ...seoFragment
    }
  }
`;

export const singleWpProduct = graphql`
  fragment singleWpProductFragment on WpProduct {
    id
    databaseId
    slug
    title
    link
    type: nodeType
    date(formatString: "D/M, Y")
    productFields {
      sections {
        ...productPageSectionFields
      }
    }
    seo {
      ...seoFragment
    }
  }
`;

export const siteSettings = graphql`
  fragment siteSettingsFragment on Query {
    siteSettings: wp {
      generalSettings {
        ...generalSettingsFragment
      }
      seoSettings: seo {
        ...seoSettingsFragment
      }
    }
  }
`;

export const generalSettings = graphql`
  fragment generalSettingsFragment on WpGeneralSettings {
    siteTitle: title
    siteDescription: description
    siteUrl: url
  }
`;

export const seoSettings = graphql`
  fragment seoSettingsFragment on WpSEOConfig {
    openGraph {
      defaultImage {
        id
        databaseId
        sourceUrl
      }
    }
    schema {
      siteUrl
      siteName
      companyLogo {
        id
        databaseId
        sourceUrl
      }
    }
  }
`;

export const seoFragment = graphql`
  fragment seoFragment on WpPostTypeSEO {
    title
    metaDesc
    canonical
    opengraphTitle
    opengraphDescription
    opengraphType
    opengraphImage {
      id
      databaseId
      sourceUrl
    }
    opengraphSiteName
    opengraphUrl
    twitterTitle
    twitterDescription
    twitterImage {
      id
      databaseId
      sourceUrl
    }
    metaRobotsNofollow
    metaRobotsNoindex
  }
`;
