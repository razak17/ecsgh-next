import Card from 'components/Partials/Card';

const BlogCard = ({ title, excerpt }) => {
	return (
		<Card>
			<span>25th May 2022</span>
			<h2>{title}</h2>
			<p>{excerpt}</p>
			<button>Read More</button>
		</Card>
	);
};

export default BlogCard;
