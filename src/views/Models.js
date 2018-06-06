import React from 'react'

import ModelListing from '../components/ModelListing'
import Banner from '../components/Banner'

export default ({ fields, modelTypes, selectedModelType = {}, models }) => {
  const { title, subTitle } = fields

  return (
    <main className='Models'>
      <Banner
        image={selectedModelType.featuredImage}
        title={selectedModelType.name}
        subTitle={subTitle}
      />
      {!!models && (
        <ModelListing
          models={models}
          title={title}
          subTitle={subTitle}
          modelTypes={modelTypes}
          selectedModelType={selectedModelType.name}
        />
      )}
    </main>
  )
}
