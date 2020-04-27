module.exports = {
  siteMetadata: {
    title: `maxbibikov.com`,
    description: `Hi! I am Max Bibikov. Full stack web and mobile developer. Welcome to my web site.`,
    author: `Maksym Bibikov`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maxbibikov.com`,
        short_name: `maxbibikov`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `assets/images/favicon.png`, // This path is relative to the root of the site.
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
