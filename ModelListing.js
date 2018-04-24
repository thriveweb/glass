import React from 'react'

import BackgroundImage from './BackgroundImage'

export default ({ models }) =>

	<section className='section--models-listing'>
		<div className='container'>
			{models.map(model => {
				return <a className='model-list-item' href='/'>
					<BackgroundImage src={`${model.image}`}  imageSize='600' />
					<p></p>
					<h2>{model.name}</h2>
				</a>
			})}
		</div>
	</section>