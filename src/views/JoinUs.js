import React from 'react'
import './JoinUs.css'

import Banner from '../components/Banner'
import EnquiryFormSimple from '../components/EnquiryFormSimple'
import Content from '../components/Content'


export default ({ page }) => {
	const { featuredImage, title, subTitle, intro } = page

	return <div className='JoinUs'>
		<Banner
			image={featuredImage}
			title={title}
			subTitle={subTitle}
		/>
		<section className='section--join-us'>
			<div className='container'>
				<div className='section--join-us-intro'>
					{intro.title && <h2>{intro.title}</h2>}
					{intro.content && <Content source={intro.content} />}
				</div>
				<EnquiryFormSimple/>
			</div>
		</section>
	</div>
}