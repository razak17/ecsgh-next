import { useState } from 'react';
import emailjs from '@emailjs/browser';

import Title from '../../Partials/Title';
import SubTitle from '../../Partials/SubTitle';
import AppWrap from '../../Wrapper/AppWrap';

import style from './Contact.module.css';

const Contact = () => {
	const [ formData, setFormData ] = useState({
		first_name: '',
		last_name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [ loading, setLoading ] = useState(false);

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [ name ]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		// console.log(formData);
		const { first_name, last_name, email, subject, message } = formData;

		emailjs
			.send(
				'service_ecsgh',
				'template_ecsgh',
				{
					first_name,
					last_name,
					email,
					subject,
					message,
				},
				'HmrC75Jr4au543Xni'
			)
			.then(
				res => {
					console.log(res.text);
					setFormData({
						first_name: '',
						last_name: '',
						email: '',
						subject: '',
						message: '',
					});
				},
				error => {
					console.log('Email JS Error', error.text);
				}
			);
	};

	return (
		<>
			<Title title='Get In Touch' />
			<SubTitle subTitle='Contact Us' />
			<div className={style.contact}>
				<div className={style.contact_form}>
					<form onSubmit={handleSubmit}>
						<div className={style.row}>
							<div className={style.input50}>
								<input
									type='text'
									name='first_name'
									placeholder='First Name'
									value={formData.first_name}
									onChange={handleChangeInput}
								/>
							</div>
							<div className={style.input50}>
								<input
									type='text'
									name='last_name'
									placeholder='Last Name'
									value={formData.last_name}
									onChange={handleChangeInput}
								/>
							</div>
						</div>
						<div className={style.row}>
							<div className={style.input50}>
								<input
									type='text'
									name='email'
									placeholder='Email'
									value={formData.email}
									onChange={handleChangeInput}
								/>
							</div>
							<div className={style.input50}>
								<input
									type='text'
									name='subject'
									placeholder='Subject'
									value={formData.subject}
									onChange={handleChangeInput}
								/>
							</div>
						</div>
						<div className={style.row}>
							<div className={style.input100}>
								<textarea
									name='message'
									placeholder='Message'
									value={formData.message}
									onChange={handleChangeInput}
								></textarea>
							</div>
						</div>
						<div className={style.row}>
							<div className={style.input100}>
								<input type='submit' value={loading ? 'Sending' : 'Send Message'} />
							</div>
						</div>
					</form>
				</div>

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
			</div>
		</>
	);
};

export default AppWrap(Contact, 'contact');
