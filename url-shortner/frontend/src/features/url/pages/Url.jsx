import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";


export default function Url() {
  const { register, handleSubmit } = useForm();
  const [shortUrl , setShortUrl] = useState("ajhuass");
  const token = localStorage.getItem("token");
  const onSubmit = async (data) =>{
    
    console.log(data);
    const response = await axios.post("http://localhost:1234/api/url/shorten" , data , {headers : {
        'Authorization' : `Bearer ${token}`
    }});
    toast("Short Url Generated Succefully");
    setShortUrl(response.data.shortUrl);
};

  


  return (
    <div style={{height : "100vh" , display:"flex" , flexDirection : "column", alignItems:"center" , justifyContent:"center",gap: "100px"}}>
        <form style={{display:"flex", flexDirection : "column" , maxWidth : "700px" , gap: "20px" }} onSubmit={handleSubmit(onSubmit)}>
        {/* <label>Email : </label> */}
      <input type="text" {...register("longUrl")} placeholder="Enter Url"/>
    
      <input type="submit" />
    </form>
        {shortUrl && <a href={`${shortUrl}`}>{shortUrl}</a>}
    </div>
  )
}