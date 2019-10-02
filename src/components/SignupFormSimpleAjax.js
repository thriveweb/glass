import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './SignUpFormSimpleAjax.css'

const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Subcription Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for signing up, we will get back to you soon',
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
        className='SignupForm'
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        {this.state.alert && (
          <div className='SignupForm--Alert'>{this.state.alert}</div>
        )}
        <legend>Sign up for our journal</legend>
        <label className='SignupForm--Label'>
          <input
            className='SignupForm--Input'
            type='email'
            placeholder='your email'
            name='email'
            required
          />
        </label>
        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />
        <input
          className='button SignupForm--SubmitButton'
          type='submit'
          value='Subscribe'
          disabled={this.state.disabled}
        /> 
      </form>
    )
  }
}

export default Form
