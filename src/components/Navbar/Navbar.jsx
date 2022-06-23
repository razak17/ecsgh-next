import { useState } from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-scroll';
import { menuItems } from '../Header/Header.data';
import Logo from '../Logo';

const Navbar = () => {
	const [ open, setOpen ] = useState(false);

	return (
		<div className={style.container}>
			<Logo src='/' label='ECSGH' />
			<ul className={style.list}>
				{menuItems.map(({ path, label }, idx) => (
					<li className={style.listItem} key={idx}>
						<Link
							activeClass='active'
							to={path}
							spy={true}
							smooth={true}
							duration={500}
							key={idx}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
			<div className={style.hamburger} onClick={() => setOpen(!open)}>
				<div className={style.line} />
				<div className={style.line} />
				<div className={style.line} />
			</div>
			<ul
				onClick={() => setOpen(false)}
				className={style.menu}
				style={{ right: open ? '0px' : '-50vw' }}
			>
				{menuItems.map(({ path, label }, idx) => (
					<li className={style.menuItem} key={idx}>
						<Link
							activeClass='active'
							to={path}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							key={idx}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
