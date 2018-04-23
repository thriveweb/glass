import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionAbout from '../components/SectionAbout'
import SectionTestimonials from '../components/SectionTestimonials'
import SectionColumns from '../components/SectionColumns'
import FeaturedPosts from '../components/FeaturedPosts'
import SectionPartners from '../components/SectionPartners'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, content, buttonText, buttonUrl, gallery, about, testimonials, columns, featuredBlog, partners } = page


  return (
    <main className='Home'>
      <Banner 
        image={featuredImage}
        heading={title} 
        content={content} 
        buttonText={buttonText} 
        buttonUrl={buttonUrl} 
      />
      <ImageGallery
        title={gallery.title}
        subTitle={gallery.subTitle}
        galleryItems={gallery.galleryImages} 
      />
      <SectionAbout 
        image={about.image} 
        title={about.title} 
        subTitle={about.subTitle} 
        content={about.content} 
        buttonText={about.buttonText} 
        buttonUrl={about.buttonUrl} 
      />
      <SectionTestimonials
        title={testimonials.title}
        testimonials={testimonials.testimonial}
      />
      <SectionColumns
        columns={columns}
      />
      <FeaturedPosts
        title={featuredBlog.title}
        subTitle={featuredBlog.subTitle}
        blogPosts={featuredBlog.blogPosts}
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

