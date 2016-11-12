import * as api from '../api/index'
import { v4 } from 'node-uuid'

export const fetchExercises = () =>
  api.fetchExercises().then(response =>
    receiveExercises(response))

const receiveExercises = (response) => ({
  type: 'RECEIVE_EXERCISES',
  response
})

export const addExerciseBlock = (idTraining, exercise, idExerciseBlock=v4()) => ({
  type: 'ADD_EXERCISEBLOCK',
  id: idTraining,
  exerciseBlockId: idExerciseBlock,
  exercise: exercise
})
