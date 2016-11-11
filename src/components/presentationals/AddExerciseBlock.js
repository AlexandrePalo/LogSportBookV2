import React, { Component } from 'react'
import { v4 } from 'node-uuid'

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
          let id = v4()
          props.dispatch({
            type: 'ADD_EXERCISEBLOCK',
            id: props.id,
            exerciseBlockId: id,
            exercise: props.byId[inputExercise.value]
          })
          this.context.router.push('/trainings/' + props.id + '/exerciseblocks/' + id)
        }}>Nouvel exercice</button>
      </form>
    )
  }
}

export default AddExerciseBlock

AddExerciseBlock.contextTypes = {
    router: React.PropTypes.object.isRequired
}
