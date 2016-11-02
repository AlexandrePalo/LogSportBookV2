import { combineReducers } from 'redux'
import trainings, * as fromTrainings from './trainings'
import visibilityFilterTraining from './visibilityFilterTraining'
import { exercises } from './exercises'

const rootReducer = combineReducers({
  trainings,
  visibilityFilterTraining,
  exercises,
})

export default rootReducer

export const getVisibleTraining = (state, filter) => {
  return fromTrainings.getVisibleTraining(state.trainings, filter)
}
