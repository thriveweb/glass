import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-id-swiper'

import BackgroundImage from './BackgroundImage'
import './SingleModel.css'


class AsNavFor extends Component {

      state = {

      }
    
      galleryRef(ref) {
        if (ref) this.setState({ gallerySwiper: ref.swiper })
      }
    
      thumbRef(ref) {
        if (ref) this.setState({ thumbnailSwiper: ref.swiper })
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
						<div className='profile-images-nav'>
							{imagePortfolio.map((portfolioItem, index) => {
								return <div key={`slider-nav-${index}`} className='section--model-profile-nav-slide'>
									<BackgroundImage src={portfolioItem.image} />
								</div>
							})}
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
