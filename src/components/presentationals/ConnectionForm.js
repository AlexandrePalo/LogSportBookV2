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
              <label htmlFor="inputEmail">E-mail</label>
              <input type="text" className="form-control" id="inputEmail"
                style={style.inputText}
                onChange={(e) => { this.setState({ email: e.target.value })} }/>
            </div>
            <div className="form-group" style={style.input}>
              <label htmlFor="inputPassword">Mot de passe</label>
              <input type="password" className="form-control" id="inputPassword"
                style={style.inputText}
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
