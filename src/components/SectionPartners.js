import React from 'react'

import LazyImage from './LazyImage'
import './SectionPartners.css'

export default ({ partners }) =>
	<section className='section--partners'>
		<div className='container skinny'>
			{partners.map((partner, index) => {
				return <div key={`partner-${index}`} className='section--partners-icon'>
					<LazyImage src={`${partner.image}`} />
				</div>
			})}
		</div>
	</section>