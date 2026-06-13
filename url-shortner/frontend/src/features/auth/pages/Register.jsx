import { useForm } from "react-hook-form"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post("http://localhost:1234/api/auth/register" , data);
    console.log(response);
    if(response.status == 201){
        console.log("Inside");
        return navigate("/login");
    }
}


  return (
    <div style={{height : "100vh" , display:"flex" , alignItems:"center" , justifyContent:"center",margin: "10px"}}>
        <form style={{display:"flex", flexDirection : "column" , maxWidth : "700px" , gap: "20px" }} onSubmit={handleSubmit(onSubmit)}>
      {/* <label>Name : </label> */}
      <input {...register("name", { required: true, maxLength: 40 })} placeholder="Enter Name..."/>
      {/* <label>Password : </label> */}
      <input type="password" {...register("password" , {min : 6 , max : 20})} placeholder="Enter Password"/>
      {/* <label>Email : </label> */}
      <input type="email" {...register("email" )} placeholder="Enter Email"/>
      <input type="submit" />
    </form>
    </div>
  )
}