import React from 'react'

import BackgroundImage from './BackgroundImage'
import Content from './Content'
import './SectionServices.css'

export default ({subTitle, title, content, serviceItems}) =>

	<section className='section--services'>
		<div className='container'>
			<div className='section--services-heading'>
				{ subTitle && <p className='title'>{subTitle}</p> }
				{ title && <h2>{title}</h2> }
				{ content && <p>{content}</p> }
			</div>
			<div className='section--services-items'>
				{ serviceItems.map(service => {
					return <div className='section-services-item'>
						{ service.image && <BackgroundImage src={service.image} /> }
						{ service.title && <h3 className='title-fancy'>{service.title}</h3> }
						<div className='section-services-item-popup'>
							{ service.title && <h3>{service.title}</h3> }
							<p>Service Provided</p>
							{ service.content && <Content source={service.content} /> }
						</div>
					</div>
				})}
			</div>
		</div>
	</section>