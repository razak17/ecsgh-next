import style from './Partials.module.css';

const InputField = ({ name, placeholder, value, onChange, textArea, button, disabled }) => {
	if (textArea) {
		return (
			<div className={style.input100}>
				<textarea
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				></textarea>
			</div>
		);
	} else if (button) {
		return (
			<input
        className={style.submit}
				disabled={disabled}
				type='submit'
				value={value}
			/>
		);
	} else {
		return (
			<div className={style.input50}>
				<input
					type='text'
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</div>
		);
	}
};

export default InputField;
