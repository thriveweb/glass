import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'
import LogoScroll from './LogoScroll'
import './Nav.css'
import {ICONLogin} from './Icons'


class Nav extends Component {

	state = {
		navActive: null
	}

	componentDidMount() {
		document.addEventListener('scroll', () => {
			if(window.pageYOffset > 20 && !this.state.navActive) {
				this.setState({
					navActive: true
				})
			} else if(window.pageYOffset < 20 && this.state.navActive) {
				this.setState({
					navActive: null
				})
			}
		})
	}

	render() {
		const { header, modelTypes=[] } = this.props

		return (
			<nav className={`nav ${this.state.navActive ? 'active' : ''}`}>
			 	<div className='nav--container container'>
			      	<a href='/'><Logo /></a>
			      	<a href='/'><LogoScroll /></a>
			      	<nav>
			      		<ul>
			      			<li><Link to='/about'>About</Link></li>
			      			<li className='menu-item-has-children'>Models
			      				<ul className='subMenu'>
					      			{modelTypes.map(selectedModelType => {
					      				return <li key={selectedModelType.name}>
					      					<Link to={`/models/${selectedModelType.name}`}>{selectedModelType.name}</Link>
					      				</li>
					      			})}
				      			</ul>
			      			</li>
			      			<li><Link to='/blog'>Blog</Link></li>
			      		</ul>
			      	</nav>
			      	<div className='client-nav'>
			      		<a className='title' href='/'><ICONLogin /> Join Us</a>
			      		<a className='button' href={`${header.buttonUrl}`}>{header.buttonText}</a>
			      	</div>	
			  	</div>
			</nav> 
		)
	}
}

export default Nav
