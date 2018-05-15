import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import _sortBy from 'lodash/sortBy'
import BackgroundImage from './BackgroundImage'
import ModelTypes from './ModelTypes'
import './ModelListing.css'

export default ({ models, modelTypes, title, subTitle, selectedModelType}) => {

	const filteredModels = _sortBy(models,'firstName').filter(model => {
		return model.collection.toLowerCase() === selectedModelType.toLowerCase()
	})

	return <section className='section--models archive--listing'>
		<div className='container'>
			<div className='archive--listing-heading'>
				{subTitle && <p className='title'>{subTitle}</p>}
				{title && <h2>{title}</h2>}
			</div>	
			<ModelTypes modelTypes={modelTypes} selectedModelType={selectedModelType} />
			<div className='section--model-list-items'>
				{filteredModels.map((model, index) => {
					return <div key={`model-${index}`} className='section--model-list-item'> 
						<p className='name-rotate'>{model.firstName}</p>
						<a className='section--model-list-item-link' href={`/model/${_kebabCase(model.title)}`}>
							{model.imageThumbnail && <BackgroundImage src={model.imageThumbnail} imageSize='600' />}
							{ model.collection && <p className='category title'>{model.collection}</p> }
							{model.firstName && <h3>{model.firstName}</h3>}
						</a>
					</div>
				})}
			</div>	
		</div>
	</section>
}