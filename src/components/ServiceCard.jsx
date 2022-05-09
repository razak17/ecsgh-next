import style from 'styles/Services.module.css';

const Card = ({desc, title}) => {
	return (
		<div className={style.service}>
			<h2>{title}</h2>
			<p>{desc}</p>
		</div>
	);
};

export default Card;
