import React from 'react'

import BackgroundImage from './BackgroundImage'
import './SectionTeam.css'
import Content from './Content'

export default ({ teamMembers }) =>

	<section className='section--members'>
		{teamMembers.map(member => {
			return <div key={member.title} className={`section--members-column ${!member.leftAlign ? 'right-align' : ''}`}>
				<div className='container'>
					<div className='section--members-column-image'>
						{member.image && <BackgroundImage src={member.image} imageSize={600} />}
					</div>	
					<div className='section--members-column-info'>
						{member.subTitle && <p className='title'>{member.subTitle}</p>}
						{member.title && <h2>{member.title}</h2>}
						{member.content && <Content source={member.content} />}
					</div>
				</div>	
			</div>
		})}
	</section>