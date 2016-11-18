import React, { Component } from 'react'
import AddUser from './AddUser'
import ConnectionForm from '../containers/ConnectionForm'

const LogOrCreate = () => {
  return (
    <div>
    <div className='col-md-4 col-md-offset-1' style={{marginTop: '30vh'}}>
      <ConnectionForm />
    </div>
    <div className='col-md-4 col-md-offset-2' style={{marginTop: '30vh'}}>
      <AddUser />
    </div>
    </div>
  )
}

export default LogOrCreate
