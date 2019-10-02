import React, {Component} from 'react'

import LazyImage from './LazyImage'
import './SectionTestimonials.css'
import {ICONQuotes} from './Icons'


import 'react-id-swiper/src/styles/css/swiper.css'
import Slider from 'react-id-swiper'
import Content from './Content'


class SimpleSlider extends Component {
	render() {

		const { testimonials } = this.props
		const { title, testimonial } = testimonials

		const settings = {
	      spaceBetween: 30,
	      effect: 'fade',
	      loop: true,
	      autoplay: {
	        delay: 8000,
	        disableOnInteraction: false
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true
	      },
	    };

		return (
			<section className='section--testimonials'>
				<div className='container'>
					<ICONQuotes />
					{title && <p className='title'>{title}</p>}
					<Slider className='section--testimonials-slider' {...settings}>
						{testimonial && !!testimonial.length && testimonial.map((singleTestimonial, index) => {
							return <div key={`testimonial-${index}`} className='section--testimonials-item testimonial-slide'>
								{singleTestimonial.title && <h2>{singleTestimonial.title}</h2>}
								{singleTestimonial.content && <Content className='section--testimonials-item-content' source={singleTestimonial.content}/>}
								{singleTestimonial.logo && <LazyImage src={`${singleTestimonial.logo}`} alt={title} imageSize='300' />}
								{singleTestimonial.name && <p className='title'>{singleTestimonial.name}</p>}
							</div>
						})}
					</Slider>	
				</div>
			</section>
		)
	}
}

export default SimpleSlider