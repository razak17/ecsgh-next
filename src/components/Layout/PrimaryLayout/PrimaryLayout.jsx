import Navbar from '../../Navigation/Navbar/Navbar';
import Footer from '../../Navigation/Footer/Footer';

const PrimaryLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default PrimaryLayout;
