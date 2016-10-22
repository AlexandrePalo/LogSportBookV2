import React, { Component } from 'react';
import ConnectionForm from './presentationals/ConnectionForm'
import CreationUserForm from './presentationals/CreationUserForm'
import Title from './presentationals/Title'

export default class App extends Component {

  login (email, password) {
    // Login
  }

  render () {
    return (
      <div>
        <div className="row">
          <Title
          styleRoot='col-md-6 col-md-offset-3' />
        </div>
        <div>
          <CreationUserForm
          styleRoot='col-md-6 col-md-offset-3'
          onSubmit={this.login}/>
        </div>
      </div>
    )
  }
}
