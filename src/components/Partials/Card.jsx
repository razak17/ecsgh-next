import style from './Partials.module.css';

const Card = ({ children }) => {
  return <div className={style.card}>{children}</div>;
};

export default Card;
