import style from './Contact.module.css';

const ContactInfo = () => {
	return (
		<div className={style.contact_info}>
			<div className={style.info_box}>
				<div className={style.details}>
					<h4>Address</h4>
					<p>28 Neon Tower, New York City, USA</p>
				</div>
			</div>
			<div className={style.info_box}>
				<div className={style.details}>
					<h4>Email</h4>
					<a href='mailto:anyone@example.com'>ecsgh@ecsgh.com</a>
				</div>
			</div>
			<div className='style.info-box'>
				<div className='style.details'>
					<h4>Phone number</h4>
					<a href='tel:+19784444444'>+1 978 555 4444</a>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
