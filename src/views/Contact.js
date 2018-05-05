import React from 'react'

import Banner from '../components/Banner'

export default({ page, globalSettings }) => {
	const { featuredImage, title, subTitle } = page
	const { phone, address, email, twitter, facebook, linkedin, instagram } = globalSettings


	return <div className='Contact'>
		<Banner
			image = {featuredImage}
			title = {title}
			subTitle = {subTitle}
		/>
	</div>
}