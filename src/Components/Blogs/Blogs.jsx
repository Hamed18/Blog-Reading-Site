import { useEffect } from "react";
import { useState } from "react";
import Blog from '../Blog/Blog'  // ../ means 

import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {

	const [blogs, setBlogs] = useState([])  // 
 
	useEffect( () =>{
        fetch('blog.json')  // local file
		.then(res => res.json())
	//	.then(data => console.log(data))
		.then(data => setBlogs(data))
	}, [])

	return (
		<div className="md:w-2/3">
			<h1 className="text-3xl font-bold">Blogs {blogs.length}</h1>
			{
				blogs.map(blog => <Blog key={blog.ID} blog={blog} 
					handleAddToBookmark={handleAddToBookmark}
				    handleMarkAsRead={handleMarkAsRead}>
				</Blog>)
			}
		</div>
	);
};

Blogs.propTypes = { 
	handleAddToBookmark: PropTypes.func  // handleAddToBookmark
}

export default Blogs;