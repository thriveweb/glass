import React from 'react'

export default ({modelTypes, handleSelect}) =>
	<div className='nav--list-items'>
		<ul>
			{modelTypes.map(modelType => {
				return <li onClick={() => handleSelect(`${modelType.title}`)}>{modelType.title}</li>
			})}
		</ul>
	</div>