import React, { Component } from 'react'
import ExerciseBlock from './ExerciseBlock'
import ExerciseBlockForm from './ExerciseBlockForm'
import moment from 'moment'
import AddExerciseBlock from './AddExerciseBlock'

var nextTrainingId = 1

class TrainingBoard extends Component {
  render () {
    const props = this.props
    return (
      <div>
        <div className='row'>
          <h1>Training n°{this.props.id}, {this.props.description}</h1>
        </div>
        <div className='row'>
          <table className='table table-striped table-hover'>
            <tbody>
              {this.props.exerciseBlocks.map(elem =>
                <ExerciseBlock
                  name={elem.name}
                  numberSeries={elem.ns}
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
          <AddExerciseBlock
          onAdd={(exercise) => props.onAdd(exercise)}/>
        </div>
      </div>
    )
  }
}

export default TrainingBoard
