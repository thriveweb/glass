import React from 'react'

import BackgroundImage from './BackgroundImage'
import './FeaturedPosts.css'

export default ({ title, subTitle, blogPosts }) =>
	<section className='section--featured-posts'>
		<div className='container'>
			<div className='featured-posts-heading'>
				{ title && <p className='title'>{title}</p> }
				{ subTitle && <h2>{subTitle}</h2> }
			</div>	
			<a className='archive-link title' href='/'>All News <span>&rarr;</span></a>
			<div className='section--featured-posts-items'>
				{ blogPosts.map(blogPost => {
					return <a key={`${blogPost.title}`} className={`section--featured-posts-item ${!blogPost.topAlign ? 'post-reverse' : ''}`} href='/'>
						<BackgroundImage src={`${blogPost.image}`} ImageSize='400' />
						<div className='section--featured-posts-item-content'>
							{ blogPost.category && <p className='post-category'>{blogPost.category}</p> }
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