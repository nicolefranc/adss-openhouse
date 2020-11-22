/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'ADSS Virtual Open House',
    description: 'Ahoy! Welcome to Admiralty Secondary School\'s Virtual Open House. Join us as our school mascot, Addy, brings you in an interactive tour around the school.',
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
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-HL0XNQN86Q']
      }
    },
    'gatsby-plugin-react-helmet'
  ],
};
