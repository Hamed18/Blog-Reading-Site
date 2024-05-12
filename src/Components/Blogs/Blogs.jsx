import { useEffect } from "react";
import { useState } from "react";
import Blog from '../Blog/Blog'  // ../ means 

const Blogs = () => {

	const [blogs, setBlogs] = useState([])  // 
 
	useEffect( () =>{
        fetch('blog.json')  // local file
		.then(res => res.json())
	//	.then(data => console.log(data))
		.then(data => setBlogs(data))
	}, [])

	return (
		<div className="md:w-2/3">
			<h1 className="text-4xl">Blogs</h1>
			{
				blogs.map(blog => <Blog key={blog.ID} blog={blog}></Blog>)
			}
		</div>
	);
};

export default Blogs;