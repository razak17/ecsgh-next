import BlogCard from './BlogCard';
import Title from '../Partials/Title';
import SubTitle from '../Partials/SubTitle';
import AppWrap from '../Wrapper/AppWrap';

import style from './Blog.module.css';

const Blog = () => {
	return (
		<>
			<Title title='Checkout Our Blog' />
			<SubTitle subTitle='Recent Posts' />
			<div className={style.card_row}>
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</>
	);
};

export default AppWrap(Blog, 'blog');
