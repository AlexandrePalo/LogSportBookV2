const exercise = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const exercises = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default exercises

export const getAllExercises = (state) => {
  return state.allIds.map(id => state.byId[id])
}
