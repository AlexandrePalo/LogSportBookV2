import React, { Component } from 'react'

const Serie = ({
  repetitions,
  load,
  id,
  onDelete
}) => {
  return (
    <tr>
      <td>V</td>
      <td>Répétitions: {repetitions}</td>
      <td>Charge: {load}</td>
      <td onPress={() => { onDelete(id) }}>X</td>
    </tr>
  )
}

export default Serie
