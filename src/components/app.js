import React, { Component } from 'react';
import ConnectionForm from './presentationals/ConnectionForm'
import Title from './presentationals/Title'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Title
          styleRoot='col-md-6 col-md-offset-3' />
        </div>
        <div>
          <ConnectionForm
          styleRoot='col-md-6 col-md-offset-3'/>
        </div>
      </div>
    )
  }
}
