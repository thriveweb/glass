import React from 'react'
import './Blog.css'

import Banner from '../components/Banner'
import Posts from '../components/Posts'

export default ({ page, posts, postCategories, selectedCategory = 'all' }) => {
  const { featuredImage, title, subTitle } = page

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
        selectedCategory={selectedCategory}
      />
    </main>
  )
}
