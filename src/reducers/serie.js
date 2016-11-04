const serie = (state, action) => {
  switch (action.type) {
    case 'ADD_SERIE':
      console.log(state)
      return {
        id: action.id,
        repetitions: action.repetitions,
        load: action.load
      }
    default:
      return state
  }
}

export default serie
