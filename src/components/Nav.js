import React, { Component } from 'react'

import Logo from './Logo'
import './Nav.css'
import {ICONLogin} from './Icons'


class Nav extends Component {
	render() {
		const { header } = this.props

		return (
			<nav className='nav'>
			 	<div className='nav--container container'>
			      	<a href='/'><Logo /></a>
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
