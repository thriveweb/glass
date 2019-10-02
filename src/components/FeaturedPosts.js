import React from 'react'
import './FeaturedPosts.css'

import { Link } from 'gatsby'

import FeaturedPost from './FeaturedPost'


export default ({ featuredPosts = {}, posts = {}, homePosts }) => {
	const { title, subTitle, blogPosts } = featuredPosts

	const featuredPostTitles = [...blogPosts].map((featuredPost = {}) => {
		return featuredPost.collection
	})

	const filteredPosts = posts && posts.edges && !!posts.edges.length && posts.edges.filter(({ node }) => {
		const { frontmatter } = node
		const { title } = frontmatter

		return featuredPostTitles.indexOf(title) > -1
	})

	return filteredPosts && !!filteredPosts.length &&
		<section className={`section--featured-posts ${homePosts && 'home-posts'}`}>
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
