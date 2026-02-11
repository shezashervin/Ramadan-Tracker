import React, { useState } from 'react'
function ToggleTheme() {
    const [isTrue,setIsTrue]=useState(true)
  return (
    <div>ToggleTheme
        <div className= {isTrue ? 'h-60 w-60 bg-slate-400' : 'h-60 w-60 bg-black'}>

        </div>
        <button onClick={()=>setIsTrue(!isTrue)} className='bg-blue-600 p-2'>switch</button>
    </div>
  )
}
export default ToggleTheme