import React from 'react'
import './BackgroundImage.css'

export default ({
  className, contain, opacity, src, size, imageSize
}) => {
  let imgSrc = src

  if(imageSize) {
    imgSrc = src.includes('imgix')
      ? `${imgSrc.replace('webp', 'png')}?auto=compress,format&w=${imageSize}&fm=png`
      : `${imgSrc}-/resize/${imageSize}x/`
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
