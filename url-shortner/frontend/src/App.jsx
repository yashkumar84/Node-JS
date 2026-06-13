import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Routes , Route } from "react-router-dom";
import './App.css'
import Register from './features/auth/pages/Register';
import Login from './features/auth/pages/Login';
import Url from './features/url/pages/Url';
import ProtectedRoute from './shared/ProtectedRoute';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shorten' element={<ProtectedRoute>
          <Url/>
        </ProtectedRoute>}/>
      </Routes>
    </>
  )
}

export default App
