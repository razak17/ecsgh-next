import style from './Partials.module.css';

const Card = ({ children }) => {
  return <div className={style.service}>{children}</div>;
};

export default Card;
