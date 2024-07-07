import React from 'react'
import { dotPulse } from 'ldrs'
dotPulse.register()

const Loading = ({msg}) => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh'}} >
        <l-dot-pulse
        size="43"
        speed="1.3" 
        color="#5ac85a" 
        ></l-dot-pulse>
        {<h1>{msg}</h1>}
        <l-dot-pulse
        size="43"
        speed="1.3" 
        color="#e2cc68" 
        ></l-dot-pulse>
    </div>
  )
}

export default Loading


/*
import { dotPulse } from 'ldrs'

dotPulse.register()

// Default values shown
<l-dot-pulse
  size="43"
  speed="1.3" 
  color="black" 
></l-dot-pulse>
*/