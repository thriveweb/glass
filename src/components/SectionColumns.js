import React from 'react'
import './SectionColumns.css'

import { slugify } from '../util/url'
import { Link } from 'gatsby'

import LazyImage from './LazyImage'


export default ({ columns }) =>
	<section className='section--columns'>
		{columns && !!columns.length && columns.map(column => {
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
