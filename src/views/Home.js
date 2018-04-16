import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionIntro from '../components/SectionIntro'
import SectionColumns from '../components/SectionColumns'
import SectionContact from '../components/SectionContact'

export default ({ page, globalSettings }) => {
  const { featuredImage, title, intro, galleryImages, columns, contact } = page
  const { phone, address, email, latitude, longitude } = globalSettings

  return (
    <main className='Home'>
      <Banner image={featuredImage} heading={title} address={address} phone={phone} />
      <SectionIntro title={intro.title} content={intro.content} buttonText={intro.buttonText} buttonUrl={intro.buttonUrl} />
      <ImageGallery galleryItems={galleryImages} />
      <SectionColumns columns={columns} />
      <SectionContact title={contact.title} address={address} introContent={contact.introContent} infoItems={contact.infoItems} latitude={latitude} longitude={longitude} />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}

