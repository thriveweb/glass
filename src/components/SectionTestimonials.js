import React, {Component} from 'react'

import LazyImage from './LazyImage'
import './SectionTestimonials.css'
import {ICONQuotes} from './Icons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'


class SimpleSlider extends Component {
	render() {

		const {title, testimonials} = this.props

		const settings = {
		  dots: true,
		  infinite: true,
		  speed: 200,
		  fade: true,
		  cssEase: 'linear',
		  autoplay: true
	    };

		return (
			<section className='section--testimonials'>
				<div className='container'>
					<ICONQuotes />
					{ title && <p className='title'>{title}</p> }
					<Slider className='section--testimonials-slider' {...settings}>
						{ testimonials.map((testimonial, index) => {
							return <div key={`testimonial-${index}`} className='section--testimonials-item testimonial-slide'>
								{ testimonial.title && <h2>{testimonial.title}</h2> }
								{ testimonial.content && <p className='section--testimonials-item-content'>{testimonial.content}</p> }
								{ testimonial.logo && <LazyImage src={`${testimonial.logo}`} imageSize='300' /> }
								{ testimonial.name && <p className='title'>{testimonial.name}</p> }
							</div>
						})}
					</Slider>	
				</div>
			</section>
		)
	}
}

export default SimpleSlider