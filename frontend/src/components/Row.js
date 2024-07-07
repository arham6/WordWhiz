import React, {useContext} from 'react'
import { WordContext } from '../context/WordContext';
export default function Row({guess,currentGuess}) {
  const { word } = useContext(WordContext);
  const {name:solution}=word

  if(guess){
    return(
        <div className='past row'>
            {guess.map((l,i)=>{
                return <div key={i} className={l.color}>{l.key}</div>
            })}
        </div>
    ) 
  }
  if(currentGuess){
    let letters=currentGuess.split('')
    

    return(
        <div className="row current">
            {letters.map((letter,i)=>{
                return <div key={i} className='filled'>{letter}</div>
            })}
            {[...Array(solution.length-letters.length)].map((l,i)=>{
                return <div key={i}></div>
            })}
        </div>
    )
  }
    const divs = Array.from({ length: solution.length }, (_, index) => (
      <div key={index}></div>
    ));
  
    // Return the array of divs
    return( 
      <div className='row'>
          {divs}
      </div>
    )
}
