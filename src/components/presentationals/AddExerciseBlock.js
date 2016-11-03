import React, { Component } from 'react'

class AddExerciseBlock extends Component {
  render () {
    let inputExercise
    const props = this.props
    return (
      <div>
        <select ref={node => {
          inputExercise = node
        }}>
          {props.exercises.map((e) => {
            return (<option value={e.id} key={e.id}>{e.name}</option>)
          })}
        </select>
        <button className='btn btn-primary' onClick={() => {
          props.dispatch({
            type: 'ADD_EXERCISEBLOCK',
            id: 1,
            idExerciseBlock: undefined,
            exercise: props.byId[inputExercise.value]
          })
        }}>Nouvel exercice</button>
      </div>
    )
  }
}

export default AddExerciseBlock
