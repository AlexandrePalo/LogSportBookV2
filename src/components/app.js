import React, { Component } from 'react';
import ConnectionForm from './presentationals/ConnectionForm'
import CreationUserForm from './presentationals/CreationUserForm'
import ExerciceBlock from './presentationals/ExerciceBlock'

export default class App extends Component {

  render () {
    const exerciseBlock = {
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
    return (
      <div>
        <div>
          <ExerciceBlock
          styleRoot='col-md-12'
          exerciseBlock={exerciseBlock}/>
        </div>
      </div>
    )
  }
}
