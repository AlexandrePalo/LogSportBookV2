import { combineReducers } from 'redux'
import trainings, * as fromTrainings from './trainings'
import visibilityFilterTraining from './visibilityFilterTraining'
import exercises, * as fromExercises from './exercises'

const rootReducer = combineReducers({
  trainings,
  visibilityFilterTraining,
  exercises,
})

export default rootReducer

export const getVisibleTraining = (state, filter) => {
  return fromTrainings.getVisibleTraining(state.trainings, filter)
}

export const getAllExercises = (state) => {
  return fromExercises.getAllExercises(state.exercises)
}
