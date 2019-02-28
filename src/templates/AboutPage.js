import './About.css'

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import SectionTeam from '../components/SectionTeam'
import SectionServices from '../components/SectionServices'
import SectionColumns from '../components/SectionColumns'
import SectionPartners from '../components/SectionPartners'

export const AboutPageTemplate = ({
  title,
  subTitle,
  featuredImage,
  teamMembers,
  services,
  columns,
  partners,
  meta
}) => {
  return (
    <main className="About">
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management | ${title}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
      <Banner title={title} subTitle={subTitle} image={featuredImage} />
      <SectionTeam teamMembers={teamMembers} />
      <SectionServices services={services} />
      <div className="about-partners">
        <p className="title">Friends of the Family</p>
        <h2>Clients we've worked with</h2>
        <SectionPartners partners={partners} />
      </div>
      <SectionColumns columns={columns} />
    </main>
  )
}

const AboutPage = ({ data: { page, posts, settingsYaml } }) => (
  <Layout>
    <AboutPageTemplate
      {...page.frontmatter}
      {...settingsYaml}
      posts={posts}
      body={page.html}
    />
  </Layout>
)

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
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

    settingsYaml {
      columns {
        buttonTitle
        buttonUrl
        content
        image
        leftAlign
        title
      }
      partners {
        image
      }
    }
  }
`
