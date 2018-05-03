import React from 'react'
import './Blog.css'

import Banner from '../components/Banner'
import Posts from '../components/Posts'

export default ({ page, posts, postCategories }) => {
  const { featuredImage, title, subTitle } = page

  console.log(postCategories)

  return (
    <main className='Blog'>
      <Banner
        image={featuredImage}
        title={title}
        subTitle={subTitle}
      />
      <Posts
        posts={posts}
        postCategories={postCategories}
        subTitle={subTitle}
      />
    </main>
  )
}
