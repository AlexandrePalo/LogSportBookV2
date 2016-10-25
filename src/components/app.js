import React, { Component } from 'react';
import TrainingBoard from './presentationals/TrainingBoard'
import SerieForm from './presentationals/SerieForm'
import moment from 'moment'

export default class App extends Component {

  render () {
    return (
      <div>
        <div>
          <TrainingBoard
            styleRoot='col-md-12'
          />
        </div>
      </div>
    )
  }
}
