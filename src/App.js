import React, { useEffect, useState } from 'react'
import Names from './pages/names'
import Age from './pages/age'
import Contact from './pages/contact'
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'
import { NavBar } from './NavBar'
import Post from './post'
const App =()=> {
  const [page,setpage]= useState('')
  const[post,setpost]=useState('')
  useEffect(()=>{
    async function fetchingData(){
      const result = await fetch('https://dummyjson.com/docs/posts')
      const actualData=await result.json();
      setpost(actualData.post);
    }
    fetchingData();
  },[]);

  return (
    <div>
      
      <BrowserRouter>
           <NavBar/>
      <Routes>
        <Route path='/names' element={<Names/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/age' element={<Age/>}/>
        <Route path='/post' element={<Post post={post}/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
