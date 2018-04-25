import React from 'react'
import Helmet from 'react-helmet'

import ModelListing from '../components/ModelListing'

export default ({ page, modelTypes }) => {
	const { title, subTitle, featuredImage, model } = page

	return (
		<main className='Models'>
			<ModelListing 
				models={model}
				title={title}
				subTitle={subTitle}
				modelTypes={modelTypes}
			/>
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}