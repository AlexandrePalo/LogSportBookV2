import React, { Component } from 'react'

class AddExerciseBlock extends Component {
  render () {
    let inputExercise
    const props = this.props
    return (
      <form className='col-md-offset-4 col-md-4'>
        <div className='form-group'>
          <label htmlFor='exercise'>Exercice</label>
          <select
            className='form-control'
            ref={node => {
            inputExercise = node
          }}>
            {props.exercises.map((e) => {
              return (<option value={e.id} key={e.id}>{e.name}</option>)
            })}
          </select>
        </div>
        <button type='button' className='btn btn-block btn-primary' onClick={() => {
          console.log(props.id)
          props.dispatch({
            type: 'ADD_EXERCISEBLOCK',
            id: props.id,
            exercise: props.byId[inputExercise.value]
          })
        }}>Nouvel exercice</button>
      </form>
    )
  }
}

export default AddExerciseBlock
