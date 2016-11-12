import serie from './serie'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_SERIE':
    return {
      ...state,
      [action.id]: serie(state[action.id], action)
    }
  case 'REMOVE_SERIE':
    var s = Object.assign({}, state)
    delete s[action.id]
    return s
  default:
    return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SERIE':
    return [...state, action.id]
  case 'REMOVE_SERIE':
    var index = state.indexOf(action.id)
    return state.slice(0, index).concat(state.slice(index + 1))
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
