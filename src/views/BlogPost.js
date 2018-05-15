import React from 'react'

import Banner from '../components/Banner'
import SinglePost from '../components/SinglePost'
import SectionPartners from '../components/SectionPartners'

export default ({ page, post, globalSettings }) => {

  return (
    <main className='single-post'>
      <Banner
        image={post.image}
        title={' '}
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