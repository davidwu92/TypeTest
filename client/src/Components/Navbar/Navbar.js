import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-extended black">
      <div className="nav-wrapper" id="navWrapper">
        <div className="brand-logo" id="navTitle"><Link to="/">WukiTyper</Link></div>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab left"><Link to="/"><i className="fas fa-home"></i></Link></li>
          <li className="tab"><Link to="/typetest">Type Test</Link></li>
          <li className="tab"><Link to="/leaderboards">Leaderboards</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar