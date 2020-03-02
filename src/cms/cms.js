import React from 'react'
import CMS from 'netlify-cms-app';
import './cms-utils'

import uploadcare from 'netlify-cms-media-library-uploadcare';

import { HomePageTemplate } from '../templates/HomePage'
import { AboutPageTemplate } from '../templates/AboutPage'
import { BlogPageTemplate } from '../templates/BlogPage'
import { BlogPostTemplate } from '../templates/BlogPost'
import { ContactPageTemplate } from '../templates/ContactPage'
import { InfoPageTemplate } from '../templates/InfoPage'
import { JoinUsPageTemplate } from '../templates/JoinUsPage'
import { ModelPageTemplate } from '../templates/ModelPage'
import { ModelsPageTemplate } from '../templates/ModelsPage'
import { InfluencersPageTemplate } from '../templates/InfluencersPage'

CMS.registerMediaLibrary(uploadcare);

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}


CMS.registerPreviewTemplate('home-page', ({ entry }) => {
  const entryData = entry.toJS()
  console.log(entryData)

  return <HomePageTemplate {...entry.toJS().data} {...entry.toJS().data.settingsYaml}
  posts={entry.toJS().data.posts} />
})
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog', ({ entry }) => (
  <BlogPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('post', ({ entry }) => {
  const entryData = entry.toJS()

  return <BlogPostTemplate {...entryData.data} fields={entryData.data} />
})
CMS.registerPreviewTemplate('contact', ({ entry }) => {
  const entryData = entry.toJS()
  return <ContactPageTemplate {...entryData.data} globalSettings = {entryData.data.settingsYaml} />
})
CMS.registerPreviewTemplate('info-page', ({ entry }) => (
  <InfoPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('joinUs', ({ entry }) => (
  <JoinUsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('model', ({ entry }) => (
  <ModelPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('models', ({ entry }) => (
  <ModelsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('influencers', ({ entry }) => (
  <InfluencersPageTemplate {...entry.toJS().data} />
))
