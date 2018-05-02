import React from 'react'
import Content from './Content'

export default ({ title, content, active, handlePopup }) =>
	<div className={`service-popup ${active ? 'active' : ''}`}>
		<div className='container'>
			<span className='popup-close' onClick={handlePopup}>X</span>
			{ title && <h3>{title}</h3> }
			<p className='title'>Service Provided</p>
			{ content && <Content source={content} /> }
		</div>	
	</div>