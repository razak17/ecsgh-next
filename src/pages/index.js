import { Intro, Services, Blog, Contact, About } from '../components/Layout';
import SEO from '../components/Layout/PrimaryLayout/SEO';

const Home = () => {
	return (
		<>
			<SEO />
			<Intro />
			<About />
			<Services />
			<Blog />
			<Contact />
		</>
	);
};

export default Home;
