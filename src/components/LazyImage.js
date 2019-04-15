import React from 'react'
import PropTypes from 'prop-types'
import './LazyImage.css'

class LazyImage extends React.Component {

  render () {
    const { sizes, onClick, alt, src} = this.props
    let className = this.props.className || ''

    let imgSrc = src

    if(sizes) {
      if(src.includes('imgix')) {
        imgSrc = imgSrc.includes('webp')
          ? `${imgSrc.replace('https://glassmanagement.imgix.net/images/uploads/', 'https://glassmanagement.imgix.net/images/uploads/resized/')}.png?auto=compress,format&w=${sizes}&fm=png`
          : `${imgSrc}?auto=compress,format&w=${sizes}&fm=png`
      } else {
        imgSrc = `${imgSrc}-/resize/${sizes}x/`
      }
    }

    return <img
      className={`LazyImage ${className}`}
      src={imgSrc}
      sizes={sizes || '100vw'}
      onClick={onClick}
      alt={alt}
    />

  }
}

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired
}

export default LazyImage
