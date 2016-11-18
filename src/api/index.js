import fetch from 'isomorphic-fetch'
import moment from 'moment'

const baseUrlApi = 'http://logsportbook.alexandrepalo.com/api'
const baseUrlApiAuth0 = 'https://lsb.eu.auth0.com'
const clientId = 'yoZpCbGsAxzrisPVmskO1h4UPliN6wl6'

export const fetchExercises = () =>
  fetch(baseUrlApi + '/exercises').then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })

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

export const fetchExerciseBlocks = (trainingId) =>
  fetch(baseUrlApi + '/exerciseblocks?training=' + trainingId).then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })
