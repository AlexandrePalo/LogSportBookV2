import React, { Component } from 'react'
import { Link } from 'react-router'

const Begin = () => {
  const style = {
    container: {
      marginTop: '30vh'
    }
  }
  return (
    <div className='row' style={style.container}>
      <div className='col-md-6 col-md-offset-3'>
        <div className='row'>
          <h1 style={{ color: 'white', fontSize: '60pt', textAlign: 'center' }}>LogSportBook</h1>
          <p style={{ color: 'white', fontSize: '30pt', textAlign: 'center' }}>Fixez des objectifs. Suivez vos performances. Restez motivé.</p>
        </div>
        <Link to='begin/login'>
          <button className='btn btn-success btn-lg btn-block' type='button'>
            Commencer
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Begin
