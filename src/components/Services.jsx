import style from "styles/Services.module.css";
import Card from './Card';

const Services = () => {
  return (
    <div className={style.container}>
      <div>
        <h3 className={style.title}>What We Do?</h3>
        <h1 className={style.subtitle}>Our Services</h1>
        <div className={style.services}>
          <Card desc="Hello" title="Title" />
          <Card desc="Hello" title="Title" />
          <Card desc="Hello" title="Title" />
          <Card desc="Hello" title="Title" />
        </div>
      </div>
    </div>
  );
};

export default Services;
