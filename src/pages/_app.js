import { PrimaryLayout } from '../components/Layout';
import './globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<PrimaryLayout>
			<Component {...pageProps} />
		</PrimaryLayout>
	);
}

export default MyApp;
