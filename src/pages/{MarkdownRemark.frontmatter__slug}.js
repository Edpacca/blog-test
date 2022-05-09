import React from "react"
import Header from "../components/Header"
import logo from '../assets/EP-logo.svg'
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className='page flex-center'>
    <Header banner={logo}/>
      <div className='content'>
        <h1 className='header'>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className='section'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
