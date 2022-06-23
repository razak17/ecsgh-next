import style from './Blog.module.css';
import BlogCard from './BlogCard';

const Blog = () => {
	return (
		<div className={style.container} id='blog'>
			<div>
				<h3 className={style.title}>Checkout Our Blog</h3>
				<h1 className={style.subtitle}>Recent Posts</h1>
				<div className={style.card}>
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		</div>
	);
};

export default Blog;
