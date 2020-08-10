const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const locationTemplate = path.resolve("./src/templates/location.js")
  const res = await graphql(`
    query {
      allContentfulLocation {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulLocation.edges.forEach(edge => {
    createPage({
      component: locationTemplate,
      path: `/explore/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
