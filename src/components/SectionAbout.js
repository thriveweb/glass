import React from 'react'

import LazyImage from './LazyImage'
import './SectionAbout.css'

export default ({ image, title, subTitle, content, buttonText, buttonUrl }) => 
	<section className='section--about'>
		<div className='container'>
			<LazyImage src={image} imageSize='800' />
			<div className='section--about-content'>
				<p className='title'>{title}</p>
				<h2>{subTitle}</h2>
				<p>{content}</p>
				<a className='button' href={`${buttonUrl}`}>{buttonText}</a>
			</div>
		</div>
	</section>