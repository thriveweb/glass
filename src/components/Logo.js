import React from 'react'

import { getImageSrc } from '../util/getImageUrl'
import './Logo.css'

export default ({ inverted }) => (
  <div
    className='Logo'
    style={{
      backgroundImage: `url("https://glassmanagement.imgix.net/images/uploads/logo-white.png?auto=compress,format&w=200")`
    }}
  />
)
