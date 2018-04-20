import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, content, buttonText, buttonUrl } = page

  return (
    <main className='Home'>
      <Banner image={featuredImage} heading={title} content={content} buttonText={buttonText} buttonUrl={buttonUrl} />
      <ImageGallery />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}

