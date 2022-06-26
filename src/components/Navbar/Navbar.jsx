import { useState } from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-scroll';
import { menuItems } from '../Header/Header.data';
import Logo from '../Partials/Logo';
import LinkItem from 'components/Partials/LinkItem';

const Navbar = () => {
	const [ open, setOpen ] = useState(false);

	return (
		<div className={style.container}>
			<Logo to='intro' label='ECSGH' />
			<ul className={style.list}>
				{menuItems.map(({ path, label }, index) => (
					<li className={style.listItem} key={index}>
						<LinkItem to={path} label={label} key={index} />
					</li>
				))}
			</ul>

			{/* Hamburger Menu */}
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
				{menuItems.map(({ path, label }, index) => (
					<li className={style.menuItem} key={index}>
						<LinkItem to={path} label={label} key={index} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
