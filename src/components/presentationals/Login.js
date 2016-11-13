import React, { PropTypes as T } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import AuthService from '../../utils/AuthService'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  static contextTypes = {
    router: T.object
  }

  render() {
    const { auth } = this.props

    if (auth.loggedIn()) {
      this.context.router.push('/')
    }

    return (
      <div className='panel panel-success' style={{background: 'none'}}>
        <div className='panel-heading'>
          <h3 className='panel-title' style={{fontSize: '15pt'}}>Connectez-vous !</h3>
        </div>
        <div className='panel-body'>
            <button className='btn btn-success' onClick={auth.login.bind(this)}>Connection</button>
        </div>
      </div>
    )
  }
}

export default Login
