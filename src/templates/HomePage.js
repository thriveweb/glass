import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

// Components
import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionAbout from '../components/SectionAbout'
import SectionTestimonials from '../components/SectionTestimonials'
import SectionColumns from '../components/SectionColumns'
import FeaturedPosts from '../components/FeaturedPosts'
import SectionPartners from '../components/SectionPartners'

export const HomePageTemplate = ({
  subTitle,
  featuredImage,
  featuredVideo,
  featuredVideoMobile,
  content,
  buttonText,
  buttonUrl,
  gallery,
  about,
  testimonials,
  columns,
  posts,
  featuredPosts,
  partners,
  meta
}) => {

  return (
    <main className="Home">
      <Helmet defaultTitle={_get(meta, 'title') || `Glass Management`}>
        {meta && <meta name="description" content={meta.description} />}
        {meta && <link rel="canonical" href={meta.canonicalLink} />}
        {meta && meta.noindex && <meta name="robots" content="noindex" />}
      </Helmet>
      <Banner
        image={featuredImage}
        subTitle={subTitle}
        content={content}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        featuredVideo={featuredVideo}
        featuredVideoMobile={featuredVideoMobile}
      />
      <ImageGallery gallery={gallery} />
      <SectionAbout about={about} />
      <SectionTestimonials testimonials={testimonials} />
      <SectionColumns columns={columns} />
      {posts && <FeaturedPosts
        posts={posts}
        featuredPosts={featuredPosts}
        homePosts
      />}
      <SectionPartners partners={partners} />
    </main>
  )
}

// Export Default HomePage for front-end
const HomePage = ({ data: { page, posts, settingsYaml } }) => (
  <Layout>
    <HomePageTemplate
      {...page.frontmatter}
      {...settingsYaml}
      posts={posts}
    />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        subTitle
        featuredImage
        featuredVideo
        featuredVideoMobile
        content
        buttonText
        buttonUrl
        gallery {
          galleryImages {
            image
            title
          }
          subTitle
          title
        }
        about {
          image
          subTitle
          content
          buttonText
          buttonUrl
          title
        }
        testimonials {
          title
          testimonial {
            content
            logo
            name
            title
          }
        }
        featuredPosts {
          subTitle
          title
          blogPosts {
            collection
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
