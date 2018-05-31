import React, { Component } from 'react'
// import _kebabCase from 'lodash/kebabCase'
import './FeaturedPosts.css'

import FeaturedPost from './FeaturedPost'
// import PostCategory from './PostCategory'
// import Pagination from './Pagination'


class Posts extends Component {
	render() {
		const { posts, subTitle } = this.props

		// const filteredPosts = [...posts].filter(post => {
		// 	const collectionName = _kebabCase(post.collection)
		// 	return selectedCategory === 'all' || collectionName === selectedCategory.name
		// })

		// const pageNumber = pageSearch ? parseInt(pageSearch.replace('?page=', '')) : 1
		// const paginatedPosts = filteredPosts.slice((9 * (pageNumber - 1)), (9 * pageNumber))

		// <Pagination 
			// items={filteredPosts}
			// itemsPer={9}
			// pageNumber={pageNumber}
			// history={history}
		// />

		// <PostCategory postCategories={postCategories} selectedCategory={selectedCategory} />

		return <section className='section--featured-posts archive--posts'>
			<div className='container'>
				<div className='archive--listing-heading'>
					<p className='title'>{subTitle}</p>
					<h2>Read our Latest News</h2>
				</div>
				{posts && <FeaturedPost posts={posts} />}
			</div>		
		</section>
	}
}  

export default ( Posts )


