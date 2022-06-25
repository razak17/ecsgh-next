import React from 'react';

import style from './Wrapper.module.css';

const CardWrap = ({ children }) => {
	return <div className={style.services}>{children}</div>;
};

export default CardWrap;
