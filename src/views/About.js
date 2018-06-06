import React from 'react'

import Banner from '../components/Banner'
import SectionTeam from '../components/SectionTeam'
import SectionServices from '../components/SectionServices'
import SectionPartners from '../components/SectionPartners'
import SectionColumns from '../components/SectionColumns'
import './About.css'

export default ({ fields, globalSettings }) => {
  const { title, subTitle, featuredImage, teamMembers, services } = fields
  const { partners, columns } = globalSettings

  return (
    <div className='About'>
      <Banner title={title} subTitle={subTitle} image={featuredImage} />
      <SectionTeam teamMembers={teamMembers} />
      <SectionServices services={services} />
      <div className='about-partners'>
        <p className='title'>Friends of the Family</p>
        <h2>Clients we've worked with</h2>
        <SectionPartners partners={partners} />
      </div>
      <SectionColumns columns={columns} />
    </div>
  )
}
