import style from './Partials.module.css';

const Button = props => {
	const { label, ...buttonProps } = props;

  if (props.small) {
    return <button className={style.button_small} {...buttonProps}>{label}</button>;
  }
	return <button className={style.button} {...buttonProps}>{label}</button>;
};

export default Button;
