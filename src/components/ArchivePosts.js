import React, { Component } from 'react'
import _kebabCase from 'lodash/kebabCase'
import Pagination from "react-js-pagination";
import './FeaturedPosts.css'

import FeaturedPost from './FeaturedPost'
import PostCategory from './PostCategory'

class Posts extends Component {

	render() {
		const { posts, postCategories, subTitle, selectedCategory } = this.props

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
}

export default ( Posts )
