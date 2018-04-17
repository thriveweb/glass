import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, intro, galleryImages, columns, contact } = page
  const { phone, address, email, latitude, longitude } = globalSettings

  return (
    <main className='Home'>
      <Banner image={featuredImage} heading={title} address={address} phone={phone} />
      <ImageGallery galleryItems={galleryImages} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}

