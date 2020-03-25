import React from 'react'

import './EnquiryForm.css'
import '../templates/JoinUs.css'

// const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Enquiry Form',
    subject: '', // optional subject of the notification email
    action: '',
    hidden: false,
    successMessage: 'Thank you for your submission, we will be in contact with you shortly',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

handleUpload = e => {
  const file = e.target.files[0]
    ? e.target.files[0]
    : this.state[e.target.name]

  this.setState({
    [e.target.name]: file
  })
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleEncode = data => {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

handleSubmit = e => {
  e.preventDefault()
  if (this.state.disabled) return
  const form = e.target
  this.setState({ disabled: true })

  const { alert, disabled, ...data } = this.state

  if (!data['headshot'] || !data['bodyshot']) {
    return this.setState({
      alert: 'Please attach both headshot & bodyshot'
    })
  } else {
    this.setState({
      filesUploading: true
    }, () => {
      fetch("/", {
        method: "POST",
        body: this.handleEncode({ "form-name": "Join Us Form", ...data })
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          filesUploading: false,
          disabled: false
        })
      })
      .catch(err => {
        this.setState({
          disabled: false,
          alert: this.props.errorMessage,
          filesUploading: false

        })
      })
    })
  }

}

  render () {
    const { name, subject, hidden } = this.props
    const { filesUploading } = this.state

    return (
      <form
        className='EnquiryForm'
        name={name}
        method='post'
        onSubmit={this.handleSubmit}
        data-netlify='true'
        netlify-honeypot='_gotcha'
        style={hidden ? { display: 'none' } : {}}
      >
        <h2 className='form-description'>Please Submit your details here</h2>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Full Name'
            name='name'
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
            onChange={this.handleChange}
          />
        </label>
        <label className='EnquiryForm--Label textarea'>
          <textarea
            className='EnquiryForm--Input EnquiryForm--Textarea'
            placeholder='Experience'
            name='experience'
            rows='10'
            onChange={this.handleChange}
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
                onChange={this.handleUpload}
              />
              <span>Upload Photo</span> please attach a full length bodyshot
            </label>
            {this.state.bodyshot && <p>{this.state.bodyshot.name}</p>}
          </div>
          <div className='file-download-item'>
            <label className='EnquiryForm--Label title'>
              <input
                className='EnquiryForm--Input'
                type='file'
                accept='image/*'
                placeholder='Upload Photo'
                name='headshot'
                onChange={this.handleUpload}
              />
              <span>Upload Photo</span> please attach a current headshot
            </label>
            {this.state.headshot && <p>{this.state.headshot.name}</p>}
          </div>
        </div>

        {this.state.alert && (
          <div className='EnquiryForm--Alert'>
            {this.state.alert}
          </div>
        )}

        <div className='form--footer'>
          <input type='text' name='_gotcha' />
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
