import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Loading from "./Loading";
const Login = () => {  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {login,error,isLoading}=useLogin()
  const navigate=useNavigate()
  const {user,loading}=useAuthContext()

  useEffect(() => {
    if(!loading && user){
      navigate('/')
    }
  }, [loading,user,navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log('tryna login')
    await login(email,password)
  }

  if (loading) {
    return <Loading msg='Fetching Data'/>;
  }

  return (
    <>
    <br/>
    
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login to play</h3>

      <label>Email:</label>
      <input placeholder="Email" value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/>

      <label>Password:</label>
      <input placeholder="Password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>

      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
    {isLoading && <Loading msg='Logging in' />}
    <br/>
    
    <br/>
    </>
  );
}

export default Login;
