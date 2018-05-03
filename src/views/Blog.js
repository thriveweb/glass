import React from 'react'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import PostCategoriesNav from '../components/PostCategoriesNav'
import PostSection from '../components/PostSection'
import Banner from '../components/Banner'

import './Blog.css'

export default ({ page, posts, postCategories, showFeatured = true }) => {
  posts = _sortBy(posts, ['date']).reverse()

  const { featuredImage, title, subTitle } = page

  return (
    <main className='Blog'>
      <Banner
        featuredImage={featuredImage}
        title={title}
        subTitle={subTitle}
      />

    </main>
  )
}
