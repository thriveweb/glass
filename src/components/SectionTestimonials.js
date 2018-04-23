import React from 'react'

import LazyImage from './LazyImage'
import './SectionTestimonials.css'
import {ICONQuotes} from './Icons'


export default ({ title, testimonials }) =>
	<section className='section--testimonials'>
		<div className='container'>
			<ICONQuotes />
			{ title && <p className='title'>{title}</p> }
			<div className='section--testimonials-slider'>
				{ testimonials.map(testimonial => {
					return <div className='section--testimonials-item testimonial-slide'>
						{ testimonial.title && <h2>{testimonial.title}</h2> }
						{ testimonial.content && <p className='section--testimonials-item-content'>{testimonial.content}</p> }
						{ testimonial.logo && <LazyImage src={`${testimonial.logo}`} imageSize='300' /> }
						{ testimonial.name && <p className='title'>{testimonial.name}</p> }
					</div>
				})}
			</div>	
		</div>
	</section>