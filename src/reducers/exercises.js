import { combineReducers } from 'redux'

const exercise = (state, action) => {
  switch (action.type) {
  default:
    return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_EXERCISES':
    var newState = {}
    action.response.forEach((e) => {
      newState[e._id] = {
        id: e._id,
        isFetching: false,
        name: e.name
      }
    })
    return newState
  default:
    return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
  case 'RECEIVE_EXERCISES':
    return action.response.map(e => e._id)
  default:
    return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
  case 'REQUEST_EXERCISES':
    return true
  case 'RECEIVE_EXERCISES':
    return false
  default:
    return state
  }
}

const exercises = combineReducers({
  byId,
  allIds,
  isFetching
})

export default exercises

export const getAllExercises = (state) => {
  return state.allIds.map(id => state.byId[id])
}
