import React from 'react'

import Banner from '../components/Banner'
import ContactInfo from '../components/ContactInfo'


export default({ page, globalSettings }) => {
	const { featuredImage, title, subTitle } = page

	return <div className='Contact'>
		<Banner
			image = {featuredImage}
			title = {title}
			subTitle = {subTitle}
		/>
		<ContactInfo
			globalSettings= {globalSettings}
		/>
	</div>
}