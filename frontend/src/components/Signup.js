import { useState, useEffect } from "react";
import { useSignup } from "../hooks/useSignup";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const Signup = () => {  
  const [username,setUsername]=useState('') 
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [cpass,setCpass]=useState('')
  const {signup,error,isLoading}=useSignup()
  const { user, loading } = useAuthContext();
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [loading, user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(username,email,password,cpass)

    await signup(username,email,password,cpass)
  }

  if (loading) {
    return <Loading msg='Fetching Data' />;
  }

  return (
    <>
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Signup to play</h3>

      <label>Username:</label>
      <input placeholder="Username" value={username} type="text" onChange={(e)=>setUsername(e.target.value)}/>

      <label>Email:</label>
      <input placeholder="Email" value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/>

      <label>Password:</label>
      <input placeholder="Password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>

      <label>Confirm Password:</label>
      <input placeholder="Confirm Password" value={cpass} type="password" onChange={(e)=>setCpass(e.target.value)}/>

      <button disabled={isLoading}>Sign up</button>

      {error && <div className="error">{error}</div>}
    </form>
    {isLoading && <Loading msg='Signing up' />}
    </>
  );
}

export default Signup;
