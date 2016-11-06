const visibilityFilterTraining = (state = 1, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_TRAINING':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilterTraining
