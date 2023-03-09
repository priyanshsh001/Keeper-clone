import React from "react";
import { useLogin } from "./useLogin" 
 
function Login() {
 
 
  const [curr,setdata]=React.useState({
    email:"",
    password:""
  });
 
  const {login, error, isLoading} = useLogin()

  
  const Postdata = async (event ) => {
   
 event.preventDefault();
 await login(curr.email, curr.password)
       
      


  }
  
function handlechange(event)
{
  const {name,value}=event.target;
  setdata(prev=>{
    return {...prev,[name]:value}
  })
}




  return (

    <div>
      <h1 className="h11">LOGIN  </h1>
      <form className="form" method="post"   >
        
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="title">Email address</label>
          <input type="email" onChange={handlechange} name="email" value={curr.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="title">Password</label>
          <input type="password" onChange={handlechange} name="password" value={curr.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <button type="submit" onClick={Postdata} disabled={isLoading}  className="btn btn-primary ">Submit</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}
export default Login;
 