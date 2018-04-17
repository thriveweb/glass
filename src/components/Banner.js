import React from 'react'

import BackgroundImage from './BackgroundImage'
import './Banner.css'

export default ({image, heading, content, buttonText, buttonUrl}) => (

	<section className='section--banner relative'>
		image && <BackgroundImage src={image} imageSize='1800' />
		<div className='container relative'>
			heading && <h1>{heading}</h1>
			content && <p>{content}</p>
			<div className='section--banner-info'>
				buttonUrl && buttonText && <a href={`${buttonUrl}`}>{buttonText}</a>
			</div>
		</div>
	</section>
)