import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'

import BackgroundImage from './BackgroundImage'
import './SingleModel.css'


class AsNavFor extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	nav1: null,
	    	nav2: null
	    };
	}

	state = {
		nav1: null,
		nav2: null
	}

	componentDidMount() {
		this.setState ({
			nav1: this.slider1,
			nav2: this.slider2
		})
	}

	render() {
		const { firstName, lastName, modelSpecs, imagePortfolio, collection, selectedModelType } = this.props

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
						<Slider className='section--model-profile-slider'
							asNavFor={this.state.nav2}
          					ref={slider => (this.slider1 = slider)}
						>
							{ imagePortfolio.map((portfolioItem, index) => {
								return <div key={`slider-${index}`} className='section--model-profile-slide'>
									<BackgroundImage src={portfolioItem.image} imageSize='910' />
								</div>
							})}
						</Slider>
						<Slider className='section--model-profile-slider-nav center' 
							asNavFor={this.state.nav1}
          					ref={slider => (this.slider2 = slider)}
          					slidesToShow={imagePortfolio.length < 3 ? imagePortfolio.length : 3}
					        swipeToSlide={true}
					        focusOnSelect={true}

          				>
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

export default AsNavFor