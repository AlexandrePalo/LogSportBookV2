const visibilityFilterExerciseBlock = (state = 0, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_EXERCISEBLOCK':
      return action.filter
    case 'FINISH_EXERCISEBLOCK':
      return 0
    default:
      return state
  }
}

export default visibilityFilterExerciseBlock
