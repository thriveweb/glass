import React from 'react'
import './SinglePost.css'

import Content from './Content'

export default({ post }) => {
	const { title, collection, author, date, content } = post

	return <section className='section--single-post'>
			<div className='container'>
				<div className='section--single-post-heading'>
					{collection && <p className='title'>{collection}</p>}
					{title && <h1>{title}</h1>}
				</div>
				<div className='section--single-post-info'>
					{author && <p className='author title'>{author}</p>}
					<span className='title'>|</span>
					{date && <p className='date title'>{date}</p>}
				</div>
				{content && <Content source={content} />}
			</div>
		</section>
}