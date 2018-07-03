import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'
import './NavList.css'

export default ({modelTypes, handleSelect, selectedModelType}) => {

	return <ul className='nav--list-items'>
			{modelTypes.map(modelType => {
				return <li
					className={`nav--list-item ${selectedModelType === modelType.name ? 'active' : ''}`} 
					key={modelType.title}
				>
					<Link to={`/models/${_kebabCase(modelType.name)}/`}>
						{modelType.title}
					</Link>
				</li>
			})}
		</ul>
}
