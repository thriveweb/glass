import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-id-swiper'

import BackgroundImage from './BackgroundImage'
import './SingleModel.css'


class AsNavFor extends Component {
	constructor(props) {
		super(props)
		this.slideNavRef = React.createRef()

		this.state = {
			activeModel: 0
		}
	}

	handleSlideNav = (direction) => {
		const sliderNav = this.slideNavRef.current
		const sliderWidth = sliderNav.offsetWidth

		const scrollPos = direction 
			? sliderNav.scrollLeft + sliderWidth
			: sliderNav.scrollLeft - sliderWidth

		sliderNav.scroll({
		  top: 0, 
		  left: scrollPos, 
		  behavior: 'smooth' 
		})
	}
	

	render() {
		const { firstName, lastName, modelSpecs, imagePortfolio, collection } = this.props

	    return (		
		    <section className='section--model-profile'>
				<div className='container'>
					<Link className='archive-link title' to={`/models/${collection.toLowerCase()}`}><span>&larr;</span> Back to All</Link>
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
						<div className='portfolio-images-slider'>
							{imagePortfolio.map((portfolioItem, index) => {
								return <div 
									key={`slider-nav-${index}`} 
									className={`section--model-profile-slide ${this.state.activeModel === index 
										? 'active'
										: ''
									}`}
								>
									<BackgroundImage src={portfolioItem.image} />
								</div>
							})}
						</div>
						<div className='profile-images-nav' ref={this.slideNavRef}>
							{imagePortfolio.map((portfolioItem, index) => {
								return <div 
									key={`slider-nav-${index}`} 
									className='section--model-profile-nav-slide'
									onClick={() => this.setState({activeModel: index})}
								>
									<BackgroundImage src={portfolioItem.image} />
								</div>
							})}
						</div>
						<div className='navigation'>
							<span className='nav-link' onClick={() => this.handleSlideNav(0)}>&#8592;</span>
							<span className='nav-link' onClick={() => this.handleSlideNav(1)}>&#8594;</span>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default AsNavFor


// { imagePortfolio.map((portfolioItem, index) => {
// 							return <div key={`slider-${index}`} className='section--model-profile-slide'>
// 								<BackgroundImage src={portfolioItem.image} imageSize='910' />
// 							</div>
// 						})}
