import React from 'react'
import './JoinUs.css'

import Banner from '../components/Banner'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'

export default ({ page, success }) => {
  const { featuredImage, title, subTitle, intro } = page

  return (
    <div className='JoinUs'>
      <Banner image={featuredImage} title={title} subTitle={subTitle} />
      <section className='section--join-us'>
        <div className='container'>
          <div className='section--join-us-intro'>
            {intro.title && <h2>{intro.title}</h2>}
            {intro.content && <Content source={intro.content} />}
          </div>

          {success && (
            <div
              style={{
                textAlign: 'center',
                width: '100%',
                fontSize: '1.1em',
                padding: '1rem'
              }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-check-circle'
                style={{ marginBottom: '2rem', marginTop: '2rem' }}
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                <polyline points='22 4 12 14.01 9 11.01' />
              </svg>
              <p>
                Thank you for your submission, we will be in contact with you
                shortly
              </p>
            </div>
          )}

          <EnquiryFormSimpleAjax
            name='Join Us Form'
            action='/join-us-success'
            hidden={success}
          />

          {/* link to notify react-snapshot to build html */}
          <a href='/join-us-success' style={{ display: 'none' }} />
        </div>
      </section>
    </div>
  )
}
