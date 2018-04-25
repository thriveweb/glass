import React from 'react'
import Helmet from 'react-helmet'

import ModelListing from '../components/ModelListing'
import ModelTypes from '../components/ModelTypes'

export default ({ page }) => {
	const { title, featuredImage, model } = page
	const { title } = modelTypes

	return (
		<main className='Models'>
			<ModelListing 
				models={model}
			/>
			<ModelTypes
				title={title}
			/>
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}