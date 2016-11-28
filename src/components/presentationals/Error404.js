import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../presentationals/Header'

const Error404 = () => {
  const style = {
    text: {
      textAlign: 'center'
    }
  }
  return (
    <div className='col-md-6 col-md-offset-3'>
      <h1 style={style.text}>Page non trouvée !</h1>
      <h1 style={style.text}><Link to='/'>Retour à l'accueil.</Link></h1>
    </div>
  )
}

export default Error404
