import React from 'react'
import Helmet from 'react-helmet'

import DefaultTemplate from '../components/DefaultTemplate'


export default ({ page, globalSettings }) => {
  const {termsConditions} = page

  console.log(page)

  return (
    <main className='TermsConditions'>
      <DefaultTemplate title={page.title} contentSection={page.contentSection} />
    </main>
  )
}
