import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'
import {ICONLogin} from './Icons'


class Nav extends Component {
	render() {
		const { handlePopupOpen, header } = this.props

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
