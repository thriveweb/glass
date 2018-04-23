import React from 'react'
import Helmet from 'react-helmet'


export default ({ page }) => {
	const { title } = page
	return (
		<main className='Models'>
			<Helmet>
        		<title>{title}</title>
      		</Helmet>
		</main>
	)
}