const visibilityFilterExerciseBlock = (state = 0, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_EXERCISEBLOCK':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilterExerciseBlock
