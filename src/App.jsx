import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  return (
    <>
    <Header></Header>

    <main className="md:flex mx-4 p-4">
        <Blogs></Blogs> 
        <Bookmarks></Bookmarks>  
    </main> 
    </>
  )
}

export default App
