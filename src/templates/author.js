import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from 'react-bootstrap/Card'
import SEO from "../components/seo"

const UserTemplate = ({ data }) => (
    <Layout>
        <SEO title={data.strapiUser.username} />
        <h3 style={{
            marginTop: '5rem'
        }}>Articles by: {data.strapiUser.username}</h3>

        {data.strapiUser.articles.map(article => (
        <Card key={article.id} className="mb-3">
            <Card.Body>
                <Card.Title>
                <h2><Link to={`/Article_${article.id}`}>{article.title}</Link></h2>
                </Card.Title>
                <p>{article.content}</p>
            </Card.Body>
        </Card>
        ))}
    </Layout>
  )
  
export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
      }
    }
  }
` 