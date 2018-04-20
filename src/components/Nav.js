import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'
import {ICONLogin} from './Icons'


export default ({ handlePopupOpen, buttonUrl, buttonText }) => (

	<nav className='nav'>
	 	<div className='nav--container container'>
	      	<a href='/'><Logo /></a>
	      	<div>
	      		<a className='client-login' href='/'><ICONLogin /> Join Us</a>
	      		<a className='button' href={`${buttonUrl}`}>{buttonText}</a>
	      	</div>	
	  	</div>
	</nav> 
)
