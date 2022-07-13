import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value)

  const handleRemove = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={ handleRemove }>-1</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleAdd }>+1</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp