import React, {Component} from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'

export default ({ page, modelTypes, selectedModelType, globalSettings, model }) => {
	const { title, subTitle, featuredImage, firstName, lastName, modelSpecs, imagePortfolio } = model

	return (
		<main className='Model'>
		    <Banner 
			    image={featuredImage}
			    heading={firstName}
			    subHeading={subTitle} 
		    />
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}
