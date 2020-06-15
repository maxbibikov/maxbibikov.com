module.exports = {
  siteMetadata: {
    title: `maxbibikov.com`,
    description: `Hi! I am Max Bibikov. Full stack web and mobile developer. Welcome to my web site.`,
    author: `Max Bibikov`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // Netlify CMS
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maxbibikov.com`,
        short_name: `maxbibikov`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `assets/icons/favicon.png`, // This path is relative to the root of the site.
        theme_color_in_head: `false`,
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
