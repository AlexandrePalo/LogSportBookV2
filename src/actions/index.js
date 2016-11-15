import * as api from '../api/index'
import { v4 } from 'node-uuid'

export const fetchExercises = () =>
  api.fetchExercises().then(response =>
    receiveExercises(response))

const receiveExercises = (response) => ({
  type: 'RECEIVE_EXERCISES',
  response
})

/**
 * Action creator add exercise block
 * @param {string} idTraining - The id of the training in which the exercise block will belongs to
 * @param {object} exercise - Exercise corresponding to the exercise block
 * @param {string} idExerciseBlock - The id of the exercise block which will be created, if not sent a new one will be generated with v4()
 */
export const addExerciseBlock = (idTraining, exercise, idExerciseBlock=v4()) => ({
  type: 'ADD_EXERCISEBLOCK',
  id: idTraining,
  exerciseBlockId: idExerciseBlock,
  exercise: exercise
})

/**
 * Action creator add training
 * @param {string} idTraining - The id of the training which will be created, if not sent a new one will be generated with v4()
 * @param {string} description - Description of the training
 * @param {string} place - Place of the training
 * @param {moment} date_begin - Date of the begining of the training
 * @param {moment} date_end - Date of the end of the training
 */
export const addTraining = (description, place, date_begin, date_end, idTraining=v4()) => ({
  type: 'ADD_TRAINING',
  id: idTraining,
  description,
  place,
  date_begin,
  date_end
})

/**
 * Action creator add serie
 * @param {string} idTraining - The id of the training in which the serie belongs to
 * @param {string} idExerciseBlock - The id of the exercise block in which the serie belongs to
 * @param {number} repetitions - Number of repetitions in the serie
 * @param {number} load - Load of the serie
 * @param {string} idSerie - The id of the serie which will be created, if none one will be generated with v4()
 */
export const addSerie = (idTraining, idExerciseBlock, repetitions, load, idSerie=v4()) => ({
  type: 'ADD_SERIE',
  id: idTraining,
  exerciseBlockId: idExerciseBlock,
  repetitions,
  load,
  idSerie,
})

/**
 * Action creator remove training
 * @param {string} idTraining - The id of the training which will be deleted
 */
export const removeTraining = (idTraining) => ({
  type: 'REMOVE_TRAINING',
  id: idTraining
})

/**
 * Action creator remove exercise block
 * @param {string} idTraining - The id of the training in which the exercise block will be deleted
 * @param {string} idExerciseBlock - The id of the exercise block which will be deleted
 */
export const removeExerciseBlock = (idTraining, idExerciseBlock) => ({
  type: 'REMOVE_EXERCISEBLOCK',
  id: idTraining,
  exerciseBlockId: idExerciseBlock
})

/**
 * Action creator remove serie
 * @param {string} idTraining - The id of the training in which the serie will be deleted
 * @param {string} idExerciseBlock - The id of the exercise block in which the serie will be deleted
 * @param {string} idSerie - The id of the serie which will be deleted
 */
export const removeSerie = (idTraining, idExerciseBlock, idSerie) => ({
  type: 'REMOVE_SERIE',
  id: idTraining,
  exerciseBlockId: idExerciseBlock,
  serieId: idSerie
})

export const createSession = (sessionToken) => ({
  type: 'CREATE_SESSION',
  sessionToken
})

export const removeSession = () => ({
  type: 'REMOVE_SESSION'
})

export const fetchUser = (sessionToken) =>
  api.fetchUser(sessionToken).then(response =>
    receiveUser(response))

export const receiveUser = (response) => ({
  type: 'RECEIVE_USER',
  response
})

export const requestUser = () => ({
  type: 'REQUEST_USER'
})

export const fetchTrainings = (userId) =>
  api.fetchTrainings(userId).then(response =>
    receiveTrainings(response))

export const receiveTrainings = (response) => ({
  type: 'RECEIVE_TRAININGS',
  response
})

export const requestTrainings = () => ({
  type: 'REQUEST_TRAININGS'
})

export const fetchExerciseBlocks = (trainingId) =>
  api.fetchExerciseBlocks(trainingId).then(response =>
    receiveTrainings(response, trainingId))

export const receiveExerciseBlocks = (response, trainingId) => ({
  type: 'RECEIVE_EXERCISEBLOCKS',
  response,
  trainingId
})

export const requestExerciseBlocks = (trainingId) => ({
  type: 'REQUEST_EXERCISEBLOCKS',
  trainingId
})
