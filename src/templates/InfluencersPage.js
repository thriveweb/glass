import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import BackgroundImage from '../components/BackgroundImage'
import ModelTypes from '../components/ModelTypes'

export const InfluencersPageTemplate = ({
  title,
  subTitle,
  featuredImage,
  influencerList,
  meta
}) => {

  const children = influencerList.filter(item => item.type === 'child')
  const adults = influencerList.filter(item => item.type === 'adult')

  return (
    <main className='Influencers'>
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management | ${title}`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {/*meta && meta.noindex && <meta name="robots" content="noindex" />*/}
        <meta name="robots" content="noindex"></meta>
      </Helmet>
      <Banner image={featuredImage} title={title} subTitle={subTitle} />
      <section className='section--models archive--listing'>
    		<div className='container'>
    			<div className='archive--listing-heading'>
    				<p className='title'>OUR MODELS</p>
    				<h2>Explore Our Models</h2>
    			</div>
    			<ModelTypes />
          <div className='influencer-listing'>
            {/*<a className='button nav--list-item influencer-link' href='#child-listing'>Test</a>*/}
            {adults && !!adults.length &&
              <Fragment>
                <h3>Adults</h3>
                <div className='section--model-list-items'>
                  {adults.map(({ name, featuredImage, instagram }, index) => {
                    return <div key={`influencer-${index}`} className='section--model-list-item'>
                      <p className='name-rotate'>{name}</p>
                      <a className='section--model-list-item-link' href={instagram} target='_blank' rel='noopener'>
                        {featuredImage && <BackgroundImage src={featuredImage} imageSize='600' />}
                        <p className='category title'>influencers</p>
                        {name && <h3>{name}</h3>}
                      </a>
                    </div>
                  })}
                </div>
              </Fragment>
            }
            {children && !!children.length &&
              <Fragment>
                <h3>Children</h3>
                <div className='section--model-list-items' id='child-listing'>
                  {children.map(({ name, featuredImage, instagram }, index) => {
                    return <div key={`influencer-${index}`} className='section--model-list-item'>
                      <p className='name-rotate'>{name}</p>
                      <a className='section--model-list-item-link' href={instagram} target='_blank' rel='noopener'>
                        {featuredImage && <BackgroundImage src={featuredImage} imageSize='600' />}
                        <p className='category title'>influencers</p>
                        {name && <h3>{name}</h3>}
                      </a>
                    </div>
                  })}
                </div>
              </Fragment>
            }
          </div>
    		</div>
    	</section>
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
      frontmatter {
        title
        subTitle
        featuredImage
        influencerList {
          featuredImage
          instagram
          name
          type
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
