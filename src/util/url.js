import _kebabCase from 'lodash/kebabCase'

export const slugify = (string = '') =>
  string
    .split('/')
    .map(_kebabCase)
    .join('/')
