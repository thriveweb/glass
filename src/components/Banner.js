import React from 'react'

import BackgroundImage from './BackgroundImage'
import './Banner.css'

export default ({image, heading, address, phone}) => (

	<section className='section--banner relative'>
		{image ? <BackgroundImage src={image} imageSize='1800' /> : ''}
		<div className='container relative'>
			{heading ? <h1>{heading}</h1> : ''}
			<div className='section--banner-info'>
				{address ? <p className='title-italic'>{address}</p> : ''}
				{phone ? <a href={`tel:${phone}`}>{phone}</a> : ''}
			</div>
		</div>
	</section>
)