import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/*
const AboutPage = () => ()*/

const AboutPage = () => {
    // before return, modify code, query params
return (
    <Layout>
        <SEO title="About" />
        <h2> About Gatsby Practice </h2>
    </Layout>
)
}

export default AboutPage