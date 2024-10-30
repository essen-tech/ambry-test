export interface Yoast {
  yoast_wpseo_title: string;
  yoast_wpseo_metadesc: string;
  yoast_wpseo_canonical: string;
  yoast_wpseo_facebook_title: string;
  yoast_wpseo_facebook_description: string;
  yoast_wpseo_facebook_type: string;
  yoast_wpseo_facebook_image: {
    id: string;
    source_url: string;
  };
  yoast_wpseo_twitter_title: string;
  yoast_wpseo_twitter_description: string;
  yoast_wpseo_twitter_image: {
    id: string;
    source_url: string;
  };
  yoast_wpseo_social_url: string;
  yoast_wpseo_company_or_person: string;
  yoast_wpseo_person_name: string;
  yoast_wpseo_company_name: string;
  yoast_wpseo_company_logo: {
    id: string;
    source_url: string;
  };
  yoast_wpseo_website_name: string;
}
