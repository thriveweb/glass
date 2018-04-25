import React, { Component } from 'react'

import BackgroundImage from './BackgroundImage'
import ModelTypes from './ModelTypes'
import './ModelListing.css'

class ModelListing extends Component {
	state = {
		selectedCollection: null
	}

	selectCollection = (collection) => {
		this.setState({
			selectedCollection: collection
		})
	}

	render() {
		let { models, modelTypes, title } = this.props
		const { selectedCollection } = this.state

		if(selectedCollection) {
			models = models.filter(model => {
				return model.collection === selectedCollection
			})
		}

		return (
			<section className='section--models-listing'>
				<div className='container'>
					<div className='model-list-heading'>
						<p className='title'>Our Models</p>
						<h2>{title}</h2>
						<ModelTypes modelTypes={modelTypes} handleSelect={this.selectCollection} />
					</div>	
					{models.map((model, index) => {
						return <a key={`model-${index}`} className='model-list-item' href='/'>
							<BackgroundImage src={`${model.image}`}  imageSize='600' />
							{ model.collection && <p className='category'>{model.collection}</p> }
							{ model.name && <h3>{model.name}</h3> }
						</a>
					})}
				</div>
			</section>
		)
	}
}




export default ModelListing


