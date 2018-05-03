import React, {Component} from 'react'

import LazyImage from './LazyImage'
import './SectionTestimonials.css'
import {ICONQuotes} from './Icons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'


class SimpleSlider extends Component {
	render() {

		const {testimonials} = this.props
		const { title, testimonial } = testimonials

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
						{ testimonial.map((singleTestimonial, index) => {
							return <div key={`testimonial-${index}`} className='section--testimonials-item testimonial-slide'>
								{ singleTestimonial.title && <h2>{singleTestimonial.title}</h2> }
								{ singleTestimonial.content && <p className='section--testimonials-item-content'>{singleTestimonial.content}</p> }
								{ singleTestimonial.logo && <LazyImage src={`${singleTestimonial.logo}`} imageSize='300' /> }
								{ singleTestimonial.name && <p className='title'>{singleTestimonial.name}</p> }
							</div>
						})}
					</Slider>	
				</div>
			</section>
		)
	}
}

export default SimpleSlider