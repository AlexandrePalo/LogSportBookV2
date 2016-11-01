import { ADD_TRAINING } from '../actions/actionTypes'

const initialTrainings = [
  {
    id: 1,
    description: 'pectoraux',
    exerciseBlocks : [
      {
        id: 1,
        ns: 4,
        d: 20,
        name: "Développé couché"
      },
      {
        id: 2,
        ns: 5,
        d: 25,
        name: "Dips"
      }
    ]
  }
]
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
            exercise: action.exercise
          }
        ]
      })
    default:
      return state
  }
}

export const trainings = (state = initialTrainings, action) => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return [
        ...state,
        training(undefined, action)
      ]
    case 'ADD_EXERCISEBLOCK':
      return state.map(t => training(t, action))
    default:
      return state
  }
}

export const visibilityFilter = (state = 1, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
