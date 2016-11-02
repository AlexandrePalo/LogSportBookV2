let nextTrainingId = 2
let nextExerciseBlockId = 3

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
            ns: 4,
            d: 20,
            exercise: action.exercise
          }
        ]
      })
    default:
      return state
  }
}

export default training
