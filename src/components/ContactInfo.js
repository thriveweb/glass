import React from 'react'
import './ContactInfo.css'

import { ICONTwitter, ICONFacebook, ICONLinkedin, ICONInstagram } from '../components/Icons'


export default ({ globalSettings }) => {
	const { phone, address, email, twitter, facebook, linkedin, instagram } = globalSettings

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