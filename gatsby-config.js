module.exports = {
  siteMetadata: {
    title: `maxbibikov.com`,
    description: `Max Bibikov - full stack software developer`,
    author: `Max Bibikov`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    // Image processing and optimization
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/`,
      },
    },
    // Parse markdown files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    // CMS
    `gatsby-plugin-decap-cms`,
    // Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maxbibikov.com`,
        short_name: `maxbibikov`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `assets/icons/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
        // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/#using-with-gatsby-plugin-manifest
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
