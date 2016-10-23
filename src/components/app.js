import React, { Component } from 'react';
import TrainingBoard from './presentationals/TrainingBoard'
import SerieForm from './presentationals/SerieForm'

import moment from 'moment'

export default class App extends Component {

  render () {
    const exerciseBlock1 = {
      id: 'vbhjikozknjbn',
      exercise: {name: 'Développé couché', id: 'hbfujdieib'},
      series: [
        {
          id: 'iuhhvcjeko',
          load: 10,
          repetition: 80
        },
        {
          id: 'hgfcvbn',
          load: 8,
          repetition: 100
        }
      ]
    }

    const training = {
      id: 'nbvcrtyuiop',
      date_begin: moment('2016-10-22 18:00:00'),
      date_end: moment('2016-10-22 20:00:00'),
      place: 'BasicFit Metz Technopôle',
      exerciseBlocks : [
        exerciseBlock1
      ]
    }
    return (
      <div>
        <div>
          <TrainingBoard
          styleRoot='col-md-12'
          training={training}/>
        </div>
      </div>
    )
  }
}
