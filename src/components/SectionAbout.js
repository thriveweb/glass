import React from 'react'
import './SectionAbout.css'

import { slugify } from '../util/url'
import { Link } from 'gatsby'

import LazyImage from './LazyImage'
import Content from './Content'

export default ({ about }) => {
  const { image, title, subTitle, content, buttonText, buttonUrl } = about

  return (
    <section className='section--about'>
      <div className='container'>
        {image && <LazyImage src={image} alt={title} />}
        <div className='section--about-content'>
          {subTitle && <p className='title'>{subTitle}</p>}
          {title && <h2>{title}</h2>}
          {content && <Content source={content} />}
          {buttonUrl &&
            buttonText && (
            <Link className='button' to={slugify(`/${buttonUrl}`)}>
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
