import React, { Component } from 'react'
import './ImageGallery.css'
import _kebabCase from 'lodash/kebabCase'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'
import BackgroundImage from './BackgroundImage'

const masonryOptions = {
    transitionDuration: 0
};

class ImageGallery extends Component {
  render () {
    const { gallery } = this.props
    const { galleryImages, title, subTitle } = gallery

    return (
      <section className='section--image-gallery'>
        <div className='container'>
          <div className='section--image-gallery-heading'>
            {subTitle && <p className='title'>{subTitle}</p>}
            {title && <h2>{title}</h2>}
          </div>
          <Masonry
            className={'section--gallery-items'} // default ''
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
          >
            {galleryImages.map((galleryItem, index) => {
              return (
                <Link
                  to={`/models/${_kebabCase(galleryItem.title)}`}
                  key={galleryItem.title}
                  className='section--image-gallery-item'
                >
                  {galleryItem.image && (
                    <BackgroundImage
                      src={galleryItem.image}
                      imageSize={window.innerWidth}
                    />
                  )}
                  <h3 className='title-fancy'>{galleryItem.title}</h3>
                </Link>
              )
            })}
          </Masonry>
        </div>
      </section>
    )
  }
}

export default ImageGallery
