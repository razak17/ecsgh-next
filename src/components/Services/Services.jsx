import { serviceItems } from './Services.data';

import ServiceCard from './ServiceCard';
import Title from '../Partials/Title';
import SubTitle from '../Partials/SubTitle';

import style from './Services.module.css';

const Services = () => {
  return (
    <div className={style.container} id='services'>
      <div>
        <Title title='What we do' />
        <SubTitle subTitle='Our Services' />
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
