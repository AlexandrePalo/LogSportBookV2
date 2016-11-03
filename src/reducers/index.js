import { combineReducers } from 'redux'
import trainings, * as fromTrainings from './trainings'
import visibilityFilterTraining from './visibilityFilterTraining'
import exercises, * as fromExercises from './exercises'
import * as fromExerciseBlocks from './exerciseBlocks'

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

export const getAllExerciseBlocksOneTraining = (state, id) => {
  return fromExerciseBlocks.getAllExerciseBlocks(state.trainings.byId[id].exerciseBlocks)
}
