import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import style from './Navbar.module.css';
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
					<li className={style.list_item} key={index}>
						<LinkItem to={path} label={label} key={index} />
					</li>
				))}
			</ul>
					<button
						className={`${style.nav_btn} ${style.nav_bars_btn}`}
						onClick={() => setOpen(!open)}
					>
				<FaBars />
			</button>
			{open && (
				<div className={style.nav}>
					<ul onClick={() => setOpen(false)} className={style.menu}>
						{menuItems.map(({ path, label }, index) => (
							<li className={style.menu_item} key={index}>
								{/* <LinkItem to={path} label={label} key={index} /> */}
								<a href={`#${path}`} onClick={() => setOpen(!open)}>
									{label}
								</a>
							</li>
						))}
					</ul>
					<button
						className={`${style.nav_btn} ${style.nav_close_btn}`}
						onClick={() => setOpen(!open)}
					>
						<FaTimes />
					</button>
				</div>
			)}
		</div>
	);
};

export default Navbar;
