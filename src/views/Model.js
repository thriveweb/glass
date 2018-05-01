import React, {Component} from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import SingleModel from '../components/SingleModel'

export default ({ page, modelTypes, selectedModelType, globalSettings, model }) => {
	const { title, featuredImage, firstName, lastName, modelSpecs, imagePortfolio, collection } = model

	return (
		<main className='Model'>
		    <Banner 
			    image={featuredImage}
			    heading={firstName + ' ' + lastName}
			    subHeading={'Model\'s Profile'} 
		    />
		    <SingleModel
		    	firstName={firstName}
		    	lastName={lastName}
		    	modelSpecs={modelSpecs}
		    	imagePortfolio={imagePortfolio}
		    	collection={collection}
		    />
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}
