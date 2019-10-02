import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import BackgroundImage from './BackgroundImage'
import ModelTypes from './ModelTypes'
import { Link } from 'gatsby'

import './ModelListing.css'

export default ({ models = [], title, subTitle }) => {

	return <section className='section--models archive--listing'>
		<div className='container'>
			<div className='archive--listing-heading'>
				{subTitle && <p className='title'>{subTitle}</p>}
				{title && <h2>{title}</h2>}
			</div>
			<ModelTypes />
			<div className='section--model-list-items'>
				{models.edges && !!models.edges.length && models.edges.map(({ node }, index) => {
					const { frontmatter } = node
					const { firstName, title, imageThumbnail, collection } = frontmatter


					return <div key={`model-${index}`} className='section--model-list-item'>
						<p className='name-rotate'>{firstName}</p>
						<Link className='section--model-list-item-link' to={`/model/${_kebabCase(title)}`}>
							{imageThumbnail && <BackgroundImage src={imageThumbnail} imageSize='600' />}
							{collection && <p className='category title'>{collection}</p>}
							{firstName && <h3>{firstName}</h3>}
						</Link>
					</div>
				})}
			</div>
		</div>
	</section>
}
