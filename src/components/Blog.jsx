import style from 'styles/Blog.module.css';
import Card from './Card';

const Blog = () => {
	return (
		<div className={style.container} id='blog'>
			<div>
				<h3 className={style.title}>Checkout Our Blog</h3>
				<h1 className={style.subtitle}>Recent Posts</h1>
				<div className={style.services}>
					<Card desc='Hello' title='Title' />
				</div>
			</div>
		</div>
	);
};

export default Blog;
