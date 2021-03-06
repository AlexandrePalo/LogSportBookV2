import { combineReducers } from 'redux'
import trainings, * as fromTrainings from './trainings'
import exercises, * as fromExercises from './exercises'
import * as fromExerciseBlocks from './exerciseBlocks'
import * as fromSeries from './series'
import user from './user'

const rootReducer = combineReducers({
  trainings,
  exercises,
  user
})

export default rootReducer

export const getAllTrainings = (state) => {
  return fromTrainings.getAllTrainings(state.trainings)
}

// Todo: useless
export const getVisibleTraining = (state, filter) => {
  return fromTrainings.getVisibleTraining(state.trainings, filter)
}

export const getAllExercises = (state) => {
  return fromExercises.getAllExercises(state.exercises)
}

export const getAllExerciseBlocksOneTraining = (state, id) => {
  return fromExerciseBlocks.getAllExerciseBlocks(state.trainings.byId[id].exerciseBlocks)
}

export const getAllSeriesOneExerciseBlock = (state, trainingId, exerciseBlockId) => {
  return fromSeries.getAllSeries(state.trainings.byId[trainingId].exerciseBlocks.byId[exerciseBlockId].series)
}
