import React from 'react'

import './Footer.css'
import {ICONTwitter, ICONFacebook, ICONLinkedin, ICONInstagram} from './Icons'
import SignupFormSimpleAjax from './SignupFormSimpleAjax'

export default ({twitter, facebook, linkedin, instagram, title, footerNav, buttonText, buttonUrl }) => (
  <footer className='footer'>
  	<div className='container'>
  		<div className='footer--col-left'>
       <SignupFormSimpleAjax />
  		</div>
  		<div className='footer--col-right'>
        {title && <h3>{title}</h3>}
        <div className='footer--nav-items'>
          {footerNav.map (navItem => {
            return (
              <a key={navItem.buttonText} href={`${navItem.buttonUrl}`}>{navItem.buttonText}</a>
            )
          })}
        </div>
  		</div>
  	</div>
    <div className='footer--bottom'>
      <div className='container'>
        <p>Copyright 2018 Glass Management</p>
        <div className='footer--social-media'>
          {twitter && <a href={`${twitter}`}><ICONTwitter/></a>}
          {facebook && <a href={`${facebook}`}><ICONFacebook/></a>}
          {linkedin && <a href={`${linkedin}`}><ICONLinkedin/></a>}
          {instagram && <a href={`${instagram}`}><ICONInstagram/></a>}
        </div>
        <p><a href="https://thriveweb.com.au/" title="Web Design Gold Coast" >Web Design Gold Coast</a> - THRIVE</p>
      </div>
    </div>
  </footer>
)


