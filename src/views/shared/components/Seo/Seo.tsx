import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Icons } from "~libs/assets";
import { ISeo, ISettings } from "~models";
import { buildCanonicalUrl } from "~libs/utils";
import { graphql, StaticQuery } from "gatsby";

export interface ISeoComponent {
  pageTitle?: string;
  origin?: string;
  seo?: ISeo;
  settings?: ISettings;
}

export class SeoComponent extends Component<ISeoComponent> {
  render() {
    const { seo, settings, pageTitle, origin } = this.props;
    const { generalSettings, seoSettings } = settings;
    const { openGraph, schema } = seoSettings;
    const { defaultImage } = openGraph;
    const { siteName, companyLogo } = schema;

    let title = "";
    if (seo?.title && !seo?.title.includes("not found")) {
      title = seo.title;
    } else if (pageTitle) {
      title = `${pageTitle} | ${generalSettings ? generalSettings.siteTitle : ""}`;
    } else if (generalSettings) {
      title = `${generalSettings ? generalSettings.siteTitle : ""} | ${
        generalSettings ? generalSettings.siteDescription : ""
      }`;
    }

    const canonicalUrl = seo?.canonical && buildCanonicalUrl(origin, seo.canonical);

    // OG - Open Graph tags
    const ogTitle = seo && seo.opengraphTitle;
    const ogUrl = seo && buildCanonicalUrl(origin, seo.opengraphUrl);
    const ogDescription = seo && seo.opengraphDescription;

    let ogImage;
    let ogImageSecure;
    if (seo?.opengraphImage?.sourceUrl) {
      ogImage = seo.opengraphImage.sourceUrl.replace("https://", "http://");
      ogImageSecure = seo.opengraphImage.sourceUrl;
    } else if (defaultImage?.sourceUrl) {
      ogImage = defaultImage.sourceUrl.replace("https://", "http://");
      ogImageSecure = defaultImage.sourceUrl;
    } else if (companyLogo?.sourceUrl) {
      ogImage = companyLogo.sourceUrl.replace("https://", "http://");
      ogImageSecure = defaultImage.sourceUrl;
    }

    // Twitter tags
    const twitterTitle = seo?.twitterTitle;
    const twitterDescription = seo?.twitterDescription;
    let twitterImage;
    let twitterImageSecure;

    if (seo?.twitterImage?.sourceUrl) {
      twitterImage = seo.twitterImage.sourceUrl.replace("https://", "http://");
      ogImageSecure = seo.twitterImage.sourceUrl;
    } else if (defaultImage?.sourceUrl) {
      twitterImage = defaultImage.sourceUrl.replace("https://", "http://");
      twitterImageSecure = defaultImage.sourceUrl;
    } else if (companyLogo?.sourceUrl) {
      twitterImage = companyLogo.sourceUrl.replace("https://", "http://");
      twitterImageSecure = defaultImage.sourceUrl;
    }

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={seo?.metaDesc} />
        <meta name="author" content={"Swace Digital"} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <html lang="en" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="shortcut icon" type="image/png" href={Icons.favicon} />

        {/* Open Graph || Facebook */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImageSecure} />
        <meta property="og:image:alt" content="" />

        {/* Twitter Meta */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={ogUrl} />
        <meta property="twitter:title" content={twitterTitle} />
        <meta property="twitter:description" content={twitterDescription} />
        <meta property="twitter:image" content={twitterImage} />
        <meta property="twitter:image:secure_url" content={twitterImageSecure} />
      </Helmet>
    );
  }
}

export const Seo = (props: ISeoComponent) => (
  <StaticQuery
    query={query}
    render={(data) => {
      return <SeoComponent {...props} settings={data.siteSettings} />;
    }}
  />
);

const query = graphql`
  query {
    ...siteSettingsFragment
  }
`;
