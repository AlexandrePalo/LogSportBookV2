import exerciseBlock from './exerciseBlock'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EXERCISEBLOCK':
      return {
        ...state,
        [action.id]: exerciseBlock(state[action.id], action)
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXERCISEBLOCK':
      return [...state, action.id]
    default:
      return state
  }
}

const exerciseBlocks = combineReducers({
  byId,
  allIds
})

export default exerciseBlocks

export const getAllExerciseBlocks = (state) => {
  return state.allIds.map(id => state.byId[id])
}
