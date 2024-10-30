import { graphql } from "gatsby";

export const pageYoastFields = graphql`
  fragment pageYoastFields on wordpress__PAGEYoast_meta {
    yoast_wpseo_title
    yoast_wpseo_metadesc
    yoast_wpseo_canonical
    yoast_wpseo_facebook_title
    yoast_wpseo_facebook_description
    yoast_wpseo_facebook_type
    yoast_wpseo_facebook_image {
      id
      source_url
    }
    yoast_wpseo_twitter_title
    yoast_wpseo_twitter_description
    yoast_wpseo_twitter_image {
      id
    }
    yoast_wpseo_social_url
    yoast_wpseo_company_or_person
    yoast_wpseo_person_name
    yoast_wpseo_company_name
    yoast_wpseo_company_logo {
      id
    }
    yoast_wpseo_website_name
  }
`;
