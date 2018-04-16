import React from 'react'
import Helmet from 'react-helmet'

import DefaultTemplate from '../components/DefaultTemplate'


export default ({ page, globalSettings }) => {
  const {faqs} = page

  return (
    <main className='FAQ'>
      <DefaultTemplate title={page.title} contentSection={page.contentSection} />
    </main>
  )
}
