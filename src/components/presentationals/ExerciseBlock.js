import React from 'react'

const ExerciseBlock = ({
  name,
  numberSeries,
  duration,
  id,
  onDelete,
}) => {
  return (
    <tr>
      <td>V</td>
      <td>{name}</td>
      <td>{numberSeries}</td>
      <td>{duration}</td>
      <td onPress={() => onDelete(id)}>X</td>
    </tr>
  )
}

export default ExerciseBlock
