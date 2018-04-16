import React from 'react'
import './ImageGallery.css'
import BackgroundImage from './BackgroundImage'


export default ({galleryItems}) => (
	<section className='section--image-gallery'>
		{galleryItems.map((galleryItem, index) => {
			return [
				<div key={galleryItem.title} className={`section--image-gallery-item section-image ${galleryItem.imageRatio}`}>
					{galleryItem.image ? <BackgroundImage src={galleryItem.image} imageSize='550' /> : ''}
					<h3>{galleryItem.title}</h3>
				</div>,
				((index + 1) % 4 === 0 && index !== 0 ? <div className='line-break'></div> : '')
			]
		})}
	</section>
)