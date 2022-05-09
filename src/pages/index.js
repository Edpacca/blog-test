import '../css/style.css';
import React from "react";
import Header from '../components/Header';
import PostLink from '../components/PostLink';
import logo from '../assets/EP-logo.svg'
import { graphql } from "gatsby"

const Home = ({data: {allMarkdownRemark: { edges }}, }) => {
  
  return (
    <div className='page flex-center'>
      <Header banner={logo} tagline="Ed's test blog"/>
      {edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
    </div>
  )
}

export default Home;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
