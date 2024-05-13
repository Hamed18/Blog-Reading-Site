import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {    // from Blog.jsx, handleAddToBookmark(blog) this parameter has passed
     const newBookmarks = [...bookmarks, blog];
     setBookmarks(newBookmarks);  // this handle function returns newBookmarks that's update of the Bookmarks div section
  }

  const handleMarkAsRead = (time,id) => {
    // console.log("reading time ", time)
       setReadingTime(readingTime+time);   // const newReadingTime = [...readingTime, time]; not bcs it's not array

    // remove the read blog from bookmark
    //  console.log("remove bookmark", id);  // ok
       const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
       setBookmarks(remainingBookMarks);
  }

  return (
    <>
    <Header></Header>

    <main className="md:flex mx-4 p-4">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs> 
        <Bookmarks bookmarks = {bookmarks} readingTime={readingTime}></Bookmarks>  
    </main> 
    </>
  )
}

export default App
