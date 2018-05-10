import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Pagination.css'

class Pagination extends Component {
	state = {

	}

	render() {
		const { items, itemsPer, pageNumber } = this.props
		const pageCount = Math.ceil(items.length / itemsPer)

		return (
			<ul className='pagination'>
				<li>
					{pageNumber - 1 > 0 
						? <Link to={`?page=${pageNumber - 1}`}>Previous</Link> 
						: <span>Previous</span>
					}
				</li>
				
				{Array.from(Array(pageCount)).map((count, index) => 
					<li key={index}>
						{pageNumber === index + 1
							? <span className='active-link'>{index + 1}</span>
							: <Link to={`?page=${index + 1}`}>{index + 1}</Link>
						}
					</li>
				)}

				<li>
					{pageNumber + 1 <= pageCount
						? <Link to={`?page=${pageNumber + 1}`}>Previous</Link> 
						: <span>Previous</span>
					}
				</li>
			</ul>
		)
	}
}

export default Pagination