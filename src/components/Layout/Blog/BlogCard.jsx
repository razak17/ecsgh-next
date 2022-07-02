import Card from 'components/Partials/Card';
import Button from '../../Partials/Button';

const BlogCard = ({ title, excerpt, date, author }) => {
	return (
		<Card>
			<a href='#'>
				<h2>{title}</h2>
			</a>
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
