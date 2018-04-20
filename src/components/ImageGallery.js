import React from 'react'
import './ImageGallery.css'
import Masonry from 'react-masonry-component';
import BackgroundImage from './BackgroundImage'


export default ({galleryItems}) => (
	<section className='section--image-gallery'>
		{galleryItems.map((galleryItem, index) => {
			return <div key={galleryItem.title} className='section--image-gallery-item section-image'>
				{galleryItem.image ? <BackgroundImage src={galleryItem.image} imageSize='550' /> : ''}
				<h3>{galleryItem.title}</h3>
			</div>
		})}
	</section>
)

	<Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
        {galleryItems}
    </Masonry>