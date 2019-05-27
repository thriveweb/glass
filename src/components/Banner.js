import React, { Component } from 'react'
import './Banner.css'

import { slugify } from '../util/url'
import { Link } from 'gatsby'

import BackgroundImage from './BackgroundImage'
import LazyImage from './LazyImage'

class Banner extends Component {
  constructor(props) {
		super(props)

		this.videoRef = React.createRef()

		this.state = {}
	}

  updateDimensions() {
    this.setState({ mobileWidth: window.innerWidth <= 560 })
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', () => this.updateDimensions())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  handleVideo = () => {
    const video = this.videoRef.current
    video.paused ? video.play() : video.pause()

    this.setState({
      videoPlaying: !video.paused
    })
  }

  render() {
    const { image, title, subTitle, content, buttonText, buttonUrl, featuredVideo, featuredVideoMobile, modelPage } = this.props
    const { videoPlaying, mobileWidth } = this.state

    return <section className={`section--banner relative ${modelPage && 'section-thick'}`}>
      {featuredVideo && modelPage && mobileWidth === false
        ? <div className='video-container' onClick={this.handleVideo}>
            <video
              poster={image}
              ref={mobileWidth === false && this.videoRef}
            >
              <source src={featuredVideo} type="video/mp4" />
            </video>
            <div className={`video-play ${videoPlaying ? 'non-active' : ''}`}>
              <img src='../images/play-button.png' alt='play button' />
            </div>
          </div>

        : featuredVideoMobile && modelPage && mobileWidth === true

        ? <div className='video-container mobile-only' onClick={this.handleVideo}>
            <video
              poster={image}
              ref={mobileWidth && this.videoRef}
            >
              <source src={featuredVideoMobile} type="video/mp4" />
            </video>
            <div className={`video-play ${videoPlaying ? 'non-active' : ''}`}>
              <img src='../images/play-button.png' alt='play button' />
            </div>
          </div>

        : featuredVideo && mobileWidth === false

        ? <video className='video-container home' preload='auto' playsInline autoPlay muted loop ><source src={featuredVideo} type="video/mp4" /></video>

        : featuredVideoMobile && mobileWidth === true

        ? <video
            className='video-container mobile-only home'
            preload='auto'
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={featuredVideoMobile} type="video/mp4" />
          </video>

        : <BackgroundImage className='test' src={image} lazy={false} imageSize='1920' />
      }
      <div className='container relative'>
        {subTitle && <p className='title'>{subTitle}</p>}
        {title
          ? <h1>{title}</h1>
          : modelPage
          ? ''
          : <LazyImage src='https://glassmanagement.imgix.net/images/uploads/logo-white.png' alt='logo' />
        }
        {content && <p className='section--banner-content'>{content}</p>}
        {buttonUrl &&
          buttonText && (
          <Link className='button' to={slugify(`/${buttonUrl}`)}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  }
}


export default Banner
