import { combineReducers } from 'redux'
import training from './training'
import { v4 } from 'node-uuid'
import moment from 'moment'

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_EXERCISEBLOCK':
  case 'ADD_SERIE':
  case 'REMOVE_EXERCISEBLOCK':
  case 'REMOVE_SERIE':
  case 'ADD_TRAINING':
    return {
      ...state,
      [action.id]: training(state[action.id], action)
    }
  case 'REMOVE_TRAINING':
    var t = Object.assign({}, state)
    delete t[action.id]
    return t
  case 'RECEIVE_TRAININGS':
    var newState = {}
    action.response.forEach((t) => {
      newState[t._id] = {
        id: t._id,
        description: t.description,
        place: t.place,
        date_begin: moment(t.date_begin),
        date_end: moment(t.date_end),
        exerciseBlocks: {
          byId: {},
          allIds: []
        }
      }
    })
    return newState
  default:
    return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TRAINING':
    return [...state, action.id]
  case 'REMOVE_TRAINING':
    var index = state.indexOf(action.id)
    return state.slice(0, index).concat(state.slice(index + 1))
  case 'RECEIVE_TRAININGS':
    console.log(action.response)
    return action.response.map(t => t._id)
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
