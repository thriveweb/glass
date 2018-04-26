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
		let { models, modelTypes, title, subTitle } = this.props
		const { selectedCollection } = this.state

		if(selectedCollection) {
			models = models.filter(model => {
				return model.collection === selectedCollection
			})
		}

		return (
			<section className='section--models'>
				<div className='container'>
					<div className='section--model-list-heading'>
						<p className='title'>{title}</p>
						<h2>{subTitle}</h2>
					</div>	
					<ModelTypes modelTypes={modelTypes} handleSelect={this.selectCollection} />
					<div className='section--model-list-items'>
						{models.map((model, index) => {
							return <a key={`model-${index}`} className='section--model-list-item' href='/'>
								<div className='name-rotate'>
									<p>{model.firstName}</p>
								</div>	
								<BackgroundImage src={`${model.image}`}  imageSize='600' />
								{ model.collection && <p className='category title'>{model.collection}</p> }
								<h3>{model.firstName} {model.lastName}</h3>
							</a>
						})}
					</div>	
				</div>
			</section>
		)
	}
}




export default ModelListing


