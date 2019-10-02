import React, { Component } from 'react'
import './Pagination.css'

class Pagination extends Component {
	state = {

	}

	handlePageLink = (queryString) => {
		const { history } = this.props
		history.push(queryString)
	}

	render() {
		const { items, itemsPer, pageNumber } = this.props
		const pageCount = Math.ceil(items.length / itemsPer)

		return (
			<ul className='pagination'>
				<li>
					<span 
						onClick={() => pageNumber - 1 > 0 && this.handlePageLink(`?page=${pageNumber - 1}`)}
						className={pageNumber - 1 > 0 ? 'active' : 'no-hover'}
					>
						&#8592;
					</span>
				</li>
				
				{Array.from(Array(pageCount)).map((count, index) => 
					<li key={index}>
						{pageNumber === index + 1
							? <span className='active-link'>{index + 1}</span>
							: <span 
								onClick={() => this.handlePageLink(`?page=${index + 1}`)}
							>{index + 1}</span>
						}
					</li>
				)}

				<li>
					<span 
						onClick={() => pageNumber + 1 <= pageCount && this.handlePageLink(`?page=${pageNumber + 1}`)}
						className={pageNumber + 1 <= pageCount ? 'active' : 'no-hover'}
					>
						&#8594;
					</span>
				</li>
			</ul>
		)
	}
}

export default Pagination