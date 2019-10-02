import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import ArchivePosts from '../components/ArchivePosts'

export const BlogPageTemplate = ({ title, subTitle, featuredImage, posts, meta }) => {

  return (
    <main className="Blog">
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management | ${title}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
      <Banner image={featuredImage} title={title} subTitle={subTitle} />
      {!!posts && <ArchivePosts posts={posts} subTitle={subTitle} />}
    </main>
  )
}

const BlogPage = ({ data: { page, posts, settingsYaml } }) => (
  <Layout>
    <BlogPageTemplate {...page.frontmatter} posts={posts} />
  </Layout>
)

export default BlogPage

export const BlogPageQuery = graphql`
  query BlogPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subTitle
        featuredImage
        teamMembers {
          content
          image
          leftAlign
          subTitle
          title
        }
        services {
          content
          subTitle
          title
          serviceItems {
            content
            image
            title
          }
        }
        meta {
          canonicalLink
          description
          noindex
          title
        }
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            featuredImage
            subTitle
            template
            slug
            content
            buttonText
            buttonUrl
            collection
            author
            date
            image
          }
        }
      }
    }
  }
`
