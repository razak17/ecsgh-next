import SubTitle from 'components/Partials/SubTitle';
import Title from 'components/Partials/Title';
import AppWrap from 'components/Wrapper/AppWrap';

import styles from './About.module.css';

const About = () => {
	return (
		<div>
			<Title title='Who we are' />
			<SubTitle subTitle='About Us' />
			<div className={styles.about}>
				<p>
					Enterprise Capacity Systems is start up firm which specialises in corporate
					and industrial security, leadership and strategic management. We also
					specialise in people management,talent development, research, education,
					learning and development. We help organisations and individuals to drive
					performance by shaping themselves,their people and systems.
				</p>
			</div>
		</div>
	);
};

export default AppWrap(About, 'about');
