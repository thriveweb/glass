import React from 'react'
import { Link } from 'react-router-dom'

import './NavList.css'

export default ({modelTypes, handleSelect, selectedModelType}) => {

	console.log(selectedModelType)

	return <ul className='nav--list-items'>
			{modelTypes.map(modelType => {
				return <li
					className={`nav--list-item ${selectedModelType === modelType.name ? 'active' : ''}`} 
					key={modelType.title}
				>
					<Link to={`/models/${modelType.name}`}>
						{modelType.title}
					</Link>
				</li>
			})}
		</ul>
}
