import React from 'react'

import './SectionIntro.css'

export default ({title, content, buttonUrl, buttonText}) => (
	<section className='section--intro'>
		<div className='container'>
			<div className='section--intro-content'>
				{title ? <h2>{title}</h2> : ''}
				{content ? <p className='title-italic'>{content}</p> : ''}
			</div>
			{buttonUrl ? <a className='button' href={`${buttonUrl}`} target='_blank'>{buttonText}</a> : ''}
		</div>
	</section>
)