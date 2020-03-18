import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Jennifer Ross</h1>
        <p>Private tutoring for all K-6 subject areas and<br />
        computer programming.</p>
    </header>
)

export default Header
