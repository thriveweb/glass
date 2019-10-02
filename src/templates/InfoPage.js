import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import SinglePost from '../components/SinglePost'

export const InfoPageTemplate = ({
  featuredImage,
  fields,
  meta
}) => {
  return (
    <main className='InfoPage'>
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management | ${_get(fields, 'title')}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
      <Banner image={featuredImage} title=' ' />
      <SinglePost post={fields} showShareButtons={false} />
    </main>
  )
}

const InfoPage = ({ data: { page } }) => (
  <Layout>
    <InfoPageTemplate
      {...page.frontmatter}
      fields={page.frontmatter}
    />
  </Layout>
)

export default InfoPage

export const InfoPageQuery = graphql`
  query InfoPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage
        content
        meta {
          canonicalLink
          description
          noindex
          title
        }
      }
    }
  }
`
