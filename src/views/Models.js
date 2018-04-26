import React from 'react'
import Helmet from 'react-helmet'

import ModelListing from '../components/ModelListing'
import Banner from '../components/Banner'

export default ({ page, modelTypes, globalSettings }) => {
	const { title, subTitle, featuredImage, model } = page

	return (
		<main className='Models'>
		    <Banner 
			    image={featuredImage}
			    subHeading={subTitle} 
		    />
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