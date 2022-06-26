import Card from 'components/Partials/Card';

const BlogCard = ({ title, excerpt, date, author }) => {
	return (
		<Card>
			<h2>{title}</h2>
			<div>
				<a href='#'>{date}</a>
				<a href='#'>{author}</a>
			</div>
			<p>{excerpt}</p>
			<button>Read More</button>
		</Card>
	);
};

export default BlogCard;
