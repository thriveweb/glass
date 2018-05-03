import React from 'react'
import './FeaturedPost.css'

import BackgroundImage from './BackgroundImage'

export default({ posts }) =>

	<div className='section--featured-posts-items'>	
		{posts.map((post, index) => {
			return <a key={index} className='section--featured-posts-item' href='/'>
				<BackgroundImage src={post.image} />
				<div className='section--featured-posts-item-content'>
					{ post.collection && <p className='post-category'>{post.collection}</p> }
					{ post.title && <h3>{post.title}</h3> }
					<div className='section--featured-posts-item-info'>
						{ post.author && <p className='author title'>{post.author}</p> }
						<span className='title'>|</span>
						{ post.date && <p className='date title'>{post.date}</p> }
					</div>
				</div>
			</a>
		})}
	</div>