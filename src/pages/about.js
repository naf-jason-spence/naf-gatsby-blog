import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Jumbotron from "react-bootstrap/Jumbotron"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="What We Stand For" />
    <Jumbotron style={{
        marginTop: '4.5rem',
        marginBottom: '1rem'
    }}>
        <h1>What We Stand For</h1>
        <p>This is just some placeholder content.</p>
        <p className="mb-0">
            <Link to="/" className="btn btn-primary">Back to Homepage</Link>
        </p>
    </Jumbotron>
  </Layout>
)

export default AboutPage
