import { Link } from 'react-scroll';

const LinkItem = ({ to, label }) => {
	return (
		<Link
			activeClass='active'
			to={to}
			spy={true}
			smooth={true}
			duration={500}
		>
			{label}
		</Link>
	);
};

export default LinkItem;
