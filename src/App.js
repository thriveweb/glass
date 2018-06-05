import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'
import { slugify } from './util/url'

import data from './data.json'

// Components

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Spinner from './components/Spinner'

// Views

import Home from './views/Home'
import About from './views/About'
import Models from './views/Models'
import Model from './views/Model'
import Blog from './views/Blog'
import BlogPost from './views/BlogPost'
import Contact from './views/Contact'
import JoinUs from './views/JoinUs'
import InfoPage from './views/InfoPage'
import NoMatch from './views/NoMatch'

class App extends Component {
  state = {
    data,
    loading: false
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection] || []

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      twitter,
      facebook,
      linkedin,
      instagram,
      footer,
      headerScripts,
      header
    } = globalSettings

    const modelTypes = _sortBy(this.getDocuments('model-types'), 'order')
    const models = this.getDocuments('model')
    const posts = this.getDocuments('post')
    const postCategories = this.getDocuments('post-category')
    const infoPages = this.getDocuments('info-page')

    const RouteWithMeta = ({ component: Component, ...props }) => (
      <Route
        {...props}
        render={routeProps => (
          <Fragment>
            <Meta {...props} />
            <Component {...routeProps} {...props} />
          </Fragment>
        )}
      />
    )

    return (
      <Router>
        <div className='React-Wrap'>
          {this.state.loading && <Spinner />}
          <ScrollToTop />
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
          <Meta
            headerScripts={headerScripts}
            absoluteImageUrl={siteUrl + '/images/card-og.jpg'}
          />

          <Nav header={header} modelTypes={modelTypes} />

          <Switch>
            <RouteWithMeta
              path='/'
              exact
              component={Home}
              fields={this.getDocument('pages', 'home')}
              globalSettings={globalSettings}
              posts={posts}
              postCategories={postCategories}
            />
            <RouteWithMeta
              path='/about'
              exact
              component={About}
              fields={this.getDocument('pages', 'about')}
              globalSettings={globalSettings}
            />
            <RouteWithMeta
              path='/contact'
              exact
              component={Contact}
              fields={this.getDocument('pages', 'contact')}
              globalSettings={globalSettings}
            />
            <RouteWithMeta
              path='/join-us'
              exact
              component={JoinUs}
              fields={this.getDocument('pages', 'join-us')}
              globalSettings={globalSettings}
            />
            <RouteWithMeta
              path='/blog'
              exact
              component={Blog}
              fields={this.getDocument('pages', 'blog')}
              posts={posts}
              postCategories={postCategories}
              globalSettings={globalSettings}
            />

            {posts.map(post => {
              const path = slugify(`/blog-post/${post.title}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={BlogPost}
                  globalSettings={globalSettings}
                  fields={post}
                />
              )
            })}

            {modelTypes.map(modelType => {
              const path = slugify(`/models/${modelType.title}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  component={Models}
                  fields={this.getDocument('pages', 'models')}
                  modelTypes={modelTypes}
                  globalSettings={globalSettings}
                  selectedModelType={modelType}
                  models={models}
                />
              )
            })}

            {models.map(model => {
              const path = slugify(`/model/${model.title}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  fields={model}
                  component={Model}
                  globalSettings={globalSettings}
                  models={models}
                  modelTypes={modelTypes}
                />
              )
            })}

            {infoPages.map(page => {
              const path = slugify(`/${page.title}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={InfoPage}
                  fields={page}
                />
              )
            })}

            <Route component={() => <NoMatch siteUrl={siteUrl} />} />
          </Switch>

          <Footer
            title={footer.title}
            footerNav={footer.footerNav}
            twitter={twitter}
            facebook={facebook}
            linkedin={linkedin}
            instagram={instagram}
          />
        </div>
      </Router>
    )
  }
}

export default App
