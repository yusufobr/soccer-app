import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCounter } from './redux/counter/counterSlice'
import { increment, decrement } from './redux/counter/counterSlice'

function Counter() {
  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>counter</h1>
      <p>{counter}</p>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </>
  )
}

export default Counter