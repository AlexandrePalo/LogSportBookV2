import React, { Component } from 'react'

export default class ConnectionForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
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
          <label htmlFor="inputUsername">Nom d'utilisateur</label>
          <input type="text" className="form-control" id="inputUsername" placeholder="Nom d'utilisateur"
          onChange={(e) => { this.setState({ username: e.target.value })} }/>
        </div>
        <div className="form-group">
          <label htmlFor="inuputPassword">Mot de passe</label>
          <input type="password" className="form-control" id="inuputPassword" placeholder="Mot de passe"
          onChange={(e) => { this.setState({ password: e.target.value })} }/>
        </div>
        <button type="submit" className="btn btn-success btn-block">Valider</button>
        </div>
        </div>
      </form>
    )
  }
}
