import React from 'react'

import BackgroundImage from './BackgroundImage'

export default (image, title, subTitle, content, buttonText, buttonUrl) => {

	<section className='section--about'>
		<div className='container'>
			<BackgroundImage src={image} imageSize='600' />
			<div className='section--about-content'>
				<p className='title'>{title}</p>
				<h2>{subTitle}</h2>
				<p>{content}</p>
				<a href={`${buttonUrl}`}>{buttonText}</a>
			</div>
		</div>
	</section>
}