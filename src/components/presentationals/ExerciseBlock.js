import React from 'react'

const ExerciseBlock = ({
  exercise,
  numberSeries,
  duration,
  id,
  onDelete,
}) => {
  return (
    <tr>
      <td>V</td>
      <td>{exercise.name}</td>
      <td>{numberSeries}</td>
      <td>{duration}</td>
      <td onClick={() => onDelete(id)}>X</td>
    </tr>
  )
}

export default ExerciseBlock
