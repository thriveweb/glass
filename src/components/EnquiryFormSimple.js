import React from 'react'

import './EnquiryForm.css'
import './JoinUs.css'

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
    <h2 className='form-description'>Please Submit your details here</h2>
    <label className='EnquiryForm--Label'>
      <input
        className='EnquiryForm--Input'
        type='text'
        placeholder='Full Name'
        name='name'
        required
      />
    </label>
    <label className='EnquiryForm--Label'>
      <input
        className='EnquiryForm--Input'
        type='text'
        placeholder='Email'
        name='email'
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
    <label className='EnquiryForm--Label'>
      <input
        className='EnquiryForm--Input'
        type='text'
        placeholder='Age'
        name='age'
        required
      />
    </label>
    <label className='EnquiryForm--Label'>
      <input
        className='EnquiryForm--Input'
        type='text'
        placeholder='Height'
        name='height'
        required
      />
    </label>
    <label className='EnquiryForm--Label'>
      <input
        className='EnquiryForm--Input'
        type='url'
        placeholder='Instagram'
        name='instagram'
        required
      />
    </label>
    <label className='EnquiryForm--Label textarea'>
      <textarea
        className='EnquiryForm--Input EnquiryForm--Textarea'
        placeholder='Experience'
        name='experience'
        rows='10'
        required
      />
    </label>
    <div className='file-download'>
      <label className='EnquiryForm--Label'>
        <input
          className='EnquiryForm--Input'
          type='file'
          placeholder='Upload Photo Please attach a full length body shot'
          name='upload-photo'
          required
        />
      </label>
      <label className='EnquiryForm--Label'>
        <input
          className='EnquiryForm--Input'
          type='file'
          placeholder='Upload Photo Please attach a current headshot'
          name='upload-photo'
          required
        />
      </label>
      </div>  
      <div className='form--footer'>
        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />
        <input
          className='button EnquiryForm--SubmitButton'
          type='submit'
          value='Send'
        />
      </div> 
  </form>
)
