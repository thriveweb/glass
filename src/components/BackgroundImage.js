import React from 'react'
import './BackgroundImage.css'

export default ({
  className, contain, opacity, src, size, imageSize
}) => {
  let imgSrc = src

  if(imageSize) {
    if(src && src.includes('imgix')) {
      imgSrc = imgSrc.includes('webp')
        ? `${imgSrc.replace('https://glassmanagement.imgix.net/images/uploads/', 'https://glassmanagement.imgix.net/images/uploads/resized/')}.png?auto=compress,format&w=${imageSize}&fm=png`
        : `${imgSrc}?auto=compress,format&w=${imageSize}&fm=png`
    } else {
      imgSrc = `${imgSrc}-/resize/${imageSize}x/`
    }
  }

  return <div
    className={`BackgroundImage absolute ${className}`}
    style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: contain ? 'contain' : 'cover',
      opacity: opacity
    }}
  />
}
