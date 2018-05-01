import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import BackgroundImage from './BackgroundImage'
import './SingleModel.css'


class SimpleSlider extends Component {

	render() {
		const { firstName, lastName, modelSpecs, imagePortfolio, collection, selectedModelType } = this.props

		var settingsFor = {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-nav'
	    };

	    var settingsNav = {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false,
		  arrows: true,
		  centerMode: true,
		  focusOnSelect: true
	    };

	    return (		
		    <section className='section--model-profile'>
				<div className='container'>
					<Link className='archive-link title' to={`/models/${collection.toLowerCase()}`}>Back to All</Link>
					<div className='section--model-profile-info'>
						{ firstName && lastName && <h2>{firstName} {lastName}</h2> }
						{ collection && <p className='category title'>{collection}</p> }
						{ modelSpecs.map((spec, index) => {
							return <div key={`spec-${index}`} className='section--model-profile-spec-info'>
								<p className='spec-title title'>{spec.title}</p>
								<p className='spec-content'>{spec.content}</p>
							</div>
						})}
					</div>
					<div className='section--model-profile-images'>
						<Slider className='section--model-profile-slider slider-for' {...settingsFor}>
							{ imagePortfolio.map((portfolioItem, index) => {
								return <div key={`slider-${index}`} className='section--model-profile-slide'>
									<BackgroundImage src={portfolioItem.image} />
								</div>
							})}
						</Slider>
						<Slider className='section--model-profile-slider-nav slider-nav' {...settingsNav}>
							{ imagePortfolio.map((portfolioItem, index) => {
								return <div key={`slider-nav-${index}`} className='section--model-profile-slide'>
									<BackgroundImage src={portfolioItem.image} />
								</div>
							})}
						</Slider>
					</div>	
				</div>
			</section>
		)
	}
}

export default SimpleSlider