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

export const fetchTrainings = (userId) => (dispatch) => {
  dispatch(requestTrainings())
  return api.fetchTrainings(userId).then(response => {
    dispatch(receiveTrainings(response))
  })
}

const receiveTrainings = (response) => ({
  type: 'RECEIVE_TRAININGS',
  response
})

const requestTrainings = () => ({
  type: 'REQUEST_TRAININGS'
})

export const fetchExerciseBlocks = (trainingId) =>
  api.fetchExerciseBlocks(trainingId).then(response =>
    receiveExerciseBlocks(response, trainingId))

export const receiveExerciseBlocks = (response, trainingId) => ({
  type: 'RECEIVE_EXERCISEBLOCKS',
  response,
  id: trainingId
})

export const requestExerciseBlocks = (trainingId) => ({
  type: 'REQUEST_EXERCISEBLOCKS',
  id: trainingId
})

const requestLogin = (creds) => ({
  type: 'LOGIN_REQUEST',
  creds
})

const receiveLogin = (user) => ({
  type: 'LOGIN_SUCCESS',
  tokenId: user.tokenId,
  accessToken: user.accessToken,
  profile: user.profile
})

const failLogin = (message) => ({
  type: 'LOGIN_FAILURE',
  message
})

export const loginUser = (creds) => (dispatch) => {
  dispatch(requestLogin(creds))
  api.fetchLogin(creds).then(response => {
    return api.fetchProfile(response.access_token).then(profile => {
      dispatch(receiveLogin({
        profile,
        accessToken: response.access_token,
        tokenId: response.id_token
      }))
    })
  })
}

export const loginUserWithSession = (accessToken) => (dispatch) => {
  dispatch(requestLogin(accessToken))
  api.fetchProfile(accessToken).then(profile => {
    dispatch(receiveLogin({
      profile,
      accessToken,
      tokenId: localStorage.tokenId
    }))
  })
}
