import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
     const newBookmarks = [...bookmarks, blog];
     setBookmarks(newBookmarks);  // this handle function returns newBookmarks that's update of the Bookmarks div section
  }

  return (
    <>
    <Header></Header>

    <main className="md:flex mx-4 p-4">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs> 
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>  
    </main> 
    </>
  )
}

export default App
