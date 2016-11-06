import { combineReducers } from 'redux'

const initial = {
  1: {
    id: 1,
    name: 'Développé couché'
  },
  2: {
    id: 2,
    name: 'Dips'
  },
  3: {
    id: 3,
    name: 'Poulies hautes'
  }
}

const exercise = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}


const byId = (state = initial, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const allIds = (state = [1, 2, 3], action) => {
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
