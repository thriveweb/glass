import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'
import {ICONMenu} from './Icons'


export default ({ handlePopupOpen, buttonUrl, buttonText }) => (

	<nav className='nav'>
	 	<div className='nav--container container'>
	      	<a href='/'><Logo /></a>
	      	<a className='client-login' href='/'>Join Us</a>
	      	<a className='button' href={`${buttonUrl}`}>{buttonText}</a>
	  	</div>
	</nav> 
)
