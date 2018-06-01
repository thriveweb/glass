import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Enquiry Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return
    const form = e.target
    const data = serialize(form)

    console.log(data)

    if (!data['upload-photo-headshot'] || !data['upload-photo-bodyshot']) {
      return this.setState({
        alert: 'Please attach both headshot & bodyshot'
      })
    } else {
      e.target.submit()
    }
  }

  render () {
    const { name, subject, action } = this.props

    return (
      <form
        className='EnquiryForm'
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        {this.state.alert && (
          <div className='EnquiryForm--Alert'>{this.state.alert}</div>
        )}
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
          <div className='file-download-item'>
            <label className='EnquiryForm--Label title'>
              <input
                className='EnquiryForm--Input'
                type='file'
                accept='image/*'
                placeholder='Upload Photo'
                name='upload-photo-bodyshot'
                // onChange={event => this.handleUpload(event, 'bodyShot')}
                required
              />
              <span>Upload Photo</span> please attach a full length bodyshot
            </label>
            {this.state.bodyShot && <p>{this.state.bodyShot}</p>}
          </div>
        </div>
        <div className='form--footer'>
          <input type='text' name='_gotcha' style={{ display: 'none' }} />
          {!!subject && <input type='hidden' name='subject' value={subject} />}
          <input type='hidden' name='form-name' value={name} />
          <input
            className='button EnquiryForm--SubmitButton'
            type='submit'
            value='Enquire'
            disabled={this.state.disabled}
          />
        </div>  
      </form>
    )
  }
}

export default Form
