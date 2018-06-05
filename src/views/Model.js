import React from 'react'

import Banner from '../components/Banner'
import SingleModel from '../components/SingleModel'

export default ({
  page,
  modelTypes,
  selectedModelType,
  globalSettings,
  fields
}) => {
  const {
    featuredImage,
    firstName,
    height,
    waist,
    measurementType,
    bust,
    hips,
    size,
    shoeSize,
    hair,
    eyes,
    imagePortfolio,
    collection
  } = fields

  return (
    <main className='Model'>
      <Banner
        image={featuredImage}
        title={firstName}
        subTitle={"Model's Profile"}
      />
      <SingleModel
        firstName={firstName}
        imagePortfolio={imagePortfolio}
        collection={collection}
        height={height}
        waist={waist}
        measurementType={measurementType}
        bust={bust}
        hips={hips}
        size={size}
        shoeSize={shoeSize}
        hair={hair}
        eyes={eyes}
        modelTypes={modelTypes}
      />
    </main>
  )
}
