import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [isAuth , setIsAuth] = useState(localStorage.getItem("token"));
    console.log(isAuth);
    if(!isAuth){
        return <Navigate to="/login"/>
    }
  return (
    <>
    {children}
    </>
  )
}

export default ProtectedRoute
