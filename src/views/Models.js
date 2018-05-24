import React from 'react'
import Helmet from 'react-helmet'

import ModelListing from '../components/ModelListing'
import Banner from '../components/Banner'

export default ({ page, modelTypes, selectedModelType = {}, models }) => {
	const { title, subTitle } = page

	return (
		<main className='Models'>
		    <Banner 
			    image={selectedModelType.featuredImage}
			    title={selectedModelType.name}
			    subTitle={subTitle} 
		    />
				{!!models && (
					<ModelListing
						models={models}
						title={title}
						subTitle={subTitle}
						modelTypes={modelTypes}
						selectedModelType={selectedModelType.name}
					/>
				)}
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}

