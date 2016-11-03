import React, { Component } from 'react'
import ExerciseBlock from './ExerciseBlock'
import moment from 'moment'
import AddExerciseBlock from '../containers/AddExerciseBlock'

class TrainingBoard extends Component {
  render () {
    const props = this.props
    return (
      <div>
        <div className='row'>
          <h1>Training n°{props.id}, {props.description}</h1>
        </div>
        <div className='row'>
          <table className='table table-striped table-hover'>
            <tbody>
              {props.exerciseBlocks.map(elem =>
                <ExerciseBlock
                  exercise={elem.exercise}
                  numberSeries={elem.series.length}
                  duration={elem.d}
                  id={elem.id}
                  key={elem.id}
                  onDelete={(id) => console.log("delete " + String(id))}
                />
              )}
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
