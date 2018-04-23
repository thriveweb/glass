import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionAbout from '../components/SectionAbout'
import SectionTestimonials from '../components/SectionTestimonials'
import SectionColumns from '../components/SectionColumns'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, content, buttonText, buttonUrl, gallery, about, testimonials, columns} = page


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
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}

