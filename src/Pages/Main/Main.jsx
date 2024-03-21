import React from 'react'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default Main
