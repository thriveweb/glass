import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import ModelListing from '../components/ModelListing'

export const ModelsPageTemplate = ({
  title,
  subTitle,
  featuredImage,
  models,
  meta
}) => {
  return (
    <main className="Models">
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management | ${title}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
      <Banner image={featuredImage} title={title} subTitle={'OUR MODELS'} />
      <ModelListing
        models={models}
        title={'Explore Our Models'}
        subTitle={'OUR MODELS'}
      />
    </main>
  )
}

const ModelsPage = ({ data: { page, models } }) => (
  <Layout>
    <ModelsPageTemplate
      {...page.frontmatter}
      models={models}
      body={page.html}
    />
  </Layout>
)

export default ModelsPage

export const ModelsPageQuery = graphql`
  query ModelsPage($id: String!, $title: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subTitle
        featuredImage
        meta {
          canonicalLink
          description
          noindex
          title
        }
      }
    }

    models: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "model" } }
        frontmatter: { collection: { eq: $title } }
      }
      sort: {
        fields: [frontmatter___title]
        order: [ASC]
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            collection
            imageThumbnail
            firstName
          }
        }
      }
    }
  }
`
