module.exports = {
  siteMetadata: {
    title: "Ed's test - Blog"
  },
  pathPrefix: "/blog-test",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    `gatsby-transformer-remark`,
  ],
}
