import { combineReducers } from 'redux'
import training from './training'

const initial = {
  1: {
    id: 1,
    description: 'pectoraux',
    exerciseBlocks : {
      byId: {},
      allIds: []
    }
  }
}

const byId = (state = initial, action) => {
  switch (action.type) {
    case 'ADD_EXERCISEBLOCK':
    case 'ADD_TRAINING':
    case 'ADD_SERIE':
    case 'REMOVE_EXERCISEBLOCK':
    case 'REMOVE_SERIE':
      return {
        ...state,
        [action.id]: training(state[action.id], action)
      }
    default:
      return state
  }
}

const allIds = (state = [1], action) => {
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
