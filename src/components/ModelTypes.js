import React from 'react'

import './NavList.css'

export default ({modelTypes, handleSelect}) =>
	<ul className='nav--list-items'>
		{modelTypes.map(modelType => {
			return <li onClick={() => handleSelect(`${modelType.title}`)}>{modelType.title}</li>
		})}
	</ul>
