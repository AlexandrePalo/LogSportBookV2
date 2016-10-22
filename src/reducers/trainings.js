import { ADD_TRAINING, FETCH } from '../actions/actionTypes'

function trainings (state = [], action) {
  switch (action.type) {
    case ADD_TRAINING:

      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case FETCH:

    default:
      return state
  }
}
