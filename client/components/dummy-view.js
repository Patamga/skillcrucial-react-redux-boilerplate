import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { history } from '../redux'
import { updateField } from '../redux/reducers/game'
import Head from './head'
import Field from './field'

const Dummy = () => {
  const dispatch = useDispatch()
  const [rowSize, setRowSize] = useState('')
  const [columnSize, setColumnSize] = useState('')
  // const [playItems, setPlayItems] = useState([])

  const re = /^[0-9]*$/
  const onChangeRow = (e) => {
    if (re.test(e.target.value)) {
      const newValue = e.target.value
      setRowSize(newValue)
    }
  }
  const onChangeColumn = (e) => {
    if (re.test(e.target.value)) {
      const newValue = e.target.value
      setColumnSize(newValue)
    }
  }
  const length = rowSize * columnSize

  const clicked = () => {
    dispatch(updateField(rowSize, columnSize, length))
    history.push('/game')
  }

  // const fieldSize = (size) => {
  //   const arr = new Array(size).fill(1).map((it, index) => {
  //     return index + 1
  //   })
  //   setPlayItems(arr)
  // }

  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex">
            <input
              type="text"
              value={rowSize}
              onChange={onChangeRow}
              className="w-20 text-center appearance-none block bg-gray-200 text-gray-700 border border-blue-500 rounded py-2 px-3   focus:outline-none focus:bg-white mx-3"
              placeholder="rows"
            />
            <input
              type="text"
              value={columnSize}
              onChange={onChangeColumn}
              className="w-20 text-center appearance-none block bg-gray-200 text-gray-700 border border-blue-500 rounded py-2 px-3   focus:outline-none focus:bg-white mx-3"
              placeholder="columns"
            />
            <button
              type="button"
              disabled={!(columnSize > 0 && rowSize > 0)}
              onClick={() => clicked()}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4  border border-blue-500 hover:border-transparent rounded"
            >
              START
            </button>
          </div>
          <Route exact path="/game" component={() => <Field />} />
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
