import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch}=useAuthContext()
    const signup=async(username,email,password,cpass)=>{
        setIsLoading(true)
        setError(null)
        try{
            const res=await fetch('http://localhost:5000/auth/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({username,email,password,cpass})
            })
            
            const json=await res.json()

            if(!res.ok){
                setIsLoading(false)
                setError(json.error)
            }
            else{
                setIsLoading(false)
                setError(null)
                //save user to local storage
                localStorage.setItem('user',JSON.stringify(json))
                
                //update auth context
                dispatch({type:'LOGIN',payload:json})
                
                // console.log(json)
            }            
        }
        catch(err){         
            setIsLoading(false)
            setError(err.message)
        }
    }
    return {signup,error,isLoading}
    // export const 
}



