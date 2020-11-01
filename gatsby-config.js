/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'ADSS Virtual Open House',
    description: 'Welcome to Admiralty Secondary School\'s Virtual Open House. Where we bring the school to you.',
    author: 'nicoleyu@outlook.sg',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      },
    },
    'gatsby-plugin-postcss',
  ],
};
