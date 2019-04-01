import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron style={{
      marginTop: '4.5rem',
      marginBottom: '1rem'
    }}>
    <h1>Company Blog</h1>
      <p>You will find all articles written to help and inform buyers and sellers of their options with different types of loans available to everyone.</p>
      <p className="mb-0">
        <Link to="/about" className="btn btn-primary">Learn more</Link>
      </p>
    </Jumbotron>
    {data.allStrapiArticle.edges.map(document => (
    <Card key={document.node.id} className="mb-3">
      <Card.Body>
        <Card.Title>
          <Link to={`/${document.node.id}`}>
            {document.node.title}
          </Link>
        </Card.Title>
        <Img className="mt-2 mr-3 mb-3 float-left img-fluid" fixed={document.node.image.childImageSharp.fixed} />
        <p>{document.node.content}</p>
      </Card.Body>
    </Card>
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 305, height: 175) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`