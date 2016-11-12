import fetch from 'isomorphic-fetch'
import moment from 'moment'

const baseUrlApi = 'http://localhost:3000/api'

const initial = {
  trainings: {
    byId: {
      '9d890dfd-9a4a-46cf-baf3-0b81a20787cf': {
        id: '9d890dfd-9a4a-46cf-baf3-0b81a20787cf',
        description: 'pectoraux',
        place: 'BasicFit Metz',
        date_begin: moment('2016-11-01 18:00:00'),
        date_end: moment('2016-11-01 20:00:00'),
        exerciseBlocks : {
          byId: {},
          allIds: []
        }
      }
    },
    allIds: ['9d890dfd-9a4a-46cf-baf3-0b81a20787cf']
  },
  user: {
    email: 'alexandre.palo@ensam.eu',
    first_name: 'Alexandre',
    last_name: 'Palo',
    avatar: 'AvatarAP',
    sessionToken: 'azertyuiop'
  },
  exercises: {
    byId: {
      '7c894b1c-5233-48e6-9d13-362f0627b285': {
        id: '7c894b1c-5233-48e6-9d13-362f0627b285',
        name: 'Développé couché'
      },
      '3eab0f61-d324-463f-86fa-ab2aa0699ff8': {
        id: '3eab0f61-d324-463f-86fa-ab2aa0699ff8',
        name: 'Dips'
      },
      '45dcf8a1-9ee8-4380-abae-c5b32b271a03': {
        id: '45dcf8a1-9ee8-4380-abae-c5b32b271a03',
        name: 'Poulies hautes'
      }
    },
    allIds: ['7c894b1c-5233-48e6-9d13-362f0627b285', '3eab0f61-d324-463f-86fa-ab2aa0699ff8', '45dcf8a1-9ee8-4380-abae-c5b32b271a03'],
  }
}

export const fetchExercises = () =>
  fetch(baseUrlApi + '/exercises').then(function(response) {
    return response.json().then(function(json) {
      return json
    })
  })
