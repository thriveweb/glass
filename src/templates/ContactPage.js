import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import ContactInfo from '../components/ContactInfo'


export const ContactPageTemplate = ({
  title,
  subTitle,
  featuredImage,
  globalSettings,
  meta
}) => {
  return (
    <main className='Contact'>
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management | ${title}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
      <Banner image={featuredImage} title={title} subTitle={subTitle} />
      <ContactInfo globalSettings={globalSettings} />
    </main>
  )
}

const ContactPage = ({ data: { page, posts, settingsYaml } }) => (
  <Layout>
    <ContactPageTemplate
      {...page.frontmatter}
      globalSettings={settingsYaml}
      posts={posts}
      body={page.html}
    />
  </Layout>
)

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
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

    settingsYaml {
      phone
      address
      email
      twitter
      facebook
      instagram
      linkedin
    }
  }
`
