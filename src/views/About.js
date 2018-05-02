import React from 'react'

import Banner from '../components/Banner'
import SectionTeam from '../components/SectionTeam'
import SectionServices from '../components/SectionServices'
import SectionPartners from '../components/SectionPartners'
import './About.css'

export default ({ page, globalSettings }) => {
  const { title, subTitle, featuredImage, teamMembers, services } = page
  const { partners } = globalSettings

  // console.log(partners)

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
      <SectionPartners
        partners={partners} 
      />
    </div>
  )
}
