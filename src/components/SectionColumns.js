import React from 'react'

import './SectionColumns.css'
import BackgroundImage from './BackgroundImage'

export default ({columns}) => (
	<section className='section--columns'>
		<div className='container'>
			{columns.map((column, index) => {
				return <div key={`column-${index}`} className={`section--column--item ${!column.leftAlign ? 'column-right' : ''}`}>
					<div className='section--column-item-image-container'>
						{column.image ? <BackgroundImage src={column.image} imageSize='800' /> : ''}
					</div>
					<div className='section--column-item-content'>
						{column.category ? <h3>{column.category}</h3> : ''}
						{column.title ? <h2>{column.title}</h2> : ''}
						{column.subTitle ? <h4 className='title-italic'>{column.subTitle}</h4> : ''}
						{column.content ? <p>{column.content}</p> : ''}
					</div>
				</div>	
			})}
		</div>
	</section>
)