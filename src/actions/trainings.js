import fetch from 'whatwg-fetch'
import { ADD_TRAINING } from './actionTypes'

export addTraining (training) => {
  return {
    type: ADD_TRAINING,
    description: training.description,
    user: training.user,
    place: training.place,
    date_begin: training.date_begin,
    date_end: training.date_end
  }
}

export requestExerciseBlocks (training) => {
  return {
    type: REQUEST_EXERCISEBLOCKS,
    training
  }
}

export receiveExerciseBlocks (training, json) => {
  return {
    type: RECEIVE_EXERCISEBLOCKS,
    training,
    exerciseBlocks: json.data.children.map(child => child.data),
    receiveAt: Date.now()
  }
}

export fetchExerciseBlocks (training) => {
  return function (dispatch) {
    dispatch(requestExerciseBlocks(training))
    return fetch('localhost:3000/api/trainings/' + training.id + '/exerciseBlocks')
      .then(response => response.json())
      .then(json => dispatch(receiveExerciseBlocks(training, json)))
  }
}
