import style from './Partials.module.css';

const Title = ({ title }) => {
  return <h3 className={style.title}>{title}</h3>;
};

export default Title;
