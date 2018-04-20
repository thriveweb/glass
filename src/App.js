import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import _merge from 'lodash/merge'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import Home from './views/Home'
import NoMatch from './views/NoMatch'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AOS from './components/AOS'
import Spinner from './components/Spinner'
import data from './data.json'

class App extends Component {
  state = {
    data,
    loading: false
  }

  componentDidMount = () => {
    this.fetchPreviewContent()
  }

  fetchPreviewContent = () => {
    if (
      !window.netlifyIdentity ||
      !window.netlifyIdentity.currentUser() ||
      process.env.NODE_ENV === 'development'
    ) {
      return false
    }
    import('./util/fetch-content').then(({ fetchContent }) => {
      this.setState({ loading: true })
      fetchContent()
        .then(newData => {
          this.setState(prevState => {
            const data = _merge(prevState.data, newData)
            return { data, loading: false }
          })
        })
        .catch(() => this.setState({ loading: false }))
    })
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      twitter,
      facebook,
      linkedin,
      instagram,
      phone,
      address,
      email,
      footer,
      headerScripts,
      headerButton,
    } = globalSettings

    return (
      <Router>
        <div className='React-Wrap'>
          {this.state.loading && <Spinner />}
          <AOS options={{ duration: 250 }} />
          <ScrollToTop />
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
          <Meta
            title={siteTitle}
            url={siteUrl}
            description={siteDescription}
            headerScripts={headerScripts}
          />
          <Switch>
            <Route
              path='/'
              exact
              render={props => (
                <Home page={this.getDocument('pages', 'home')} globalSettings={globalSettings} {...props} />
              )}
            />
            <Route render={() => <NoMatch siteUrl={siteUrl} />} />
          </Switch>
          <Footer title={footer.title} footerNav={footer.footerNav} twitter={twitter} facebook={facebook} linkedin={linkedin} instagram={instagram} />
        </div>
      </Router>
    )
  }
}

export default App
