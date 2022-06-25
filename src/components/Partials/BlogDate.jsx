import style from './Partials.module.css';

const BlogDate = ({ date }) => {
	return (
      <div className={style.date}>
        <span>{date}</span>
      </div>
	);
};

export default BlogDate;

