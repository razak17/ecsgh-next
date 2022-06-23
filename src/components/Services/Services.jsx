import style from './Services.module.css';
import ServiceCard from './ServiceCard';
import { serviceItems } from './Services.data';

const Services = () => {
	return (
		<div className={style.container} id='services'>
			<div>
				<h3 className={style.title}>What We Do?</h3>
				<h1 className={style.subtitle}>Our Services</h1>
				<div className={style.services}>
					{serviceItems.map(({ title, description }, idx) => (
						<ServiceCard desc={description} title={title} key={idx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
