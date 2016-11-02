import React from 'react'

const AddExerciseBlock = ({
  dispatch
}) => {
  let inputExercise
  return (
    <div>
      <select ref={node => {
        inputExercise = node
      }}>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </select>
      <button className='btn btn-primary' onClick={() => {
        dispatch({
          type: 'ADD_EXERCISEBLOCK',
          id: 1,
          exercise: inputExercise.value
        })
      }}>Nouvel exercice</button>
    </div>
  )
}

export default AddExerciseBlock
