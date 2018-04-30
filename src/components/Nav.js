import React, { Component } from 'react'

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
		const { header } = this.props

		return (
			<nav className={`nav ${this.state.navActive ? 'active' : ''}`}>
			 	<div className='nav--container container'>
			      	<a href='/'><Logo /></a>
			      	<a href='/'><LogoScroll /></a>
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
