import { serviceItems } from './Services.data';

import ServiceCard from './ServiceCard';
import Title from '../Partials/Title';
import SubTitle from '../Partials/SubTitle';
import AppWrap from 'components/Wrapper/AppWrap';

import style from './Services.module.css';

const Services = () => {
  return (
    <>
      <Title title='What we do' />
      <SubTitle subTitle='Our Services' />
      <div className={style.services}>
        {serviceItems.map(({ title, description }, idx) => (
          <ServiceCard desc={description} title={title} key={idx} />
        ))}
      </div>
    </>
  );
};

export default AppWrap(Services, 'services');
