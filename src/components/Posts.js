import React, { Component } from 'react'
import _kebabCase from 'lodash/kebabCase'
import Pagination from "react-js-pagination";
import './FeaturedPosts.css'

import FeaturedPost from './FeaturedPost'
import PostCategory from './PostCategory'

class Posts extends Component {

  	constructor(props) {
    	super(props);
    	this.state = {
      		activePage: 1
    	};
  	}
 
  	handlePageChange(pageNumber) {
   		this.setState({
   			activePage: pageNumber
   		});
  	}

	render() {
		const { posts, postCategories, subTitle, selectedCategory } = this.props

		const filteredPosts = [...posts].filter(post => {
			const collectionName = _kebabCase(post.collection)
			return selectedCategory === 'all' || collectionName === selectedCategory.name
		})

		return <section className='section--featured-posts archive--posts'>
			<div className='container'>
				<div className='archive--listing-heading'>
					<p className='title'>{subTitle}</p>
					<h2>Read our Latest News</h2>
				</div>
				<PostCategory postCategories={postCategories} selectedCategory={selectedCategory} />
				{filteredPosts && <FeaturedPost posts={filteredPosts} />}
			</div>	
	        <Pagination
	          activePage={this.state.activePage}
	          itemsCountPerPage={9}
	          totalItemsCount={9}
	          pageRangeDisplayed={5}
	          onChange={this.handlePageChange}
	        />	
		</section>

	}
}

export default ( Posts )
