import React, { Component } from 'react'
import _throttle from 'lodash/throttle'
import _kebabCase from 'lodash/kebabCase'
import './Nav.css'

import { slugify } from '../util/url'
import { Link } from 'gatsby'

import Logo from './Logo'
import LogoScroll from './LogoScroll'

import { ICONLogin } from './Icons'

class Nav extends Component {
  state = {
    navActive: null,
    mobileActive: false,
    menuItemActive: false
  }

  onMobileClick = () => {
    this.setState({
      mobileActive: !this.state.mobileActive
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.location !== prevProps.location) {
      this.setState({
        mobileActive: false
      })
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', _throttle(this.calcNavPosition, 50))
  }

  onMenuItemClick = () => {
    this.setState({
      menuItemActive: !this.state.menuItemActive
    })
  }

  calcNavPosition = () => {
    if (window.pageYOffset > 20 && !this.state.navActive) {
      this.setState({
        navActive: true
      })
    } else if (window.pageYOffset < 20 && this.state.navActive) {
      this.setState({
        navActive: null
      })
    }
  }

  render() {
    const { header, modelTypes = [], modelTypeOrder } = this.props
    const { mobileActive, navActive, menuItemActive } = this.state

    return (
      <nav
        className={`nav ${navActive ? 'active' : ''} ${
          mobileActive ? 'mobile-active' : ''
        }`}
      >
        <div className="nav--container container">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/">
            <LogoScroll />
          </Link>
          <nav>
            <ul>
              <li className="mobile-only">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li
                onClick={this.onMenuItemClick}
                className={`menu-item-has-children ${
                  menuItemActive ? 'active' : ''
                }`}
              >
                <span className="menu-item-content">
                  Models <span className="dropdown-arrow">&#x25BE;</span>
                </span>
                <ul className="subMenu">
                  {modelTypes.edges
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
                        <li key={title}>
                          <Link to={`/models/${_kebabCase(title)}/`}>
                            {title}
                          </Link>
                        </li>
                      )
                    })}
                </ul>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="client-nav">
            <Link className="title" to="/join-us">
              <ICONLogin /> Join Us
            </Link>
            <Link className="button" to={slugify(`/${header.buttonUrl}`)}>
              {header.buttonText}
            </Link>
          </div>
          <div id="mobile-menu" onClick={this.onMobileClick}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
    )
  }

  static defaultProps = {
    modelTypeOrder: ['Women', 'Men', 'Girls', 'Boys', 'Classic', 'Global']
  }
}

export default Nav
