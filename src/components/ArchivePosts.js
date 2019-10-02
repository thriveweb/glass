import React, { Component } from 'react'
import './FeaturedPosts.css'

import FeaturedPost from './FeaturedPost'

class Posts extends Component {
	render() {
		const { posts, subTitle } = this.props

		return <section className='section--featured-posts archive--posts'>
			<div className='container'>
				<div className='archive--listing-heading'>
					<p className='title'>{subTitle}</p>
					<h2>Read our Latest News</h2>
				</div>
				{posts.edges && !!posts.edges.length && <FeaturedPost posts={posts.edges} />}
			</div>
		</section>
	}
}

export default ( Posts )
