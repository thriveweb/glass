import React from 'react'

import Banner from '../components/Banner'
import SectionTeam from '../components/SectionTeam'
import SectionServices from '../components/SectionServices'
import './About.css'

export default ({ page, globalSettings }) => {
  const { title, subTitle, featuredImage, teamMembers, services } = page

  console.log(services)

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
        services={services}
      />
    </div>
  )
}
