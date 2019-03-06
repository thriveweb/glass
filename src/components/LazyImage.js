import React from 'react'
import PropTypes from 'prop-types'

import { getImageSrc, getImageSrcset } from '../util/getImageUrl'
import './LazyImage.css'

class LazyImage extends React.Component {
  // static defaultProps = {
  //   lazy: false,
  //   enableSrcset: true,
  //   imageSize: '300'
  // }
  //
  // state = {
  //   src: getImageSrc(
  //     this.props.src,
  //     this.props.lazy ? '10' : this.props.imageSize
  //   ),
  //   srcSet: this.props.lazy ? '' : getImageSrcset(this.props.src),
  //   dataSrc: getImageSrc(this.props.src, this.props.imageSize),
  //   dataSrcSet: getImageSrcset(this.props.src),
  //   loaded: !this.props.lazy
  // }
  //
  // handleIntersection = e => {
  //   if (e.isIntersecting) {
  //     const img = new Image()
  //     img.src = this.state.dataSrc
  //     img.onload = () => {
  //       this.setState({
  //         src: this.state.dataSrc,
  //         srcSet: this.state.dataSrcSet,
  //         loaded: true
  //       })
  //     }
  //   }
  // }
  //
  // componentWillReceiveProps (nextProps) {
  //   if (this.props.src === nextProps.src) return
  //   this.setState({
  //     src: getImageSrc(nextProps.src, '10'),
  //     srcSet: '',
  //     dataSrc: getImageSrc(nextProps.src, '300'),
  //     dataSrcSet: getImageSrcset(nextProps.src)
  //   })
  // }

  render () {
    const { sizes, lazy, onClick, alt, src} = this.props
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
