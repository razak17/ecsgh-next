import Button from '../../Partials/Button';
import Circle from '../../Partials/Circle';
import style from './Intro.module.css';

const Intro = () => {
	return (
		<div id='intro' className={style.container}>
			<Circle backgroundColor='#01c686' top='-60vh' left='-50vh' />
			<Circle backgroundColor='#01c686' right='-50vh' bottom='-59vh' />
			<div className={style.card}>
				<div className={style.t1}>
					<h1 className={style.title}>
						Career Development, Performance Management and Research
					</h1>
				</div>
				<p className={style.desc}>
					Get expert consultation on career and personal development and research.
				</p>
				<div className={style.b1}>
					<Button small={true} label="Get In Touch" />
				</div>
			</div>
		</div>
	);
};

export default Intro;
