import Circle from './Circle';
import style from '../styles/Intro.module.css';

const Intro = () => {
	return (
		<div className={style.container} id='intro'>
			<Circle backgroundColor='#01c686' top='-50vh' left='-50vh' />
			<Circle backgroundColor='#01c686' right='-50vh' bottom='-59vh' />
			<div className={style.card}>
				<div className={style.t1}>
					<h1 className={style.title}>
						Career and Personal Development, Performance Management and Research 
					</h1>
				</div>
				<p className={style.desc}>
					Get expert consultation on career and personal development and research.
				</p>
				<div className={style.b1}>
					<button className={style.button}>Get In Touch</button>
				</div>
			</div>
		</div>
	);
};

export default Intro;
