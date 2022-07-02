import Card from 'components/Partials/Card';
import Button from '../../Partials/Button';

const BlogCard = ({ title, excerpt, date, author }) => {
	return (
		<Card>
			<h2>{title}</h2>
			<div>
				<a href='#'>{date}</a>
				<a href='#'>{author}</a>
			</div>
			<p>{excerpt}</p>
			<Button label='Read More' />
		</Card>
	);
};

export default BlogCard;
