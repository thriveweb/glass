import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import SinglePost from '../components/SinglePost'
import SectionPartners from '../components/SectionPartners'

export const BlogPostTemplate = ({ fields, partners, meta }) => {
  return (
    <main className="single-post">
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management | ${_get(fields, 'title')}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
      <Banner image={fields && fields.image} title={' '} />
      <SinglePost post={fields} />
      <SectionPartners partners={partners} />
    </main>
  )
}

const BlogPost = ({ data: { page = {}, settingsYaml } }) => (
  <Layout>
    <BlogPostTemplate
      fields={page.frontmatter}
      {...settingsYaml}
    />
  </Layout>
)

export default BlogPost

export const BlogPostQuery = graphql`
  query BlogPost($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        image
        title
        collection
        author
        date
        content
        videoSource
        meta {
          canonicalLink
          description
          noindex
          title
        }
      }
    }

    settingsYaml {
      partners {
        image
      }
    }
  }
`
