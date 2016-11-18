import React, { Component } from 'react'
import moment from 'moment'

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
          props.addExerciseBlock({
            exerciseId: inputExercise.value,
            index: 0,
            date_begin: moment(),
            date_end: moment()
          }, props.id)
        }}>Nouvel exercice</button>
      </form>
    )
  }
}

export default AddExerciseBlock

AddExerciseBlock.contextTypes = {
  router: React.PropTypes.object.isRequired
}
