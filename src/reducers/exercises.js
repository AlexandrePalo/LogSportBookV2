import { combineReducers } from 'redux'

const exercise = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}


const byId = (state = {}, action) => {
  switch (action.type) {
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

const exercises = combineReducers({
  byId,
  allIds
})

export default exercises

export const getAllExercises = (state) => {
  return state.allIds.map(id => state.byId[id])
}
