import React from 'react'

import BackgroundImage from './BackgroundImage'
import './Banner.css'

export default ({image, title, subTitle, content, buttonText, buttonUrl}) => (

	<section className='section--banner relative'>
		{image && <BackgroundImage src={image} imageSize='1800' />}
		<div className='container relative'>
			{subTitle && <p className='title'>{subTitle}</p>}
			{title && <h1>{title}</h1>}
			{content && <p className='section--banner-content'>{content}</p>}
			{buttonUrl && buttonText && <a className='button' href={`${buttonUrl}`}>{buttonText}</a>}
		</div>
	</section>
)