import style from './Partials.module.css';

const SubTitle = ({ subTitle }) => {
  return <h1 className={style.subtitle}>{subTitle}</h1>;
};

export default SubTitle;
