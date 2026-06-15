import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={{display:'flex' , flexDirection : "column",justifyContent:"center" , alignItems : 'center' , height : "100vh" , gap:"20px"}}>
    <h3>This is my Custom URL Shortner </h3>
    <Link to={'/login'} style={{width : "100px" , height : '50px' , backgroundColor : "aqua" ,  borderRadius : "12px" , textDecoration : "none" , color : "white" , fontWeight : "bold"}}>Login </Link>
    <Link to={'/register'} style={{width : "100px" , height : '50px' , backgroundColor:"red" , borderRadius : "12px" , textDecoration : "none" , color : "white" , fontWeight : "bold"}}>Register </Link>
    </div>
  )
}

export default HomePage
