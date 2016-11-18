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

export const addExerciseBlock = (exerciseBlock, trainingId) =>
  fetch(baseUrlApi + '/exerciseblocks',
    {
      method: 'POST',
      body: JSON.stringify({
        _training: trainingId,
        _exercise: exerciseBlock.exerciseId,
        index: exerciseBlock.index,
        date_begin: exerciseBlock.date_begin,
        date_end: exerciseBlock.date_end
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

export const removeExerciseBlock = (exerciseBlockId) =>
  fetch(baseUrlApi + '/exerciseblocks/' + exerciseBlockId,
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

export const addSerie = (serie, exerciseBlockId) =>
  fetch(baseUrlApi + '/series',
    {
      method: 'POST',
      body: JSON.stringify({
        _exerciseBlock: exerciseBlockId,
        load: serie.load,
        repetitions: serie.repetitions,
        index: serie.index
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

export const removeSerie = (serieId) =>
  fetch(baseUrlApi + '/series/' + serieId,
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
