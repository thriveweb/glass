import React from 'react'

import { getImageSrc } from '../util/getImageUrl'
import './Logo.css'

export default ({ inverted }) => (
  <div
    className='Logo'
    style={{
      backgroundImage: `url(${getImageSrc(
        '/images/uploads/logo-white.png',
        200
      )})`
    }}
  />
)
