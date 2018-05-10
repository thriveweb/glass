import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-id-swiper'

import BackgroundImage from './BackgroundImage'
import './SingleModel.css'


class AsNavFor extends Component {

      constructor(props) {
        super(props);
        this.state = {
          gallerySwiper: null,
          thumbnailSwiper: null
        };
    
        this.galleryRef = this.galleryRef.bind(this);
        this.thumbRef = this.thumbRef.bind(this);
      }
    
      componentWillUpdate(nextProps, nextState) {
        if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
          const { gallerySwiper, thumbnailSwiper } = nextState
    
          gallerySwiper.controller.control = thumbnailSwiper;
          thumbnailSwiper.controller.control = gallerySwiper;
        }
      }
    
      galleryRef(ref) {
        if (ref) this.setState({ gallerySwiper: ref.swiper })
      }
    
      thumbRef(ref) {
        if (ref) this.setState({ thumbnailSwiper: ref.swiper })
      }


	render() {
		const { firstName, lastName, modelSpecs, imagePortfolio, collection } = this.props

		const gallerySwiperParams = {

        }
    
        const thumbnailSwiperParams = {
          centeredSlides: true,
          slidesPerView: 4,
          touchRatio: 0.2,
          slideToClickedSlide: true,
        }

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
						<Slider 
							{...gallerySwiperParams} 
							ref={this.galleryRef}
						>
							{ imagePortfolio.map((portfolioItem, index) => {
								return <div key={`slider-${index}`} className='section--model-profile-slide'>
									<BackgroundImage src={portfolioItem.image} imageSize='910' />
								</div>
							})}
						</Slider>
						<Slider 
							{...thumbnailSwiperParams} 
							ref={this.thumbRef}
          				>
							{ imagePortfolio.map((portfolioItem, index) => {
								return <div key={`slider-nav-${index}`} className='section--model-profile-nav-slide'>
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