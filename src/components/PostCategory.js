import React from 'react'
import { Link } from 'gatsby'

import _kebabCase from 'lodash/kebabCase'
import './NavList.css'


export default ({ postCategories, selectedCategory }) => {

	return <ul className='nav--list-items'>
		<li className={`nav--list-item ${selectedCategory === 'all' ? 'active' : ''}`}>
			<Link to='/blog'>All</Link>
		</li>
		{postCategories.map(category => {
			return <li
				className={`nav--list-item ${selectedCategory.name === category.name ? 'active' : ''}`} 
				key={category.title}
			>
				<Link to={`/blog/${_kebabCase(category.title)}`}>
					{category.title}
				</Link>
			</li>
		})}
	</ul>
}

