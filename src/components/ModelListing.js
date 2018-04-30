import React, { Component } from 'react'

import BackgroundImage from './BackgroundImage'
import ModelTypes from './ModelTypes'
import './ModelListing.css'

export default ({ models, modelTypes, title, subTitle, selectedModelType}) => {

	const filteredModels = [...models].filter(model => {
		return model.collection.toLowerCase() === selectedModelType.toLowerCase()
	})

	return <section className='section--models'>
		<div className='container'>
			<div className='section--model-list-heading'>
				<p className='title'>{subTitle}</p>
				<h2>{title}</h2>
			</div>	
			<ModelTypes modelTypes={modelTypes} selectedModelType={selectedModelType} />
			<div className='section--model-list-items'>
				{filteredModels.map((model, index) => {
					return <div key={`model-${index}`} className='section--model-list-item'> 
						<p className='name-rotate'>{model.firstName}</p>
						<a className='section--model-list-item-link' href='/'>
							<BackgroundImage src={`${model.image}`}  imageSize='600' />
							{ model.collection && <p className='category title'>{model.collection}</p> }
							<h3>{model.firstName} {model.lastName}</h3>
						</a>
					</div>
				})}
			</div>	
		</div>
	</section>
}