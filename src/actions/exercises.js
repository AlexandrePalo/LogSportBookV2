import * as api from '../api/index'

export const fetchExercises = () =>
  api.fetchExercises().then(response =>
    receiveExercises(response))

const receiveExercises = (response) => ({
  type: 'RECEIVE_EXERCISES',
  response
})
