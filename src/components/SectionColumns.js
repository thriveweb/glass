import React from 'react'
import './SectionColumns.css'

import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'


export default ({ columns }) =>

	<section className='section--columns'>
		{columns.map(column => {
			return <div key={`${column.title}`} className={`section--columns-item ${!column.leftAlign ? 'column-right' : ''}`}>
				<div className='container skinny'>
					{column.image && <LazyImage src={`${column.image}`} alt={column.title} />}
					<div className='section--columns-item-content'>
						{column.title && <p className='title'>{column.title}</p>}
						{column.content && <h2>{column.content}</h2> }
						{column.buttonTitle && column.buttonUrl && <Link className='button button-black' to={slugify(`/${column.buttonUrl}`)}>{column.buttonTitle}</Link>}
					</div>
				</div>	
			</div>
		})}
	</section>
