import React from 'react'

import Banner from '../components/Banner'
import SectionTeam from '../components/SectionTeam'
import SectionServices from '../components/SectionServices'
import SectionPartners from '../components/SectionPartners'
import SectionColumns from '../components/SectionColumns'
import './About.css'

export default ({ page, globalSettings }) => {
  const { title, subTitle, featuredImage, teamMembers, services } = page
  const { partners, columns } = globalSettings

  return (
    <div className='About'>
      <Banner
        heading={title}
        subHeading={subTitle}
        image={featuredImage}
      />
      <SectionTeam
        teamMembers={teamMembers}
      />
      <SectionServices
        title={services.title}
        subTitle={services.subTitle}
        content={services.content}
        serviceItems={services.serviceItems}
      />
      <div className='about-partners'>
        <p className='title'>Friends of the Family</p>
        <h2>Clients we've worked with</h2>
        <SectionPartners
          partners={partners} 
        />
      </div>
      <SectionColumns
        columns={columns}
      />
    </div>
  )
}
