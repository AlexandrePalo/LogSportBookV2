let nextTrainingId = 2
let nextExerciseBlockId = 3
let nextSerieId = 4

const training = (state, action) => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return {
        id: action.id,
        description: action.description,
        place: action.place,
        date_begin: action.date_begin,
        date_end: action.date_end
      }
    case 'ADD_EXERCISEBLOCK':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        exerciseBlocks: [
          ...state.exerciseBlocks,
          {
            id: nextExerciseBlockId++,
            d: 20,
            exercise: action.exercise,
            series: []
          }
        ]
      })
    case 'ADD_SERIE':
      if (state.id !== action.id) {
        return state
      }
      let toBeReturned = state
      state.exerciseBlocks.map((e) => {
        if (e.id === action.idExerciseBlock) {
          toBeReturned = Object.assign({}, state, {
            series: [
              ...e.series,
              {
                id: nextSerieId++,
                repetitions: action.repetitions,
                load: action.load
              }
            ]
          })
        }
      })
      console.log(toBeReturned)
      return toBeReturned
    default:
      return state
  }
}

export default training
