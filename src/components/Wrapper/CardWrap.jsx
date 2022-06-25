import React from 'react';

import style from './Wrapper.module.css';

const CardWrap = ({ children, blog }) => {
	return <div className={blog ? style.card_wrap_blog : style.card_wrap}>{children}</div>;
};

export default CardWrap;
