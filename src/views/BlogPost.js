import React from 'react'

import Banner from '../components/Banner'
import SinglePost from '../components/SinglePost'
import SectionPartners from '../components/SectionPartners'

export default ({ fields, globalSettings }) => (
  <main className='single-post'>
    <Banner image={fields && fields.image} title={' '} />
    <SinglePost post={fields} />
    <SectionPartners partners={globalSettings.partners} />
  </main>
)
