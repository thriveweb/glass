import React from 'react'
import './ContactInfo.css'
import _get from 'lodash/get'

import { ICONTwitter, ICONFacebook, ICONLinkedin, ICONInstagram } from '../components/Icons'


export default ({ globalSettings }) => {
	const phone = _get(globalSettings, 'phone') || ''
	const address = _get(globalSettings, 'address') || ''
	const email = _get(globalSettings, 'email') || ''
	const twitter = _get(globalSettings, 'twitter') || ''
	const facebook = _get(globalSettings, 'facebook') || ''
	const linkedin = _get(globalSettings, 'linkedin') || ''
	const instagram = _get(globalSettings, 'instagram') || ''

	return <section className='section--contact'>
			<div className='container'>
				<p className='title'>Get in Touch</p>
				<div className='section--contact-info'>
					<h2>Find Us</h2>
					{address && <p>{address}</p>}
					{email && <a href={`mailto:${email}`}>{email}</a>}
					{phone && <a href={`tel:${phone}`}>{phone}</a>}
				</div>
				<div className='section--contact-info'>
					<h2>Follow Us</h2>
					<ul className='social-media'>
						{twitter && <li><a href={`${twitter}`}><ICONTwitter/></a></li>}
						{facebook && <li><a href={`${facebook}`}><ICONFacebook/></a></li>}
						{linkedin && <li><a href={`${linkedin}`}><ICONLinkedin/></a></li>}
						{instagram && <li><a href={`${instagram}`}><ICONInstagram/></a></li>}
					</ul>
				</div>
			</div>
		</section>
}
