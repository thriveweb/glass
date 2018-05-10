import React from 'react'
import './SinglePost.css'

import Content from './Content'
import { ICONFacebook, ICONTwitter, ICONLinkedin } from './Icons'

export default({ post }) => {
	const { title, collection, author, date, content } = post

	return <section className='section--single-post'>
			<div className='container'>
				<div className='post-container'>
					<ul className="share-buttons">
						<li className='title'>SHARE ON</li>
						<li><a href="https://www.facebook.com/sharer/sharer.php?u=&quote=" target="_blank" rel="noopener noreferrer" title="Share on Facebook"><ICONFacebook/></a></li>
						<li><a href="https://twitter.com/intent/tweet?source=&text=:%20" target="_blank" rel="noopener noreferrer" title="Tweet"><ICONTwitter/></a></li>
						<li><a href="http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source=" target="_blank" rel="noopener noreferrer" title="Share on LinkedIn"><ICONLinkedin/></a></li>
					</ul>
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
			</div>
		</section>
}