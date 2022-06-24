import React from 'react';

import style from './Wrapper.module.css';

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={classNames ? classNames : style.container}>
				<Component />
			</div>
		);
	};

export default AppWrap;
