import { Intro, Services, Blog, Contact } from '../components/Layout';
import SEO from '../components/Layout/PrimaryLayout/SEO';

const Home = () => {
	return (
		<>
			<SEO />
			<Intro />
			<Services />
			<Blog />
			<Contact />
		</>
	);
};

export default Home;
