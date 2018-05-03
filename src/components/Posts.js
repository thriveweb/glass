import React from 'react'
import './Posts.css'

import FeaturedPost from './FeaturedPost'
import PostCategory from './PostCategory'

export default ({ posts, postCategories, subTitle }) =>

	<section className='section--archive-posts'>
		<div className='container'>
			<div className='section--archive-posts-heading'>
				<p className='title'>{subTitle}</p>
				<h2>Read our Latest News</h2>
			</div>
			<PostCategory postCategories={postCategories} />
			<FeaturedPost posts={posts} />
		</div>		
	</section>