import React from 'react'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'
import '../views/JoinUs.css'

// const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Enquiry Form',
    subject: '', // optional subject of the notification email
    action: '',
    hidden: false,
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleUpload = (event, target) => {
    const file = event.target.files[0]
      ? event.target.files[0].name
      : this.state[target]

    this.setState({
      [target]: file
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.disabled) return
    const form = e.target
    const data = serialize(form)

    if (!data['headshot'] || !data['bodyshot']) {
      return this.setState({
        alert: 'Please attach both headshot & bodyshot'
      })
    } else {
      this.setState({ 
        filesUploading: true 
      }, () => {
        e.target.submit()
      })
    }
  }

  render () {
    const { name, subject, action, hidden } = this.props
    const { filesUploading } = this.state

    return (
      <form
        className='EnquiryForm'
        name={name}
        // action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
        style={hidden ? { display: 'none' } : {}}
        encType='multipart/form-data'
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
                name='bodyshot'
                onChange={event => this.handleUpload(event, 'bodyShot')}
              />
              <span>Upload Photo</span> please attach a full length bodyshot
            </label>
            {this.state.bodyShot && <p>{this.state.bodyShot}</p>}
          </div>
          <div className='file-download-item'>
            <label className='EnquiryForm--Label title'>
              <input
                className='EnquiryForm--Input'
                type='file'
                accept='image/*'
                placeholder='Upload Photo'
                name='headshot'
                onChange={event => this.handleUpload(event, 'headShot')}
              />
              <span>Upload Photo</span> please attach a current headshot
            </label>
            {this.state.headShot && <p>{this.state.headShot}</p>}
          </div>
        </div>

        {this.state.alert && (
          <div className='EnquiryForm--Alert'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-alert-triangle'
            >
              <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
              <line x1='12' y1='9' x2='12' y2='13' />
              <line x1='12' y1='17' x2='12' y2='17' />
            </svg>
            {this.state.alert}
          </div>
        )}

        <div className='form--footer'>
          <input type='text' name='_gotcha' style={{ display: 'none' }} />
          {!!subject && <input type='hidden' name='subject' value={subject} />}
          <input type='hidden' name='form-name' value={name} />
          <input
            className='button EnquiryForm--SubmitButton'
            type='submit'
            value={!filesUploading ? 'Send' : 'Uploading Files...'}
          />
        </div>
      </form>
    )
  }
}

export default Form
