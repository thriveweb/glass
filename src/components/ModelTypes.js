import React from 'react'

export default ({modelTypes}) =>
	<div className='nav--list-items'>
		<ul>
			{modelTypes.map(modelType => {
				return <li onClick={() => this.selectCollection(`${modelType.title}`)}>{modelType.title}</li>
			})}
		</ul>
	</div>