import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import SingleModel from '../components/SingleModel'

export const ModelPageTemplate = ({
  featuredImage,
  featuredVideo,
  featuredVideoMobile,
  firstName,
  height,
  waist,
  measurementType,
  bust,
  hips,
  size,
  shoeSize,
  hair,
  eyes,
  imagePortfolio,
  collection,
  modelTypes,
  meta
}) => {

  return (
    <main className='Model'>
      <Helmet defaultTitle={meta ? `Glass Management | ${_get(meta, 'title')}` : `Glass Management | ${firstName}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
      <Banner
        image={featuredImage}
        featuredVideo={featuredVideo}
        featuredVideoMobile={featuredVideoMobile}
        modelPage
      />
      <SingleModel
        firstName={firstName}
        imagePortfolio={imagePortfolio}
        collection={collection}
        height={height}
        waist={waist}
        measurementType={measurementType}
        bust={bust}
        hips={hips}
        size={size}
        shoeSize={shoeSize}
        hair={hair}
        eyes={eyes}
        modelTypes={modelTypes}
      />
    </main>
  )
}

const ModelPage = ({ data: { page, posts, settingsYaml } }) => (
  <Layout>
    <ModelPageTemplate
      {...page.frontmatter}
      {...settingsYaml}
      posts={posts}
      body={page.html}
    />
  </Layout>
)

export default ModelPage

export const ModelPageQuery = graphql`
  query ModelPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        firstName
        featuredImage
        featuredVideo
        featuredVideoMobile
        height
        waist
        measurementType
        bust
        hips
        size
        shoeSize
        hair
        eyes
        imagePortfolio {
          image
        }
        collection
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
