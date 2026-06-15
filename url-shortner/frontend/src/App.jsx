import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Routes , Route, Link } from "react-router-dom";
import './App.css'
import Register from './features/auth/pages/Register';
import Login from './features/auth/pages/Login';
import Url from './features/url/pages/Url';
import ProtectedRoute from './shared/ProtectedRoute';
import MyUrls from './features/url/pages/MyUrls';
import { ToastContainer, toast } from 'react-toastify';
import HomePage from './shared/pages/HomePage';

function App() {
  
  return (
    <>
    
    <Routes>
      <Route path='/'  element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shorten' element={<ProtectedRoute>
          <Url/>
        </ProtectedRoute>}/>
        <Route path='/myurls' element={<ProtectedRoute>
          <MyUrls/>
        </ProtectedRoute>}/>
      </Routes>
      <ToastContainer />
    
      
    </>
  )
}

export default App
