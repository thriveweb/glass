import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import './FeaturedPosts.css'

import FeaturedPost from './FeaturedPost'
import PostCategory from './PostCategory'

export default ({ posts, postCategories, subTitle, selectedCategory }) => {

	const filteredPosts = [...posts].filter(post => {
		const collectionName = _kebabCase(post.collection)

		return selectedCategory === 'all' || collectionName === selectedCategory.name
	})

	return <section className='section--featured-posts archive--posts'>
			<div className='container'>
				<div className='archive--listing-heading'>
					<p className='title'>{subTitle}</p>
					<h2>Read our Latest News</h2>
				</div>
				<PostCategory postCategories={postCategories} selectedCategory={selectedCategory} />
				{filteredPosts && <FeaturedPost posts={filteredPosts} />}
			</div>		
		</section>
}