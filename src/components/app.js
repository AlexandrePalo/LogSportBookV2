import React, { Component } from 'react';
import ConnectionForm from './presentationals/ConnectionForm'
import Title from './presentationals/Title'

export default class App extends Component {

  login (username, password) {
    console.log(username)
    console.log(password)
  }

  render () {
    return (
      <div>
        <div className="row">
          <Title
          styleRoot='col-md-6 col-md-offset-3' />
        </div>
        <div>
          <ConnectionForm
          styleRoot='col-md-6 col-md-offset-3'
          onSubmit={this.login}/>
        </div>
      </div>
    )
  }
}
