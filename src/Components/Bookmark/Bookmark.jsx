

const Bookmark = ({bookmark}) => {
	const {Title} = bookmark;
	return (
		<div className="bg-gray-200 p-4 m-4 rounded-xl font-bold">
			<h3 className="text-3xl">{Title}</h3>
		</div>
	);
};

export default Bookmark;