import React from 'react'

import Banner from '../components/Banner'
import SinglePost from '../components/SinglePost'

export default ({ fields }) => {
  const { featuredImage } = fields

  return (
    <div className='Contact'>
      <Banner image={featuredImage} title=' ' />
      <SinglePost post={fields} showShareButtons={false} />
    </div>
  )
}
