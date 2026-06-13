import { useForm } from "react-hook-form"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  
  const onSubmit =async (data) => {
    console.log(data);

    const response = await axios.post("http://localhost:1234/api/auth/login" , data);
    if(response.status == 201){
        localStorage.setItem("token" , response.data.token);
        navigate("/shorten");
    }
}



  return (
    <div style={{height : "100vh" , display:"flex" , alignItems:"center" , justifyContent:"center",margin: "10px"}}>
        <form style={{display:"flex", flexDirection : "column" , maxWidth : "700px" , gap: "20px" }} onSubmit={handleSubmit(onSubmit)}>
        {/* <label>Email : </label> */}
      <input type="email" {...register("email" , {min : 6 , max : 20})} placeholder="Enter Email"/>
      {/* <label>Password : </label> */}
      <input type="password" {...register("password" , {min : 6 , max : 20})} placeholder="Enter Password"/>
    
      <input type="submit" />
    </form>
    </div>
  )
}