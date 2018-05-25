import React from 'react'

import Banner from '../components/Banner'
import SinglePost from '../components/SinglePost'

export default ({ page }) => {
  const { featuredImage } = page

  return (
    <div className='Contact'>
      <Banner image={featuredImage} title=' ' />
      <SinglePost post={page} showShareButtons={false} />
    </div>
  )
}
