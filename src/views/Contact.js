import React from 'react'

import Banner from '../components/Banner'
import ContactInfo from '../components/ContactInfo'

export default ({ fields, globalSettings }) => {
  const { featuredImage, title, subTitle } = fields

  return (
    <div className='Contact'>
      <Banner image={featuredImage} title={title} subTitle={subTitle} />
      <ContactInfo globalSettings={globalSettings} />
    </div>
  )
}
