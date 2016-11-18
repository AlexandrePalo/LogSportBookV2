import fetch from 'isomorphic-fetch'
import moment from 'moment'

const baseUrlApi = process.env.BASE_URL_API
const baseUrlApiAuth0 = process.env.BASE_URL_AUTH0
const clientId = process.env.CLIENT_ID

export const fetchLogin = (creds) =>
  fetch(baseUrlApiAuth0 + '/oauth/ro',
    {
      method: 'POST',
      body: JSON.stringify({
        client_id: clientId,
        username: creds.username,
        password: creds.password,
        connection: 'Username-Password-Authentication',
        grand_type: 'password',
        scope: 'openid'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })

export const fetchProfile = (accessToken) =>
  fetch(baseUrlApiAuth0 + '/userinfo',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + accessToken
      }
    }
  ).then(function(response) {
    return response.json()
  })

export const fetchTrainings = (userId) =>
  fetch(baseUrlApi + '/trainings?user=' + userId).then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })

export const addTraining = (training, userId) =>
  fetch(baseUrlApi + '/trainings',
    {
      method: 'POST',
      body: JSON.stringify({
        user: userId,
        description: training.description,
        place: training.place,
        date_begin: training.date_begin,
        date_end: training.date_end,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })

export const removeTraining = (trainingId) =>
  fetch(baseUrlApi + '/trainings/' + trainingId,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })

export const fetchSeries = (exerciseBlockId) =>
  fetch(baseUrlApi + '/series?_exerciseBlock=' + exerciseBlockId).then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })

export const fetchExercises = () =>
  fetch(baseUrlApi + '/exercises').then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })
