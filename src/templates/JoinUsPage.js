import './JoinUs.css'

import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import Content from '../components/Content'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'

export class JoinUsPageTemplate extends Component {
  state = {
    success: false
  }

  onFormSubmit = () =>
    this.setState({
      success: true
    })

  render() {
    const { title, subTitle, featuredImage, intro, meta } = this.props
    const { success } = this.state

    return (
      <main className='JoinUs'>
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management | ${title}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
        <Banner image={featuredImage} title={title} subTitle={subTitle} />
        <section className='section--join-us'>
          <div className='container'>
            <div className='section--join-us-intro'>
              {intro.title && <h2>{intro.title}</h2>}
              {intro.content && <Content source={intro.content} />}
            </div>

            {success && (
              <div
                style={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: '1.1em',
                  padding: '1rem'
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-check-circle'
                  style={{ marginBottom: '2rem', marginTop: '2rem' }}
                >
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                  <polyline points='22 4 12 14.01 9 11.01' />
                </svg>
                <p>
                  Thank you for your submission, we will be in contact with you
                  shortly
                </p>
              </div>
            )}

            <EnquiryFormSimpleAjax name='Join Us Form' hidden={success} />
          </div>
        </section>
      </main>
    )
  }
}

const JoinUsPage = ({ data: { page, posts, settingsYaml } }) => (
  <Layout>
    <JoinUsPageTemplate
      {...page.frontmatter}
    />
  </Layout>
)

export default JoinUsPage

export const JoinUsPageQuery = graphql`
  query JoinUsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subTitle
        featuredImage
        intro {
          content
          title
        }
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
