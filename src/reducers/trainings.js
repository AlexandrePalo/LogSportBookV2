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
      let t = Object.assign({}, state)
      delete t[action.id]
      return t
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return [...state, action.id]
    case 'REMOVE_TRAINING':
      let index = state.indexOf(action.id)
      return state.slice(0, index).concat(state.slice(index + 1))
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
  allIds
})

export default trainings
