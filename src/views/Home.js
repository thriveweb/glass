import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionAbout from '../components/SectionAbout'
import SectionTestimonials from '../components/SectionTestimonials'
import SectionColumns from '../components/SectionColumns'
import FeaturedPosts from '../components/FeaturedPosts'
import SectionPartners from '../components/SectionPartners'

export default ({ page, globalSettings, posts, postCategories, selectedCategory }) => {
  const { featuredImage, title, subTitle, content, buttonText, buttonUrl, gallery, about, testimonials, featuredPosts } = page
  const { partners, columns } = globalSettings

  return (
    <main className='Home'>
      <Banner 
        image={featuredImage}
        subHeading={subTitle}
        heading={title} 
        content={content} 
        buttonText={buttonText} 
        buttonUrl={buttonUrl} 
      />
      <ImageGallery
        gallery={gallery}
      />
      <SectionAbout 
        about={about}
      />
      <SectionTestimonials
        testimonials={testimonials}
      />
      <SectionColumns
        columns={columns}
      />
      <FeaturedPosts
        featuredPosts={featuredPosts}
        posts={posts}
        postCategories={postCategories}
      />
      <SectionPartners
        partners={partners} 
      />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}

