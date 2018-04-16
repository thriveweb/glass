import React from 'react'

import './SectionContact.css'

import ICONtwitter from './Icons'
import GoogleMap from './GoogleMap'

export default ({title, introContent, infoItems, address, latitude, longitude}) => (

	<section className='section--contact'>
		<div className='container'>
			<div className='section--contact-intro'>
				{title ? <h2>{title}</h2> : ''}
				{introContent ? <p className='title-italic'>{introContent}</p> : ''}
			</div>
			<div className='section--contact-info-container'>
				<GoogleMap lat={parseFloat(latitude)} lng={parseFloat(longitude)} styles={'[{"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "off"}]},{"featureType": "administrative", "elementType": "all", "stylers": [{"visibility": "off"},{"color": "#efebe2"}]},{"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.attraction", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.business", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.government", "elementType": "all", "stylers": [{"color": "#dfdcd5"}]},{"featureType": "poi.medical", "elementType": "all", "stylers": [{"color": "#D9CBAA"}]},{"featureType": "poi.park", "elementType": "all", "stylers": [{"color": "#f1f1f1"}]},{"featureType": "poi.place_of_worship", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.school", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.sports_complex", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]},{"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}]},{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]},{"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}]},{"featureType": "road.local", "elementType": "geometry.fill", "stylers": [{"color": "#fbfbfb"}]},{"featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}]},{"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "all", "stylers": [{"color": "#a5d7e0"}]}]'} />
				<div className='section--contact-info'>
					<div className='section--contact-info-item location'>
						<h3>Location</h3>
						{address ? <a href='https://goo.gl/maps/i4Fd5rHhDWR2'>{address}</a> : ''}
					</div>
					{infoItems.map(infoItem => {
						return <div key={infoItem.title} className='section--contact-info-item'>
							{infoItem.title ? <h3>{infoItem.title}</h3> : ''}
							{infoItem.content ? <p>{infoItem.content}</p> : ''}
						</div>
					})}
				</div>
			</div>	
		</div>
	</section>
)

