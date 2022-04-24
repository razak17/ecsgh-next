import Circle from "./Circle";
import style from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div className={style.container}>
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={style.card}>
        <h1 className={style.title}>
          Stay On Top of the Latest Security<br />
          Trends for your IT Infrastructure
        </h1>
        <p className={style.desc}>
          We help you learn about the latest trends in security to solve challenges<br />
          with your IT Infrastructure
        </p>
        <button className={style.button}>Get In Touch</button>
      </div>
    </div>
  );
};

export default Intro;
