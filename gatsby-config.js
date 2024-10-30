const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Ambry Foods`,
    description: `Essen - Ambry Foods`,
    author: `Swace Digital - Essen`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET || "my-bucket",
        protocol: process.env.S3_PROTOCOL || "https",
        hostname: process.env.S3_HOSTNAME || "my-bucket.swacedigital.se",
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_WP_BASE_GRAPHQL,
        verbose: false,
        develop: {
          hardCacheMediaFiles: false,
          // nodeUpdateInterval: 4000,
        },
        debug: {
          graphql: {
            showQueryVarsOnError: true,
          },
        },
        type: {
          Post: {
            exclude: true,
          },
          Comment: {
            exclude: true,
          },
          Tag: {
            exclude: true,
          },
          Category: {
            exclude: true,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["src/styles"],
        },
      },
    },
    "gatsby-plugin-postcss",
  ],
};
