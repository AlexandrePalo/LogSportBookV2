const exerciseBlock = (state, action) => {
  switch (action.type) {
    case 'ADD_EXERCISEBLOCK':
      return {
        id: action.id,
        d: 20,
        exercise: action.exercise,
        series: []
      }
    default:
      return state
  }
}

export default exerciseBlock
