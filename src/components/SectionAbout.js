import React from 'react'
import './SectionAbout.css'

import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'


export default ({ about }) => {
	
	const { image, title, subTitle, content, buttonText, buttonUrl } = about

	return <section className='section--about'>
			<div className='container'>
				{image && <LazyImage src={image} alt={title} imageSize='900' />}
				<div className='section--about-content'>
					{subTitle && <p className='title'>{subTitle}</p>}
					{title && <h2>{title}</h2>}
					{content && <p>{content}</p>}
					{buttonUrl && buttonText && <Link className='button' to={`${buttonUrl}`}>{buttonText}</Link>}
				</div>
			</div>
		</section>
}