import { useState } from 'react';
import { validateInput } from './Contact.validation';
import { sendEmail } from '../../../api';

import ContactInfo from './ContactInfo';
import Title from '../../Partials/Title';
import SubTitle from '../../Partials/SubTitle';
import AppWrap from '../../Wrapper/AppWrap';
import Button from '../../Partials/Button';
import InputField from '../../Partials/InputField';

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

		console.log(formData);
		setLoading(true);
		sendEmail(formData);
		setLoading(false);
		setFormData({
			first_name: '',
			last_name: '',
			email: '',
			subject: '',
			message: '',
		});
	};

	return (
		<>
			<Title title='Get In Touch' />
			<SubTitle subTitle='Contact Us' />
			<div className={style.contact}>
				<div className={style.contact_form}>
					<form onSubmit={handleSubmit}>
						<div className={style.row}>
							<InputField
								{...validateInput.fname}
								type='text'
								name='first_name'
								placeholder='First Name'
								value={formData.first_name}
								onChange={handleChangeInput}
							/>
							<InputField
								{...validateInput.lname}
								type='text'
								name='last_name'
								placeholder='Last Name'
								value={formData.last_name}
								onChange={handleChangeInput}
							/>
						</div>
						<div className={style.row}>
							<InputField
								{...validateInput.email}
								type='email'
								name='email'
								placeholder='Email'
								value={formData.email}
								onChange={handleChangeInput}
							/>
							<InputField
								{...validateInput.subject}
								type='text'
								name='subject'
								placeholder='Subject'
								value={formData.subject}
								onChange={handleChangeInput}
							/>
						</div>
						<div className={style.row}>
							<InputField
								{...validateInput.message}
								name='message'
								placeholder='Message'
								value={formData.message}
								onChange={handleChangeInput}
								textArea
							/>
						</div>
						<div className={style.row}>
							<Button
								disabled={loading ? true : false}
								label={loading ? 'Sending' : 'Send Message'}
							/>
						</div>
					</form>
				</div>

				<ContactInfo />
			</div>
		</>
	);
};

export default AppWrap(Contact, 'contact');
