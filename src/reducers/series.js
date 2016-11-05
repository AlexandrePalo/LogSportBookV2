import serie from './serie'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SERIE':
      return {
        ...state,
        [action.id]: serie(state[action.id], action)
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SERIE':
      return [...state, action.id]
    default:
      return state
  }
}

const series = combineReducers({
  byId,
  allIds
})

export default series

export const getAllSeries = (state) => {
  return state.allIds.map(id => state.byId[id])
}
