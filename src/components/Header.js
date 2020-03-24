import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/laptop.png'

const Header = props => (
  <React.Fragment>
    <header id="header" className="alt">
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <h1>Jennifer Ross</h1>
      <p>
        Virtual private tutoring for all K-6 subject areas and
        <br />
        computer programming
      </p>
      {/* <Link to="/bookme" id="top-book-btn" className="button">
        Book Me
      </Link> */}
    </header>
  </React.Fragment>
)

export default Header
