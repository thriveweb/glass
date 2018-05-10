import React, { Component } from 'react'
import _kebabCase from 'lodash/kebabCase'
import './FeaturedPosts.css'

import FeaturedPost from './FeaturedPost'
import PostCategory from './PostCategory'
import Pagination from './Pagination'


class Posts extends Component {
	render() {
		const { posts, postCategories, subTitle, selectedCategory, pageSearch, history } = this.props

		const filteredPosts = [...posts].filter(post => {
			const collectionName = _kebabCase(post.collection)
			return selectedCategory === 'all' || collectionName === selectedCategory.name
		})

		const pageNumber = pageSearch ? parseInt(pageSearch.replace('?page=', '')) : 1
		const paginatedPosts = filteredPosts.slice((9 * (pageNumber - 1)), (9 * pageNumber))


		return <section className='section--featured-posts archive--posts'>
			<div className='container'>
				<div className='archive--listing-heading'>
					<p className='title'>{subTitle}</p>
					<h2>Read our Latest News</h2>
				</div>
				<PostCategory postCategories={postCategories} selectedCategory={selectedCategory} />
				{paginatedPosts && <FeaturedPost posts={paginatedPosts} />}
				<Pagination 
					items={filteredPosts}
					itemsPer={9}
					pageNumber={pageNumber}
					history={history}
				/>   
			</div>		
		</section>
	}
}

export default ( Posts )
