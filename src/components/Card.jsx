import style from "styles/Services.module.css";

const Card = ({desc, title}) => {
  return (
    <div className={style.service}>
      <h2>{title}</h2>
      {desc}
      lorem ipsum, dolor sit amet consectetur adipisicing elit. harum omnis
      nemo sapiente in quidem sed dolores cumque! ut, est aliquid!
    </div>
  );
};

export default Card;
