import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmarks,readingTime}) => {
	return (
		<div className="md:w-1/3 m-4 bg-gray-300 p-4 rounded-xl">
		   <h1 className="text-center text-3xl font-bold">Reading Time: {readingTime}</h1>
           <h1 className="text-3xl font-bold text-center">Bookmarked Blogs: {bookmarks.length}</h1>
		   {
			bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
		   }
		</div>
	);
};

export default Bookmarks;