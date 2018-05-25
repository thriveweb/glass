import _kebabCase from 'lodash/kebabCase'

export const slugify = (string = '') =>
  string
    .toLowerCase()
    .split('/')
    .map(_kebabCase)
    .join('/')
