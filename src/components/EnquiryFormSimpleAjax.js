import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'
import './JoinUs.css'

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

  handleUpload = (event, target) => {
    const file = event.target.files[0] ? event.target.files[0].name : this.state[target]

    this.setState({
      [target]: file
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render () {
    const { name, subject, action } = this.props

    return (
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
          <div className='file-download-item'>
            <label className='EnquiryForm--Label title'>
              <input
                className='EnquiryForm--Input'
                type='file'
                placeholder='Upload Photo'
                name='upload-photo'
                onChange={event => this.handleUpload(event, 'bodyShot')}
                required
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
                placeholder='Upload Photo'
                name='upload-photo'
                onChange={event => this.handleUpload(event, 'headShot')}
                required
              />
              <span>Upload Photo</span> please attach a current headshot
            </label>
            {this.state.headShot && <p>{this.state.headShot}</p>}
          </div>  
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
  }
}

export default Form
