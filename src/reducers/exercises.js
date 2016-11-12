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

const exercises = combineReducers({
  byId,
  allIds
})

export default exercises

export const getAllExercises = (state) => {
  return state.allIds.map(id => state.byId[id])
}
