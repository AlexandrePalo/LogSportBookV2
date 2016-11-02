import { combineReducers } from 'redux'
import trainings, { visibilityFilter, getVisibleTraining } from './trainings'
import { exercises } from './exercises'

const rootReducer = combineReducers({
  trainings,
  visibilityFilter,
  exercises,
})

export default rootReducer

// use * fromTrainings
// w8 for visibilityFilter
export const getVisibleTraining2 = (state, filter) => {
  return getVisibleTraining(state.trainings, filter)
}
