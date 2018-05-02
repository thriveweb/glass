import React from 'react'

import BackgroundImage from './BackgroundImage'
import './FeaturedPosts.css'

export default ({ title, subTitle, blogPosts, posts, postCategory, selectedCategory }) =>
	<section className='section--featured-posts'>
		<div className='container'>
			<div className='featured-posts-heading'>
				{ subTitle && <p className='title'>{subTitle}</p> }
				{ title && <h2>{title}</h2> }
			</div>	
			<a className='archive-link title' href='/'>All News <span>&rarr;</span></a>
			<div className='section--featured-posts-items'>
				{ blogPosts.map((blogPost, index) => {
					return <a key={`post-${index}`} className='section--featured-posts-item' href='/'>
						<div className='section--featured-posts-item-content'>
							{ selectedCategory && <p className='post-category'>{selectedCategory}</p> }
							{ blogPost.title && <h3>{blogPost.title}</h3> }
							<div className='section--featured-posts-item-info'>
								{ blogPost.author && <p className='author title'>{blogPost.author}</p> }
								<span className='title'>|</span>
								{ blogPost.date && <p className='date title'>{blogPost.date}</p> }
							</div>
						</div>
					</a>
				})}
			</div>
		</div>
	</section>