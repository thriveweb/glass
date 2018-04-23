import React, { Component } from 'react'

import LazyImage from './LazyImage'

class SectionColumns extends Component {
	render() {
		const { columns } = this.props

		return (
			<section className='section--columns'>
				<div className='container'>
					{columns.map(column => {
						return <div key={`${columns.title}`} className='section--columns-item'>
							{ column.image && <LazyImage src={`${column.image}`} /> }
							<div className='section--columns-item-content'>
								{ column.title && <p className='title'>{column.title}</p> }
								{ column.content && <h2>{column.content}</h2> }
								{ column.buttonTitle && column.buttonUrl && <a className='button button-black' href={`${column.buttonUrl}`}>{column.buttonTitle}</a> }
							</div>
						</div>
					})}
				</div>
			</section>
		)
	}
}

export default SectionColumns
