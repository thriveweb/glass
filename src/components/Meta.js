import React from 'react'
import Helmet from 'react-helmet'
import _assign from 'lodash/assign'
import _get from 'lodash/get'

const Meta = props => {
  const {
    title,
    url,
    description,
    absoluteImageUrl,
    twitterSiteAccount,
    twitterCreatorAccount,
    headerScripts
    // overwrite { title, description } if in fields or fields.meta
  } = _assign({}, props, _get(props, 'fields'), _get(props, 'fields.meta'))

  // write headerScripts
  const headerScriptsElement = document.head.querySelector('#headerScripts')
  if (headerScripts && headerScriptsElement) {
    headerScriptsElement.outerHTML = headerScripts
  }

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property='og:title' content={title} />}
      {description && <meta name='description' content={description} />}
      {description && <meta property='og:description' content={description} />}
      {url && <meta property='og:type' content='website' />}
      {url && <meta property='og:url' content={url} />}
      {absoluteImageUrl && (
        <meta name='twitter:card' content='summary_large_image' />
      )}
      {absoluteImageUrl && (
        <meta property='og:image' content={absoluteImageUrl} />
      )}
      {twitterSiteAccount && (
        <meta name='twitter:site' content={twitterSiteAccount} />
      )}
      {twitterCreatorAccount && (
        <meta name='twitter:creator' content={twitterCreatorAccount} />
      )}
      {console.log(document.title)}
    </Helmet>
  )
}

export default Meta
