import React from 'react'

import './EnquiryForm.css'

export default ({
  name = 'Simple Form',
  subject = '', // optional subject of the notification email
  action = ''
}) => (
  <form
    className='EnquiryForm'
    name={name}
    action={action}
    data-netlify=''
    data-netlify-honeypot='_gotcha'
  >
    <label className='EnquiryForm--Label'>
      <input
        className='EnquiryForm--Input'
        type='text'
        placeholder='Name'
        name='name'
        required
      />
    </label>
    <label className='EnquiryForm--Label'>
      <input
        className='EnquiryForm--Input'
        type='text'
        placeholder='Phone'
        name='phone'
        required
      />
    </label>
    <label className='EnquiryForm--Label textarea'>
      <textarea
        className='EnquiryForm--Input EnquiryForm--Textarea'
        placeholder='Message'
        name='message'
        rows='10'
        required
      />
    </label>
    <div className='form--footer'>
      <input type='text' name='_gotcha' style={{ display: 'none' }} />
      {!!subject && <input type='hidden' name='subject' value={subject} />}
      <input type='hidden' name='form-name' value={name} />
      <input
        className='button EnquiryForm--SubmitButton'
        type='submit'
        value='Enquire'
      />
    </div>  
  </form>
)
