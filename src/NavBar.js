import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const nav=useNavigate()
  return (
    <div>
      <button  onClick={()=>nav('/names')}>names</button>
      <button onClick={()=>nav('/contact')}>contact</button>
      <button onClick={()=>nav('/age')}>age</button>
      <button onClick={()=>nav('/post')}>post</button>
      
    </div>
  )
}
