import { combineReducers } from 'redux'
import training from './training'

const initialTrainings = {
  1: {
    id: 1,
    description: 'pectoraux',
    exerciseBlocks : [
      {
        id: 1,
        ns: 4,
        d: 20,
        name: "Développé couché"
      },
      {
        id: 2,
        ns: 5,
        d: 25,
        name: "Dips"
      }
    ]
  }
}

const byId = (state = initialTrainings, action) => {
  switch (action.type) {
    case 'ADD_EXERCISEBLOCK':
    case 'ADD_TRAINING':
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

export const visibilityFilter = (state = 1, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const trainings = combineReducers({
  byId,
  allIds
})

export default trainings
