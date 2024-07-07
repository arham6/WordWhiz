import {useState, useEffect, useContext} from 'react'
import Wordle from "./Wordle"
import { WordContext } from '../context/WordContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const Game = () => {
    const { word, setWord } = useContext(WordContext);
    const navigate=useNavigate()
    const [error, setError] = useState(null);
    const {user,loading}=useAuthContext()
    console.log("after useauthcontext",user)
    useEffect(() => {
      if(!loading && !user){
        //navigate to login
        console.log("user value inside useeffect",user)
        navigate('/login')
        return
      }

      const fetchRandomWord = async () => {
        try {
          setError(null);
          const url='http://localhost:5000'
          // console.log(url)
          const response = await fetch(`${url}/word/random`,{
            headers:{
              'Authorization': `Bearer ${user.token}`
            }
          });
          //console.log(response);
          if (!response.ok) {
            throw new Error('Failed to fetch random word');
          }
          const data = await response.json();
          console.log(data)
          //console.log(data);
          setWord(data);
          //console.log(data);
        } catch (error) {
          console.error(error);
          setError(error.message);
        }
      };
  
      if(user){
        fetchRandomWord();
      }
  
    }, [loading,navigate,setWord,user])


    if(loading || !user){
      console.log("loading component")
      return <Loading msg='Fetching Data'/>
    }
    // if (!user) {
    //   console.log("no user component")
    //   return null
    // }
    
    console.log("user exists and no loading component")
    return (
        <div className="App">
          <h1>Wordle Game</h1>
  
          {error && <p>{error}</p>}
          {word && <Wordle/>}
        </div>    
    );
}

export default Game