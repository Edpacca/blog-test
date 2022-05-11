module.exports = {
  siteMetadata: {
    title: "Ed's test - Blog"
  },
  pathPrefix: "/blog-test",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/_posts/blog`,
      }
    },
    `gatsby-transformer-remark`,
  ],
}
