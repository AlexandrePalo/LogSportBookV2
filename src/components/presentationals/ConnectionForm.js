import React, { Component } from 'react'

export default class ConnectionForm extends Component {

  constructor (props, context) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <div className='panel panel-success' style={{background: 'none'}}>
        <div className='panel-heading'>
          <h3 className='panel-title' style={{fontSize: '15pt'}}>Connectez-vous !</h3>
        </div>
        <div className='panel-body'>
          <form>
            <div className="form-group">
              <label htmlFor="inputEmail">E-mail</label>
              <input type="text" className="form-control" id="inputEmail" placeholder="E-mail"
              onChange={(e) => { this.setState({ email: e.target.value })} }/>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Mot de passe</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Mot de passe"
              onChange={(e) => { this.setState({ password: e.target.value })} }/>
            </div>
            <button type="button" className="btn btn-success btn-block"
              onClick={() => {
                console.log('login')
                this.context.router.push('/')
              }}>
                Valider
            </button>
          </form>
        </div>
      </div>
    )
  }
}

ConnectionForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};
