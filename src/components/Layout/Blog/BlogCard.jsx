import Card from 'components/Partials/Card';

const BlogCard = ({ title, excerpt, date }) => {
	return (
		<Card>
			<span>{date}</span>
			<h2>{title}</h2>
			<p>{excerpt}</p>
			<button>Read More</button>
		</Card>
	);
};

export default BlogCard;
