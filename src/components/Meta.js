import React from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _pickBy from 'lodash/pickBy'

const onlyTruthyValues = obj => _pickBy(obj, item => item)

const Meta = props => {
  const {
    title,
    url,
    description,
    absoluteImageUrl,
    twitterSiteAccount,
    twitterCreatorAccount,
    noindex,
    canonicalLink,
    googleTrackingId
    // overwrite { title, description } if in fields or fields.meta
  } = {
    ...props,
    ...onlyTruthyValues(_get(props, 'fields')),
    ...onlyTruthyValues(_get(props, 'fields.meta'))
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
      {noindex && <meta name='robots' content='noindex' />}
      {canonicalLink && <link rel='canonical' href={canonicalLink} />}
      {googleTrackingId && (
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
  />
)}

{googleTrackingId && (
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleTrackingId}');
    `}
  </script>
)}
    </Helmet>
  )
}

export default Meta
