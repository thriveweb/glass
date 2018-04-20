import React, { Component } from 'react'
import './ImageGallery.css'
import Masonry from 'react-masonry-component';
import BackgroundImage from './BackgroundImage'


const masonryOptions = {
    transitionDuration: 0
};

class ImageGallery extends Component {
	render() {
		const { galleryItems } = this.props

		return (
			<section className='section--image-gallery'>
				<div className='container'>
					<div className='section--image-gallery-heading'>
						<p className='title'>Our Models</p>
						<h2>Explore Our Models</h2>
					</div>
					<Masonry
						className={'section--gallery-items'} // default ''
						elementType={'div'} // default 'div'
						options={masonryOptions} // default {}
						disableImagesLoaded={false} // default false
						updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
					>
						{galleryItems.map((galleryItem, index) => {
							return <a href='/' key={galleryItem.title} className='section--image-gallery-item'>
								{galleryItem.image ? <BackgroundImage src={galleryItem.image} imageSize='600' /> : ''}
								<h3>{galleryItem.title}</h3>
							</a>
						})}
					</Masonry>
				</div>	
			</section>
		)        
	}
}

export default ImageGallery