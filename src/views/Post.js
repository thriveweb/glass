import React from 'react'

import Banner from '../components/Banner'
import SinglePost from '../components/SinglePost'
import SectionPartners from '../components/SectionPartners'

export default ({ page, post, globalSettings }) => {
  const { title, image, author, collection, date, content } = post

  return (
    <main className='single-post'>
      <Banner
        image={image}
      />
      <SinglePost
        post={post}
      />
      <SectionPartners
        partners={globalSettings.partners}
      />
    </main>
  )
}