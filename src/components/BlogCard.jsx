import style from 'styles/Blog.module.css';

const BlogCard = () => {
	return (
		<div className={style.service}>
			<span>25th May 2022</span>
			<h2>The Secrets of Carbon Isotope Dating</h2>
			<p>
				lorem ipsum, dolor sit amet consectetur adipisicing elit. harum omnis nemo
				sapiente in quidem sed dolores cumque! ut, est aliquid!
			</p>
			<button>Read More</button>
		</div>
	);
};

export default BlogCard;
