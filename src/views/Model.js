import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import SingleModel from '../components/SingleModel'

export default ({ page, modelTypes, selectedModelType, globalSettings, model }) => {
	const { title, featuredImage, firstName, height, waist, bust, hips, size, hair, eyes, imagePortfolio, collection } = model

	return (
		<main className='Model'>
		    <Banner 
			    image={featuredImage}
			    title={firstName}
			    subTitle={'Model\'s Profile'} 
		    />
		    <SingleModel
		    	firstName={firstName}
		    	imagePortfolio={imagePortfolio}
		    	collection={collection}
		    	height={height}
		    	waist={waist}
		    	bust={bust}
		    	hips={hips}
		    	size={size}
		    	hair={hair}
		    	eyes={eyes}
		    />
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}
