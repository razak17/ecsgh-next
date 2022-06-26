import { serviceItems } from './Services.data';

import ServiceCard from './ServiceCard';
import Title from '../../Partials/Title';
import SubTitle from '../../Partials/SubTitle';
import AppWrap from '../../Wrapper/AppWrap';

import CardWrap from 'components/Wrapper/CardWrap';

const Services = () => {
	return (
		<>
			<Title title='What we do' />
			<SubTitle subTitle='Our Services' />
			<CardWrap>
				{serviceItems.map(({ title, description }, idx) => (
					<ServiceCard title={title} key={idx} />
				))}
			</CardWrap>
		</>
	);
};

export default AppWrap(Services, 'services');
