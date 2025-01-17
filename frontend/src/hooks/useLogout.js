import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {    
    const {dispatch}=useAuthContext()
    const navigate=useNavigate()
    const logout=()=>{

        //remove user from local storage
        localStorage.removeItem('user')
        
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
    return {logout}
}