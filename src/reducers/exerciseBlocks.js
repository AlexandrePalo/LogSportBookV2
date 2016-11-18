import exerciseBlock from './exerciseBlock'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_SERIES':
    return {
      ...state,
      [action.exerciseBlockId]: exerciseBlock(state[action.exerciseBlockId], action)
    }
  default:
    return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
  default:
    return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
  default:
    return state
  }
}

const exerciseBlocks = combineReducers({
  byId,
  allIds,
  isFetching
})

export default exerciseBlocks

export const getAllExerciseBlocks = (state) => {
  return state.allIds.map(id => state.byId[id])
}
