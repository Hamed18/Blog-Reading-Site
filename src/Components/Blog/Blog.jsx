import PropTypes from 'prop-types';

const Blog = ({blog}) => {
	const {Title,Cover,Author,AuthorImg,ReadingTime,PostedDate} = blog;
	console.log({Title})
	return (
		<div>
            <img src={Cover} alt={`Cover picture of the title ${title}`} />
			<div className="flex justify-between">
			     <div className="flex">
                     <img src={AuthorImg} alt="" className="w-14" />
					 <div className="ml-6">
						 <h3 className="text-2xl">{Author}</h3>
						 <p>{PostedDate}</p>
					 </div>
				 </div>
				 <div>
                     <span>{ReadingTime} min read</span>
				 </div>
			</div>
			<h2 className="text-4xl">{Title}</h2>
			<p>
				{
					Hashtags.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
				}
			</p>
		</div>
	);
};

Blog.PropTypes = {
	blog: PropTypes.object.isRequired
}
export default Blog;