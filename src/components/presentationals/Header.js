import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import AuthService from '../../utils/AuthService'

class Header extends React.Component {

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  render () {
    let props = this.props
    const style = {
      divPicture: {
        marginTop: '5px',
        marginBottom: 'inherit'
      },
      picture: {
        maxHeight: '50px',
        borderRadius: '90',
        width: 'auto',
        verticalAlign: 'middle'
      }
    }
    return (
      <nav className="navbar navbar-static-top navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to='/' className='navbar-brand'>LSP</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to='/'>Accueil</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><p className="navbar-text">{props.nickname}</p></li>
              <li><Link to='settings'><i className="fa fa-cogs"></i></Link></li>
              <li><div className="navbar-text" style={style.divPicture}>
                <img style={style.picture} src={props.picture} />
              </div></li>
              {props.auth.loggedIn()
                ? <li><p className="navbar-text"><i className="fa fa-sign-out" onClick={
                  () => {
                    props.auth.logout()
                    this.context.router.push('/start/login')}
                }></i></p></li>
                : <li><Link to='/start/login'><i className="fa fa-sign-in"></i></Link></li>}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
