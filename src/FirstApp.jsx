import PropTypes from 'prop-types'
import React from 'react'

export const FirstApp = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

FirstApp.propTypes = {
   name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  name: 'No hay nombre'
}