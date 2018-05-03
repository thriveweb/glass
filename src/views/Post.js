import React from 'react'
import './Blog.css'

import Banner from '../components/Banner'
import SinglePost from '../components/SinglePost'

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
    </main>
  )
}