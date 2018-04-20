import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'
import {ICONLogin} from './Icons'


export default ({ handlePopupOpen, header }) => (

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
