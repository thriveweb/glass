import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

const fetch = window.fetch

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

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
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Phone'
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Age'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Height'
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='url'
            placeholder='Instagram'
            name='instagram'
            value={this.state.instagram}
            onChange={this.handleChange}
          />
        </label>
        <label className='EnquiryForm--Label textarea'>
          <textarea
            className='EnquiryForm--Input EnquiryForm--Textarea'
            placeholder='Experience'
            name='experience'
            value={this.state.experience}
            onChange={this.handleChange}
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
                // onChange={event => this.handleUpload(event, 'bodyShot')}
                value={this.state.bodyshot}
                onChange={this.handleChange}
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
