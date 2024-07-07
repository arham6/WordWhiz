import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys,setUsedKeys]=useState({}) //{a:'green, b:'yellow', c:'grey'}
  // format a guess into an array of letter objects 
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray=[...solution]
    let formattedGuess=[...currentGuess].map((l)=>{
        return {key:l, color:'grey'}
    })
    for(let i=0;i<formattedGuess.length;i++){
        if(solutionArray[i]===formattedGuess[i].key){
            formattedGuess[i].color='green'
            solutionArray[i]=null
        }
    }
    for(let i=0;i<formattedGuess.length;i++){
        if(solutionArray.includes(formattedGuess[i].key) && formattedGuess[i].color!=='green'){
            formattedGuess[i].color='yellow'
            solutionArray[solutionArray.indexOf(formattedGuess[i].key)]=null
        }
    }
    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess) => {
    if(currentGuess===solution){
        setIsCorrect(true);
    }
    console.log(turn)
    setGuesses((prevGuesses)=>{
        let newGuesses=[...prevGuesses]
        newGuesses[turn]=formattedGuess
        return newGuesses
    })
    setHistory((prevHistory)=>{
        return [...prevHistory,currentGuess]
    })
    setTurn((prevTurn)=>{
        return prevTurn+1
    })
    setUsedKeys((prev)=>{
        let newKeys={...prev}
        formattedGuess.forEach((l)=>{
            const currentColor=newKeys[l.key]

            if(l.color==='green'){
                newKeys[l.key]='green'
                return
            }
            if(l.color==='yellow' && currentColor!=='green'){
                newKeys[l.key]='yellow'
                return
            }
            if(l.color==='grey' && currentColor!=='green' && currentColor!=='yellow'){
                newKeys[l.key]='grey'
                return
            }
        })
        return newKeys
    })
    setCurrentGuess('')
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    console.log('key pressed - ', key)

    if(key==='Enter'){
        //add guess if turn <5
        if(turn>5){
            console.log('you used all guesses')
            return
        }
        //dont allow duplicate words
        if(history.includes(currentGuess)){
            console.log('word tried before')
            return
        }
        //only correct guess if currentGuess.length==5
        if(currentGuess.length!==solution.length){
            console.log(`word must be ${solution.length} chars long`)
            return
        }
        const formatted=formatGuess()
        console.log(formatted)
        addNewGuess(formatted) 
            
    }
    if(key==='Backspace'){
        setCurrentGuess((prev)=>{
            return prev.slice(0,-1);
        })
        return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < solution.length) {
        setCurrentGuess(prev => prev + key) 
      }
    } 
  }

  return {turn, currentGuess, guesses, isCorrect,usedKeys, handleKeyup}
}

export default useWordle