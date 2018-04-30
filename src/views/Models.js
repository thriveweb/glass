import React, { Component} from 'react'
import Helmet from 'react-helmet'

import ModelListing from '../components/ModelListing'
import Banner from '../components/Banner'

export default ({ page, modelTypes, selectedModelType, globalSettings }) => {
	const { title, subTitle, featuredImage, model } = page
	console.log(selectedModelType)
	return (
		<main className='Models'>
		    <Banner 
			    image={featuredImage}
			    heading={selectedModelType.name}
			    subHeading={subTitle} 
		    />
			<ModelListing 
				models={model}
				title={title}
				subTitle={subTitle}
				modelTypes={modelTypes}
				selectedModelType={selectedModelType.name}
			/>
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}

