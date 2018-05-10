import React from 'react'

import Banner from '../components/Banner'
import ArchivePosts from '../components/ArchivePosts'

export default ({ page, posts, postCategories, selectedCategory = 'all', pageSearch }) => {
  const { featuredImage, title, subTitle } = page

  return (
    <main className='Blog'>
      <Banner
        image={featuredImage}
        title={title}
        subTitle={subTitle}
      />
      <ArchivePosts
        posts={posts}
        postCategories={postCategories}
        subTitle={subTitle}
        selectedCategory={selectedCategory}
        pageSearch={pageSearch}
      />
    </main>
  )
}
