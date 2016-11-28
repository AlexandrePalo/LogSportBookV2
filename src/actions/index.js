import * as api from '../api/index'
import { v4 } from 'node-uuid'

export const fetchExercises = () =>
  api.fetchExercises().then(response =>
    receiveExercises(response))

const receiveExercises = (response) => ({
  type: 'RECEIVE_EXERCISES',
  response
})

export const fetchTrainings = (userId, limit=undefined, order='date_end', search=undefined, from=undefined, to=undefined) => (dispatch) => {
  dispatch(requestTrainings())
  return api.fetchTrainings(userId, limit, order, search, from, to).then(response => {
    dispatch(receiveTrainings(response))
  })
}

export const fetchTrainingsFirst = (userId) => (dispatch) => {
  dispatch(requestTrainings(true))
  return api.fetchTrainings(userId).then(response => {
    dispatch(receiveTrainings(response, true))
  })
}

const receiveTrainings = (response, first=false) => ({
  type: 'RECEIVE_TRAININGS',
  response,
  first
})

const requestTrainings = (first = false) => ({
  type: 'REQUEST_TRAININGS',
  first
})

export const fetchSeries = (trainingId, exerciseBlockId) => (dispatch) => {
  dispatch(requestSeries(trainingId, exerciseBlockId))
  return api.fetchSeries(exerciseBlockId).then(response => {
    dispatch(receiveSeries(trainingId, exerciseBlockId, response))
  })
}

const receiveSeries = (trainingId, exerciseBlockId, response) => ({
  type: 'RECEIVE_SERIES',
  response,
  trainingId,
  exerciseBlockId
})

const requestSeries = (trainingId, exerciseBlockId) => ({
  type: 'REQUEST_SERIES',
  trainingId,
  exerciseBlockId
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
      tokenId: localStorage.getItem('id_token')
    }))
  })
}

export const addTraining = (training, userId) => (dispatch) =>
  api.addTraining(training, userId).then(response => {
    dispatch({
      type: 'ADD_TRAINING_SUCCESS',
      response
    })
  })

export const removeTraining = (trainingId) => (dispatch) =>
  api.removeTraining(trainingId).then(response => {
    dispatch({
      type: 'REMOVE_TRAINING_SUCCESS',
      response
    })
  })

export const addExerciseBlock = (exerciseBlock, trainingId) => (dispatch) =>
  api.addExerciseBlock(exerciseBlock, trainingId).then(response => {
    dispatch({
      type: 'ADD_EXERCISEBLOCK_SUCCESS',
      response,
      trainingId
    })
  })

export const removeExerciseBlock = (exerciseBlockId, trainingId) => (dispatch) =>
  api.removeExerciseBlock(exerciseBlockId).then(response => {
    dispatch({
      type: 'REMOVE_EXERCISEBLOCK_SUCCESS',
      response,
      trainingId
    })
  })

export const addSerie = (serie, trainingId, exerciseBlockId) => (dispatch) =>
  api.addSerie(serie, exerciseBlockId).then(response => {
    dispatch({
      type: 'ADD_SERIE_SUCCESS',
      response,
      trainingId,
      exerciseBlockId
    })
  })

export const removeSerie = (serieId, trainingId, exerciseBlockId) => (dispatch) =>
  api.removeSerie(serieId).then(response => {
    dispatch({
      type: 'REMOVE_SERIE_SUCCESS',
      response,
      trainingId,
      exerciseBlockId
    })
  })
