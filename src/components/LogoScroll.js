import React from 'react'

import { getImageSrc } from '../util/getImageUrl'
import './Logo.css'

export default ({ inverted }) => (
  <div
    className='Logo LogoScroll'
    style={{
      backgroundImage: `url(${getImageSrc(
        '/images/uploads/logo-black.png',
        200
      )})`
    }}
  />
)
