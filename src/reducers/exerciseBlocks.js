import exerciseBlock from './exerciseBlock'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_EXERCISEBLOCK':
  case 'ADD_SERIE':
  case 'REMOVE_SERIE':
    return {
      ...state,
      [action.id]: exerciseBlock(state[action.id], action)
    }
  case 'REMOVE_EXERCISEBLOCK':
    var s = Object.assign({}, state)
    delete s[action.id]
    return s
  case 'RECEIVE_EXERCISEBLOCKS':
    var newState = {}
    action.response.forEach((eb) => {
      newState[eb._id] = {
        id: eb._id,
        exercise: eb.exercise,
        series: {
          byId: {},
          allIds: []
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
  case 'ADD_EXERCISEBLOCK':
    return [...state, action.id]
  case 'REMOVE_EXERCISEBLOCK':
    var index = state.indexOf(action.id)
    return state.slice(0, index).concat(state.slice(index + 1))
  case 'RECEIVE_EXERCISEBLOCKS':
    return action.response.map(eb => eb._id)
  default:
    return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
  case 'REQUEST_EXERCISEBLOCKS':
    return true
  case 'RECEIVE_EXERCISEBLOCKS':
    return false
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
