import React, { Component } from 'react'
import ExerciseBlock from './ExerciseBlock'
import ExerciseBlockForm from './ExerciseBlockForm'
import moment from 'moment'
import AddExerciseBlock from './AddExerciseBlock'

var nextTrainingId = 1

const TrainingBoard = ({
  id,
  description,
  exerciseBlocks
}) => {
  // manque onDelete pour ExerciseBlock
  // et onAdd pour AddExerciseBlock
  return (
    <div>
      <div className='row'>
        <h1>Exercice n°{id}, {description}</h1>
      </div>
      <div className='row'>
        <table className='table table-striped table-hover'>
          <tbody>
            {exerciseBlocks.map(elem =>
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
        onAdd={(id) => console.log("add " + String(id))}/>
      </div>
    </div>
  )
}

export default TrainingBoard
