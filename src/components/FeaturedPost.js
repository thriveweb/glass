import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import './FeaturedPosts.css'

import BackgroundImage from './BackgroundImage'

export default({ posts }) => {

	return <div className='section--featured-posts-items'>	
		{posts.map((post, index) => {
			return <a key={index} className='section--featured-posts-item' href={`/blog-post/${_kebabCase(post.title)}`}>
				<BackgroundImage src={post.image} imageSize={400} />
				<div className='section--featured-posts-item-content'>
					{post.collection && <p className='post-category'>{post.collection}</p>}
					{post.title && <h3>{post.title}</h3> }
					<div className='section--featured-posts-item-info'>
						{post.author && <p className='author title'>{post.author}</p>}
						<span className='title'>|</span>
						{post.date && <p className='date title'>{post.date}</p>}
					</div>
				</div>
			</a>
		})}
	</div>
}