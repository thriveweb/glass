import React from 'react'
import './FeaturedPosts.css'

import { Link } from 'react-router-dom'
import FeaturedPost from './FeaturedPost'


export default ({ featuredPosts, posts, postCategory, selectedCategory }) => {
	const { title, subTitle, blogPosts } = featuredPosts

	const featuredPostTitles = [...blogPosts].map(featuredPost => {
		return featuredPost.collection
	})

	const filteredPosts = [...posts].filter(post  => {
		return featuredPostTitles.indexOf(post.title) > -1
	})

	return !!filteredPosts.length && 
		<section className='section--featured-posts'>
			<div className='container'>
				<div className='featured-posts-heading'>
					{subTitle && <p className='title'>{subTitle}</p>}
					{title && <h2>{title}</h2> }
				</div>	
				<Link className='archive-link title' to='/blog'>All News <span>&rarr;</span></Link>
				<FeaturedPost posts={filteredPosts} />
			</div>
		</section>

}