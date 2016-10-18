import React, { Component } from 'react'

export default class ConnectionForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <form className={this.props.styleRoot}
      onSubmit={() => { this.props.onSubmit(
        this.state.username,
        this.state.password) }}>
      <div className="panel panel-default">
      <div className="panel-body">
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
        <button type="submit" className="btn btn-success btn-block">Valider</button>
        </div>
        </div>
      </form>
    )
  }
}
