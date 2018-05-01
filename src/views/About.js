import React from 'react'

import Banner from '../components/Banner'
import './About.css'

export default ({ page, globalSettings }) => {
  const { title, subTitle, featuredImage } = page

  return (
    <div className='About'>
      <Banner
        heading={title}
        subHeading={subTitle}
        featuredImage={featuredImage}
      />
    </div>
  )
}
