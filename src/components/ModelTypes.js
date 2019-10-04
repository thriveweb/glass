import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import _kebabCase from 'lodash/kebabCase'
import './NavList.css'

export default ({ modelTypes, handleSelect, selectedModelType }) => {
  return (
    <StaticQuery
      query={graphql`
        query ModelTypesQuery {
          modelTypes: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "model-types" } } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { modelTypes } = data
        const modelTypeOrder = [
          'Women',
          'Men',
          'Girls',
          'Boys',
          'Classic',
          'Global'
        ]

        return (
          <ul className="nav--list-items">
            {modelTypes.edges &&
              !!modelTypes.edges.length &&
              modelTypes.edges
                .sort((a, b) =>
                  modelTypeOrder.indexOf(a.node.frontmatter.title) >
                  modelTypeOrder.indexOf(b.node.frontmatter.title)
                    ? 1
                    : -1
                )
                .map(({ node }) => {
                  const { frontmatter } = node
                  const { title } = frontmatter

                  return (
                    <li className={`nav--list-item`} key={title}>
                      <Link to={`/models/${_kebabCase(title)}/`} activeClassName='active'>{title}</Link>
                    </li>
                  )
                })}
                <li className={`nav--list-item influencer-link`}>
                  <Link to={`/influencers/`} activeClassName='active'>Influencers</Link>
                </li>
          </ul>
        )
      }}
    />
  )
}
