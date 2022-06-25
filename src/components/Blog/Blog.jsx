import BlogCard from './BlogCard';
import Title from '../Partials/Title';
import SubTitle from '../Partials/SubTitle';
import AppWrap from '../Wrapper/AppWrap';

import CardWrap from 'components/Wrapper/CardWrap';

const Blog = () => {
	return (
		<>
			<Title title='Checkout Our Blog' />
			<SubTitle subTitle='Recent Posts' />
			<CardWrap>
				<BlogCard
					title='The Secrets of Carbon Isotope Dating'
					excerpt='        lorem ipsum, dolor sit amet consectetur adipisicing elit. harum omnis nemo
        sapiente in quidem sed dolores cumque! ut, est aliquid!
'
				/>
				<BlogCard
					title='The Secrets of Carbon Isotope Dating'
					excerpt='        lorem ipsum, dolor sit amet consectetur adipisicing elit. harum omnis nemo
        sapiente in quidem sed dolores cumque! ut, est aliquid!
'
				/>
				<BlogCard
					title='The Secrets of Carbon Isotope Dating'
					excerpt='        lorem ipsum, dolor sit amet consectetur adipisicing elit. harum omnis nemo
        sapiente in quidem sed dolores cumque! ut, est aliquid!
'
				/>
			</CardWrap>
		</>
	);
};

export default AppWrap(Blog, 'blog');
