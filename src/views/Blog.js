import React from 'react'

import Banner from '../components/Banner'
import ArchivePosts from '../components/ArchivePosts'

export default ({
  fields,
  posts,
  postCategories,
  selectedCategory = 'all',
  location,
  history
}) => {
  const { featuredImage, title, subTitle } = fields

  return (
    <main className='Blog'>
      <Banner image={featuredImage} title={title} subTitle={subTitle} />
      {!!posts && (
        <ArchivePosts
          posts={posts}
          postCategories={postCategories}
          subTitle={subTitle}
          selectedCategory={selectedCategory}
          pageSearch={location && location.search}
          history={history}
        />
      )}
    </main>
  )
}
