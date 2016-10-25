import { ADD_TRAINING } from '../actions/actionTypes'

const training = (state, action) => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return {
        id: action.id,
        description: action.description,
        place: action.place,
        active: true,
        date_begin: action.date_begin,
        date_end: action.date_end
      }
    case 'UNACTIVE_TRAINING':
      if (training.id !== action.id) {
        return training
      }
      return Object.assign({}, training, { active: !training.active })
    default:
      return state
  }
}

export const trainings = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TRAINING':
      return [
        ...state,
        training(undefined, action)
      ]
    case 'UNACTIVE_TRAINING':
      return state.map(training => training(training, action))
    default:
      return state
  }
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
