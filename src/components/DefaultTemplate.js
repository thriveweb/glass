import React from 'react'

import './DefaultTemplate.css'
import Content from './Content'

export default({title, contentSection}) => (
	<section className='section--default-template'>
		<div className='container'>
			{title ? <h1>{title}</h1> : ''}
			<div className='section--default-template-content'>
				{contentSection.map(content => {
					return<div key={`${content.heading}`} className='section--default-template-content-item'>
						{content.heading ? <h3>{content.heading}</h3> : ''}
						{content.content && <Content source={content.content}/>}
					</div>
				})}
			</div>
		</div>
	</section>
)

