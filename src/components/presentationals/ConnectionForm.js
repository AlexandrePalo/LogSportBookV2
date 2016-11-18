import React, { Component, PropTypes } from 'react'

export default class ConnectionForm extends Component {

  constructor (props, context) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillReceiveProps (nextProps) {
    // If a user is now connected, let's redirect to the next page
    if (nextProps.userIsAuthenticated) {
      nextProps.next ? this.context.router.push(next) : this.context.router.push('/')
    }
  }

  render () {
    const style = {
      input: {
        fontWeight: '500',
        fontSize: '15pt',
        color: 'white'
      },
      inputText: {
        fontSize: '15pt',
        fontWeight: '500'
      }
    }
    return (
      <div className='panel panel-success' style={{background: 'none'}}>
        <div className='panel-heading'>
          <h3 className='panel-title' style={{fontSize: '15pt'}}>Connectez-vous !</h3>
        </div>
        <div className='panel-body'>
          <form>
            <div className="form-group" style={style.input}>
              <label htmlFor="inputUsername">Nom d'utilisateur</label>
              <input type="text" className="form-control" id="inputUsername"
                style={style.inputText}
                onChange={(e) => { this.setState({ username: e.target.value })} }/>
            </div>
            <div className="form-group" style={style.input}>
              <label htmlFor="inputPassword">Mot de passe</label>
              <input type="password" className="form-control" id="inputPassword"
                style={style.inputText}
                onChange={(e) => { this.setState({ password: e.target.value })} }/>
            </div>
            {this.props.loginIsRequested ?
              (<button type="button" className="btn btn-success btn-block">Chargement ...</button>) :
            (<button type="button" className="btn btn-success btn-block"
              onClick={() => {
                this.props.login({
                  username: this.state.username,
                  password: this.state.password
                })
              }}>
                Login
            </button>)
            }
          </form>
        </div>
      </div>
    )
  }
}

ConnectionForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};
