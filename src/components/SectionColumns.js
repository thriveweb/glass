import React from 'react'

import LazyImage from './LazyImage'
import './SectionColumns.css'

export default ({ columns }) =>

	<section className='section--columns'>
		{columns.map(column => {
			return <div key={`${column.title}`} className={`section--columns-item ${!column.leftAlign ? 'column-right' : ''}`}>
				<div className='container skinny'>
					{ column.image && <LazyImage src={`${column.image}`} alt={column.title} /> }
					<div className='section--columns-item-content'>
						{ column.title && <p className='title'>{column.title}</p> }
						{ column.content && <h2>{column.content}</h2> }
						{ column.buttonTitle && column.buttonUrl && <a className='button button-black' href={`${column.buttonUrl}`}>{column.buttonTitle}</a> }
					</div>
				</div>	
			</div>
		})}
	</section>
