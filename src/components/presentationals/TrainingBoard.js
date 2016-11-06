import React, { Component } from 'react'
import ExerciseBlock from '../containers/ExerciseBlock'
import moment from 'moment'
import AddExerciseBlock from '../containers/AddExerciseBlock'

class TrainingBoard extends Component {
  render () {
    const props = this.props
    return (
      <div className='col-12-md'>
        <div className='row'>
          <h1>Training n°{props.id}, {props.description}</h1>
        </div>
        <div className='row'>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th></th>
                <th>Exercice</th>
                <th>Séries</th>
                <th>Durée</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.exerciseBlocks.map((e) => {
                return (
                  <ExerciseBlock
                    key={e.id}
                    exercise={e.exercise}
                    numberSeries={e.series.allIds.length}
                    duration='20'
                    trainingId={props.id}
                    id={e.id}
                    onDelete={() => console.log('delete')}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='row'>
          <AddExerciseBlock />
        </div>
      </div>
    )
  }
}

export default TrainingBoard
