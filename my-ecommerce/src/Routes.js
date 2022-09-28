import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SingIn from './pages/SingIn'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singIn" element={<SingIn />} />
    </Routes>
  )
}

export default Rotas
