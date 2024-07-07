import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch}=useAuthContext()
    const navigate=useNavigate()
    const login=async(email,password)=>{
        setIsLoading(true)
        setError(null)
        try{
            const res=await fetch('http://localhost:5000/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email,password})
            })
            
            const json=await res.json()
                
            if(!res.ok){
                // console.log('egrgef')
                setIsLoading(false)
                setError(json.error)
            }
            else{
                setIsLoading(false)
                setError(null)
                //save user to local storage
                localStorage.setItem('user',JSON.stringify(json))
                
                //update auth context
                // console.log('im herreeeee')
                dispatch({type:'LOGIN',payload:json})
                navigate('/')
                // console.log(json)
            }
        }
        catch(err){         
            setIsLoading(false)
            setError(err.message)
        }
    }
    return {login,error,isLoading}
    // export const 
}



