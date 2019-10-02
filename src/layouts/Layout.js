import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from '../components/Meta'
// import Footer from './Footer'
// import GithubCorner from './GithubCorner'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

// Components
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default ({ children, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            header {
              buttonText
              buttonUrl
            }
            footer {
              title
              footerNav {
                buttonText
                buttonUrl
              }
            }
            twitter
            facebook
            linkedin
            instagram
            headerScripts
          }
          modelTypes: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "model-types" } } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { settingsYaml, modelTypes } = data
        const {
          header,
          footer,
          twitter,
          facebook,
          linkedin,
          instagram,
          headerScripts
        } = settingsYaml

        return (
          <Fragment>
            <Helmet>
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />

            </Helmet>

            <Meta
              googleTrackingId={headerScripts}
            />

            <Nav header={header} modelTypes={modelTypes} />
            {children}

            <Footer
              title={footer.title}
              footerNav={footer.footerNav}
              twitter={twitter}
              facebook={facebook}
              linkedin={linkedin}
              instagram={instagram}
            />
          </Fragment>
        )
      }}
    />
  )
}
