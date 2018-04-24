import React, { Component } from 'react'

import BackgroundImage from './BackgroundImage'
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
		let { models } = this.props
		const { selectedCollection } = this.state

		if(selectedCollection) {
			models = models.filter(model => {
				return model.collection === selectedCollection
			})
		}

		return (
			<section className='section--models-listing'>
				<div className='container'>
					<div className='model-list-nav'>
						<h2>Explore Our Models</h2>
						<ul>
							<li onClick={() => this.selectCollection(null)}>All</li>
							<li onClick={() => this.selectCollection('women')}>Women</li>
							<li onClick={() => this.selectCollection('men')}>Men</li>
							<li onClick={() => this.selectCollection('boys')}>Boys</li>
							<li onClick={() => this.selectCollection('girls')}>Girls</li>
						</ul>
					</div>
					{models.map((model, index) => {
						return <a key={`model-${index}`} className='model-list-item' href='/'>
							<BackgroundImage src={`${model.image}`}  imageSize='600' />
							<p className='category'>{model.collection}</p>
							<h2>{model.name}</h2>
						</a>
					})}
				</div>
			</section>
		)
	}
}








export default ModelListing



// export default ({ models }) =>

