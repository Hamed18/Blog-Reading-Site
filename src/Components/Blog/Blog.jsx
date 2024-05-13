import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";


const Blog = ({ blog }) => {
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
					<button className="ml-2 text-2xl text-red-400"><IoBookmarks></IoBookmarks></button>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2>
            <p>
                {Hashtags.map((hash, idx) => <span key={idx}> <a href={`#${hash}`}>#{hash}</a> </span>)}  {/*we r not calling any component, so no props*/}
            </p>
        </div>
    );
};

Blog.propTypes = { // "propTypes" should be lowercase
    blog: PropTypes.object.isRequired
}
export default Blog;
