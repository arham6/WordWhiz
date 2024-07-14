import React,{useContext} from 'react'
import { WordContext } from '../context/WordContext';
export default function Modal({isCorrect,turn}) {
  const { word } = useContext(WordContext);
  const {name:solution,meaning}=word

  const reloadPage=()=>{
    window.location.reload()
  }  
  return (
    <div className="modal">
        {
            (isCorrect)?
            <div style={{backgroundColor:'#F5E9DC'}}>
                <h1>YOU WIN</h1>
                <p style={{fontSize:'20px'}} className="solution">{solution}</p>
                <p><strong>meaning:</strong> {meaning}</p>
                <p>you found the word in {(turn===1)?'1 guess':`${turn} guesses`}</p>
                <button className='newgame' onClick={reloadPage}>New Game</button>
            </div>
            :
            <div style={{backgroundColor:'#F5E9DC'}}>
                <h1>YOU LOST</h1>
                <p style={{fontSize:'20px'}} className="solution">{solution}</p>
                <p><strong>meaning:</strong> {meaning}</p>
                <p>better luck next time !</p> 
                <button className='newgame' onClick={reloadPage}>New Game</button>
            </div>
        }
    </div>
  )
}
