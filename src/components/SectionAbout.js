import React from 'react'
import './SectionAbout.css'

import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'


export default ({ about }) => {
	
	const { image, title, subTitle, content, buttonText, buttonUrl } = about

	return <section className='section--about'>
			<div className='container'>
				<LazyImage src={image} alt={title} imageSize='800' />
				<div className='section--about-content'>
					<p className='title'>{subTitle}</p>
					<h2>{title}</h2>
					<p>{content}</p>
					<Link className='button' to={`${buttonUrl}`}>{buttonText}</Link>
				</div>
			</div>
		</section>
}