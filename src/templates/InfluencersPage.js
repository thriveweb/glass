import React from 'react'
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
    			<div className='section--model-list-items'>
    				{influencerList && !!influencerList.length && influencerList.map(({ name, featuredImage, instagram }, index) => {

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
