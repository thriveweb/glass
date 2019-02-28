import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import './FeaturedPosts.css'

import { Link } from 'gatsby'

import BackgroundImage from './BackgroundImage'

export default({ posts }) => {

	return <div className='section--featured-posts-items'>
		{posts && !!posts.length && posts.reverse().map(({ node }, index) => {
			const { frontmatter = {} } = node
			const { collection, title, image, author, date } = frontmatter


			return <Link key={index} className='section--featured-posts-item' to={`/blog-post/${_kebabCase(title)}`}>
				{image  && <BackgroundImage src={image} imageSize={400} />}
				<div className='section--featured-posts-item-content'>
					{collection && <p className='post-category'>{collection}</p>}
					{title && <h3>{title}</h3> }
					<div className='section--featured-posts-item-info'>
						{author && <p className='author title'>{author}</p>}
						<span className='title'>|</span>
						{date && <p className='date title'>{date}</p>}
					</div>
				</div>
			</Link>
		})}
	</div>
}
