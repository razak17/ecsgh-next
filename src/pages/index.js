import { SEO, Intro, Services, Blog, Contact } from '../components';

const Home = () => {
	return (
		<div>
			<SEO title='ECSGH Landing Page' />
			<Intro />
			<Services />
			<Blog />
		</div>
	);
};

export default Home;
