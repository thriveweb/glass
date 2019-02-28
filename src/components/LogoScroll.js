import React from 'react'

import { getImageSrc } from '../util/getImageUrl'
import './Logo.css'

export default ({ inverted }) => (
  <div
    className='Logo LogoScroll'
    style={{
      backgroundImage: `url(https://glassmanagement.imgix.net/images/uploads/logo-black.png?auto=compress,format&w=200)`
    }}
  />
)
