import serie from './serie'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_SERIES':
    var newState = {}
    action.response.forEach((serie) => {
      console.log(serie)
      newState = {
        ...newState,
        [serie._id]: {
          id: serie._id,
          load: serie.load,
          repetitions: serie.repetitions,
          index: serie.index
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
  case 'RECEIVE_SERIES':
    return action.response.map((serie) => serie._id)
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

const series = combineReducers({
  byId,
  allIds,
  isFetching
})

export default series

export const getAllSeries = (state) => {
  return state.allIds.map(id => state.byId[id])
}
