import React from 'react'
import Helmet from 'react-helmet'

import ModelListing from '../components/ModelListing'


export default ({ page }) => {
	const { title, featuredImage, models } = page

	return (
		<main className='Models'>
			<ModelListing 
				models={models}
			/>
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}