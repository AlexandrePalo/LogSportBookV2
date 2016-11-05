import { combineReducers } from 'redux'
import training from './training'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EXERCISEBLOCK':
    case 'ADD_TRAINING':
    case 'ADD_SERIE':
    case 'REMOVE_EXERCISEBLOCK':
      return {
        ...state,
        [action.id]: training(state[action.id], action)
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return [...state, action.id]
    default:
      return state
  }
}

const getAllTrainings = (state) => {
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
