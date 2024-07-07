import React from 'react'

export default function Keypad({usedKeys}) {
  const obj = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

  return (
    <div className="keypad">
        {obj.map((l,i)=>{
            const color=usedKeys[l]
            return <div key={i} className={color}>{l}</div>
        })}
    </div>
  )
}
