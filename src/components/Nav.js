import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo'
import LogoScroll from './LogoScroll'
import './Nav.css'
import {ICONLogin} from './Icons'


class Nav extends Component {

	state = {
		navActive: null,
		mobileActive: false,
		menuItemActive: false
	}

	onMobileClick = () => {
		this.setState({
			mobileActive: !this.state.mobileActive
		})
	}

	onMenuItemClick = () => {
		this.setState({
			menuItemActive: !this.state.menuItemActive
		})
	}

	componentDidMount = () => {
		document.body.addEventListener('scroll', () => {

			if(document.body.scrollTop > 20 && !this.state.navActive) {
				this.setState({
					navActive: true
				})
			} else if(document.body.scrollTop < 20 && this.state.navActive) {
				this.setState({
					navActive: null
				})
			}
		})
	}

	render() {
		const { header, modelTypes=[] } = this.props
		const { mobileActive, navActive, menuItemActive } = this.state


		return (
			<nav className={`nav ${navActive ? 'active' : ''} ${mobileActive ? 'mobile-active' : ''}`}>
			 	<div className='nav--container container'>
			      	<Link to='/'><Logo /></Link>
			      	<Link to='/'><LogoScroll /></Link>
			      	<nav>
			      		<ul>
			      			<li><Link to='/about'>About</Link></li>
			      			<li 
			      				onClick={this.onMenuItemClick}
			      				className={`menu-item-has-children ${menuItemActive ? 'active' : ''}`}>
			      				<span className='menu-item-content'>
			      					Models <span className='dropdown-arrow'>&#x25BE;</span>
			      				</span>
			      				<ul className='subMenu'>
					      			{modelTypes.map(selectedModelType => {
					      				return <li key={selectedModelType.name}>
					      					<Link to={`/models/${selectedModelType.name}`}>{selectedModelType.name}</Link>
					      				</li>
					      			})}
				      			</ul>
			      			</li>
			      			<li><Link to='/blog'>Blog</Link></li>
			      			<li><Link to='/contact'>Contact</Link></li>
			      		</ul>
			      	</nav>
			      	<div className='client-nav'>
			      		<Link className='title' to='/join-us'><ICONLogin /> Join Us</Link>
			      		<a className='button' href={`${header.buttonUrl}`}>{header.buttonText}</a>
			      	</div>	
				   	<div 
				   		id="mobile-menu" 
				   		onClick={this.onMobileClick}
				   	>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                </div>
			  	</div>
			</nav> 
		)
	}
}

export default Nav
