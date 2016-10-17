import React, { Component } from 'react'

export default class ConnectionForm extends Component {
  render () {
    return (
      <form className={this.props.styleRoot}>
      <div className="panel panel-default">
      <div className="panel-body">
        <div className="form-group">
          <label htmlFor="inputUsername">Nom d'utilisateur</label>
          <input type="text" className="form-control" id="inputUsername" placeholder="Nom d'utilisateur" />
        </div>
        <div className="form-group">
          <label htmlFor="inuputPassword">Mot de passe</label>
          <input type="password" className="form-control" id="inuputPassword" placeholder="Mot de passe" />
        </div>
        <button type="submit" className="btn btn-success btn-block">Valider</button>
        </div>
        </div>
      </form>
    )
  }
}
