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

		var settings = {
	      dots: false,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };

		return (
			<Slider className='section--testimonials' {...settings}>
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
			</Slider>
		)
	}
}

export default SimpleSlider