import serie from './serie'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_SERIES':
    var newState = {}
    action.response.forEach((serie) => {
      newState = {
        ...newState,
        [serie._id]: {
          id: serie._id,
          isFetching: false,
          load: serie.load,
          repetitions: serie.repetitions,
          index: serie.index
        }
      }
    })
    return newState
  case 'ADD_SERIE_SUCCESS':
    var res = action.response
    return {
      ...state,
      [res._id]: {
        id: res._id,
        isFetching: false,
        index: res.index,
        load: res.load,
        repetitions: res.repetitions
      }
    }
  case 'REMOVE_SERIE_SUCCESS':
    var s = Object.assign({}, state)
    delete s[action.response._id]
    return s
  default:
    return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_SERIES':
    return action.response.map((serie) => serie._id)
  case 'ADD_SERIE_SUCCESS':
    return [...state, action.response._id]
  case 'REMOVE_SERIE_SUCCESS':
    var index = state.indexOf(action.response._id)
    return state.slice(0, index).concat(state.slice(index + 1))
  default:
    return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
  case 'REQUEST_SERIES':
    return true
  case 'RECEIVE_SERIES':
    return false
  default:
    return state
  }
}

const series = combineReducers({
  byId,
  allIds,
  isFetching
})

export default series

export const getAllSeries = (state) => {
  return state.allIds.map(id => state.byId[id])
}
