import PropTypes from 'prop-types';    // 
import { MdBookmarks } from "react-icons/md";

const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    const { Title, Cover, Author, AuthorImg, ReadingTime, PostedDate, Hashtags } = blog; // Include Hashtags here
    //	console.log({Title})
    return (
        <div  className="mb-12">
            <img src={Cover} alt={`Cover picture of the title ${Title}`} className="w-full mb-4 mx-auto"/> {/* Corrected Title */}
            <div className="flex justify-between">
                <div className="flex mb-4">
                    <img src={AuthorImg} alt="" className="w-14 rounded-full" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{Author}</h3>
                        <p>{PostedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{ReadingTime} min read</span>
					<button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-400"><MdBookmarks></MdBookmarks></button>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2>
            <p>
                {Hashtags.map((hash, idx) => <span key={idx}> <a href={`#${hash}`}>#{hash}</a> </span>)}  {/*we r not calling any component, so no props*/}
            </p>
			<button onClick={() => handleMarkAsRead(ReadingTime)}
			className="text-purple-600 font-bold underline">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = { 
    blog: PropTypes.object.isRequired,
	handleAddToBookmark: PropTypes.func  // handleAddToBookmark
}
export default Blog;
