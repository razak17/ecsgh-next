import BlogCard from './BlogCard';
import Title from '../Partials/Title';
import SubTitle from '../Partials/SubTitle';

import style from './Blog.module.css';

const Blog = () => {
	return (
		<div className={style.container} id='blog'>
			<div>
        <Title title='Checkout Our Blog' />
        <SubTitle subTitle='Recent Posts' />
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
