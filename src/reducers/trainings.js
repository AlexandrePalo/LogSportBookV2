import { combineReducers } from 'redux'
import training from './training'
import moment from 'moment'

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_TRAININGS':
    var newState = {}
    action.response.forEach((t) => {
      var newStateExerciseBlocks = {byId: {}, allIds: []}
      t.exerciseBlocks.forEach((eb) => {
        newStateExerciseBlocks.byId = {
          ...newStateExerciseBlocks.byId,
          [eb._id]: {
            id: eb._id,
            isFetching: false,
            exercise: {
              id: eb._exercise._id,
              name: eb._exercise.name,
              muscularGroup: eb._exercise.muscularGroup
            },
            date_begin: moment(eb.date_begin),
            date_end: moment(eb.date_end),
            index: eb.index,
            series: {byId: {}, allIds: []}
          }
        }
      })
      newStateExerciseBlocks.allIds = t.exerciseBlocks.map(eb => eb._id)
      newStateExerciseBlocks.isFetching = false

      newState[t._id] = {
        id: t._id,
        isFetching: false,
        description: t.description,
        place: t.place,
        date_begin: moment(t.date_begin),
        date_end: moment(t.date_end),
        exerciseBlocks: newStateExerciseBlocks
      }
    })
    return newState
  case 'ADD_TRAINING_SUCCESS':
    var res = action.response
    return {
      ...state,
      [action.response._id]: {
        id: res._id,
        isFetching: false,
        description: res.description,
        place: res.place,
        date_begin: moment(res.date_begin),
        date_end: moment(res.date_end),
        exerciseBlocks: {
          allIds: [],
          byId: {}
        }
      }
    }
  case 'REMOVE_TRAINING_SUCESS':
    var t = Object.assign({}, state)
    delete t[action.response._id]
    return t
  case 'REQUEST_SERIES':
  case 'RECEIVE_SERIES':
    return {
      ...state,
      [action.trainingId]: training(state[action.trainingId], action)
    }
  default:
    return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_TRAININGS':
    return action.response.map(t => t._id)
  case 'ADD_TRAINING_SUCCESS':
    return [...state, action.response._id]
  case 'REMOVE_TRAINING_SUCCESS':
    var index = state.indexOf(action.response._id)
    return state.slice(0, index).concat(state.slice(index + 1))
  default:
    return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
  case 'REQUEST_TRAININGS':
    return true
  case 'RECEIVE_TRAININGS':
    return false
  default:
    return state
  }
}

export const getAllTrainings = (state) => {
  return state.allIds.map(id => state.byId[id])
}

export const getVisibleTraining = (state, filter) => {
  return state.byId[filter]
}

const trainings = combineReducers({
  byId,
  allIds,
  isFetching
})

export default trainings
