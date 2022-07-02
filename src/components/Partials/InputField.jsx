import { useState } from 'react';
import style from './Partials.module.css';

const InputField = props => {
	const [ focused, setFocused ] = useState(false);
	const { onChange, textArea, button, errorMessage, id, ...inputProps } = props;

	const handleFocus = () => {
		setFocused(true);
	};

	if (textArea) {
		return (
			<div className={style.input100}>
				<textarea
					{...inputProps}
					onBlur={handleFocus}
					onChange={onChange}
					focused={focused.toString()}
				></textarea>
				<span>{errorMessage}</span>
			</div>
		);
	} else {
		return (
			<div className={style.input50}>
				<input
					{...inputProps}
					onBlur={handleFocus}
					onChange={onChange}
					focused={focused.toString()}
				/>
				<span>{errorMessage}</span>
			</div>
		);
	}
};

export default InputField;
