import React from 'react'
import { Link } from 'react-router'

const Header = ({
  first_name,
  avatar,
  onClickSettings
}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">LSP</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><Link to='/'>Accueil</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><p className="navbar-text">{first_name}</p></li>
            <li><Link to='settings'><i className="fa fa-cogs fa-2x"></i></Link></li>
            <li><p className="navbar-text">{avatar}</p></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
