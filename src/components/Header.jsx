import React, { useState } from 'react'
import { DarkIcon, LightIcon } from '../assets/images/icon';

function Header() {
  const [mode,setMode] = useState(false)

    function handleMode() {
      
        document.documentElement.classList.toggle("dark", setMode(!mode));
        document.documentElement.lastElementChild.classList.toggle("light")
    }
  
  return (
    <header className='mx-auto max-w-[600px] w-full flex items-center justify-between  mb-6'>
        <h1 className='text-[38px] leading-[43px] tracking-[8px] text-white '>TODO</h1>
        <button onClick={handleMode} className='text-lg hover:opacity-70 text-white' >{mode ? <LightIcon/> : <DarkIcon/>}</button>
    </header>
  )
}

export default Header
