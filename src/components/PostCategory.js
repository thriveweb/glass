import React from 'react'
import { Link } from 'react-router-dom'

export default ({ postCategories, selectedCategory }) =>
	<ul className='nav--list-items'>
		{postCategories.map(category => {
			return <li
				className={`nav--list-items ${selectedCategory ? 'active' : ''}`} 
				key={category.title}
			>
				<Link to={`/models/${category.title}`}>
					{category.title}
				</Link>
			</li>
		})}
	</ul>
