import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'


export const InfluencersPageTemplate = () => {
  return (
    <main className='Influencers'>
      <h1>TEST</h1>
    </main>
  )
}

const InfluencersPage = ({ data: { page } }) => (
  <Layout>
    <InfluencersPageTemplate
      {...page.frontmatter}
      body={page.html}
    />
  </Layout>
)

export default InfluencersPage

export const InfluencersPageQuery = graphql`
  query InfluencersPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
