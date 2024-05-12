import { useEffect } from "react";
import { useState } from "react";

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
		</div>
	);
};

export default Blogs;