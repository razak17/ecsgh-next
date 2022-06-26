import { Link } from 'react-scroll';

import style from './Partials.module.css';

const Logo = ({ to, label }) => {
	return (
		<Link
			className={style.logo}
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

export default Logo;
