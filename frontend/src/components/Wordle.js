import React, { useEffect, useState, useContext } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'
import { WordContext } from '../context/WordContext'
export default function Wordle() {
  const { word } = useContext(WordContext);
  const {name:solution,hint,meaning}=word
  const { currentGuess, handleKeyup, guesses, isCorrect, turn,usedKeys } = useWordle(solution)
  const [showModal,setShowModal]=useState(false);
  const [showHint,setShowHint]=useState(false);
  useEffect(() => {
    console.log(solution, hint, meaning)
    window.addEventListener('keyup', handleKeyup)
    if(isCorrect){
        setTimeout(() => {
            setShowModal(true)
        }, 2000);
        window.removeEventListener('keyup',handleKeyup)
    }
    if(turn>5 && !isCorrect){
        setTimeout(() => {
            setShowModal(true)
        }, 2000);
        window.removeEventListener('keyup',handleKeyup)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup,isCorrect,turn])

  return (
    <div>
      {turn>2?<button onClick={(e)=>setShowHint(true)} className='play-button' style={{margin:'30px'}}>Hint</button>:null}
      {showHint && <div style={{marginBottom:'20px'}} className='hint'>{hint}</div>}
      {/* <div>solution- {solution}</div> */}
      {/* <div>Current Guess - {currentGuess}</div> */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn}/>}
    </div>
  )
}