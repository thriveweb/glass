import React from 'react'

import '../src/globalStyles.css'
import data from '../src/data.json'
import Home from '../src/views/Home'
import About from '../src/views/About'
import Contact from '../src/views/Contact'
import JoinUs from '../src/views/JoinUs'
import Blog from '../src/views/Blog'
import Model from '../src/views/Model'
import Models from '../src/views/Models'
import BlogPost from '../src/views/BlogPost'
import InfoPage from '../src/views/InfoPage'

const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle('/admin/cms.bundle.css')

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]
const getDocuments = collection => data[collection]

const globalSettings = getDocument('settings', 'global')
const posts = getDocuments('post')
const models = getDocuments('model')
const modelTypes = getDocuments('model-types')
const postCategories = getDocuments('post-category')

// Preview Templates
CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <Home
    fields={entry.toJS().data}
    globalSettings={globalSettings}
    posts={posts}
    postCategories={postCategories}
  />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <About fields={entry.toJS().data} globalSettings={globalSettings} />
))
CMS.registerPreviewTemplate('contact', ({ entry }) => (
  <Contact fields={entry.toJS().data} globalSettings={globalSettings} />
))
CMS.registerPreviewTemplate('joinUs', ({ entry }) => (
  <JoinUs fields={entry.toJS().data} globalSettings={globalSettings} />
))
CMS.registerPreviewTemplate('blog', ({ entry }) => (
  <Blog fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('info-page', ({ entry }) => (
  <InfoPage fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('models', ({ entry }) => (
  <Models
    fields={entry.toJS().data}
    models={models}
    modelTypes={modelTypes}
    selectedModelType={models[0]}
  />
))
CMS.registerPreviewTemplate('model', ({ entry }) => (
  <Model
    globalSettings={globalSettings}
    models={models}
    fields={entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('post', ({ entry }) => (
  <BlogPost fields={entry.toJS().data} globalSettings={globalSettings} />
))

window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})

console.log(React.version)
