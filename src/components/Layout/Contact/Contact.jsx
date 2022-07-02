import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateInput } from './Contact.validation';

import Title from '../../Partials/Title';
import SubTitle from '../../Partials/SubTitle';
import AppWrap from '../../Wrapper/AppWrap';

import style from './Contact.module.css';
import ContactInfo from './ContactInfo';
import InputField from 'components/Partials/InputField';

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

		setLoading(true);

		console.log(formData);
		const { first_name, last_name, email, subject, message } = formData;

		{
			/* emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          first_name,
          last_name,
          email,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        res => {
          setLoading(false);
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
      ); */
		}
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
							<InputField
								type='submit'
								disabled={loading ? true : false}
								value={loading ? 'Sending' : 'Send Message'}
								button
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
