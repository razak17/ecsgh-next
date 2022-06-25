import Card from '../Partials/Card';

const ServiceCard = ({ desc, title }) => {
	return (
		<Card>
			<h2>{title}</h2>
			<p>{desc}</p>
		</Card>
	);
};

export default ServiceCard;
