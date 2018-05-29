import React, { Component } from 'react'
import './SectionServices.css'

// Netlify
	import BackgroundImage from './BackgroundImage'

// Component
	import ServicePopup from './ServicePopup'


class SectionServices extends Component {
	state = {
		popupActive: null
	}

	handlePopup = (index = null) => {
		this.setState({
			popupActive: index
		})

		document.body.style.overflow = index ? 'hidden' : 'auto'
		document.documentElement.style.overflow = index ? 'hidden' : 'auto'
	}

	render() {
		const { services } = this.props
		const { subTitle, title, content, serviceItems } = services

		return (
			<section className='section--services'>
				<div className='container'>
					<div className='section--services-heading'>
						{subTitle && <p className='title'>{subTitle}</p>}
						{title && <h2>{title}</h2>}
						{content && <p>{content}</p>}
					</div>
					<div className='section--services-items'>
						{serviceItems.map((service, index) => {
							return [
								<div 
									key={`service-${index}`}
									className='section-services-item'
									onClick={() => this.handlePopup(index)}
								>
									{service.image && 
										<BackgroundImage 
											src={service.image} 
											imageSize={600}
										/> 
									}
									{service.title && <h3 className='title-fancy'>{service.title}</h3>}
								</div>,
								<ServicePopup 
									key={`service-popup-${index}`}
									title={service.title} 
									content={service.content}
									active={this.state.popupActive === index}
									handlePopup={() => this.handlePopup()}
								/>
							]
						})}
					</div>
				</div>
			</section>
		)
	}
}


export default SectionServices
