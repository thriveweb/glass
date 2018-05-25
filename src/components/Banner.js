import React from 'react'
import './Banner.css'

import { slugify } from '../util/url'
import { Link } from 'react-router-dom'
import BackgroundImage from './BackgroundImage'
import LazyImage from './LazyImage'


export default ({image, title, subTitle, content, buttonText, buttonUrl}) => (

	<section className='section--banner relative'>
		{image && <BackgroundImage src={image} imageSize='1800' />}
		<div className='container relative'>
			{subTitle && <p className='title'>{subTitle}</p>}
			{title ? <h1>{title}</h1> : <LazyImage src="/images/uploads/logo-white.png" alt="logo"/>}
			{content && <p className='section--banner-content'>{content}</p>}
			{buttonUrl && buttonText && <Link className='button' to={slugify(`/${buttonUrl}`)}>{buttonText}</Link>}
		</div>
	</section>
)