import React from 'react'
import './FeaturedPosts.css'

import FeaturedPost from './FeaturedPost'


export default ({ featuredPosts, posts, postCategory, selectedCategory }) => {
	const { title, subTitle, blogPosts } = featuredPosts

	const featuredPostTitles = [...blogPosts].map(featuredPost => {
		return featuredPost.collection
	})

	const filteredPosts = [...posts].filter(post => {
		if(featuredPostTitles.indexOf(post.titles) > -1) {
			return post
		}
	})


	return !!filteredPosts.length && 
		<section className='section--featured-posts'>
			<div className='container'>
				<div className='featured-posts-heading'>
					{subTitle && <p className='title'>{subTitle}</p>}
					{title && <h2>{title}</h2> }
				</div>	
				<a className='archive-link title' href='/'>All News <span>&rarr;</span></a>
				<FeaturedPost posts={filteredPosts} />
			</div>
		</section>

}