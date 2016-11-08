// Useless : react-router param in url (rest style) from selecting the training

const visibilityFilterExerciseBlock = (state = 0, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_EXERCISEBLOCK':
      return action.filter
    case 'REMOVE_EXERCISEBLOCK':
      if (state === action.exerciseBlockId) {
        return 0
      }
      return state
    case 'FINISH_EXERCISEBLOCK':
      return 0
    default:
      return state
  }
}

export default visibilityFilterExerciseBlock
