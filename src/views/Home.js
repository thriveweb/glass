import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionAbout from '../components/SectionAbout'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, content, buttonText, buttonUrl, galleryImages, about} = page


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
        galleryItems={galleryImages} 
      />
      <SectionAbout 
        image={about.image} 
        title={about.title} 
        subTitle={about.subTitle} 
        content={about.content} 
        buttonText={about.buttonText} 
        buttonUrl={about.buttonUrl} 
      />

      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}

