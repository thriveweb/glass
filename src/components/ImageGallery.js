import React, { Component } from 'react'
import './ImageGallery.css'
import _kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'

// import Masonry from 'react-masonry-component'
import BackgroundImage from './BackgroundImage'

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
          {galleryImages && galleryImages.map((galleryItem, index) => {
            return (
              <Link
                to={`/models/${_kebabCase(galleryItem.title)}`}
                key={galleryItem.title}
                className='section--image-gallery-item'
                onClick={() => window.scrollTo(0,0)}
              >
                {galleryItem.image && (
                  <BackgroundImage
                    src={galleryItem.image}
                  />
                )}
                <h3 className='title-fancy'>{galleryItem.title}</h3>
              </Link>
            )
          })}
        </div>
      </section>
    )
  }
}

export default ImageGallery
