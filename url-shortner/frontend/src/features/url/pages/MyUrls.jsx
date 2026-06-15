import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';

const MyUrls = () => {
    const [token] = useState(localStorage.getItem("token"));
    const [urls , setUrls] = useState([]);
    async function getAllurls(){
        console.log("Calling");
        const response = await axios.get('http://localhost:1234/api/url/my/urls', {headers : {
            'Authorization' : `Bearer ${token}`
        }});
        
        setUrls(response.data.urls );
        
    }
    useEffect(()=>{
        getAllurls();
    },[]);
  return (
    <div style={{display :'flex' , height : "100vh" , flexDirection : "column" , justifyContent : "center" , alignItems : "center" , gap : "20px"}}>
        
      {urls.map((url , index)=><div key={index}><a href={`http://localhost:1234/api/url/${url.shortCode}`}>{`http://localhost:1234/api/url/${url.shortCode}`}</a><br/></div>)}
    </div>
  )
}

export default MyUrls
