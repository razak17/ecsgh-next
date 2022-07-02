import emailjs from '@emailjs/browser';

export const sendEmail = formData => {
	const { first_name, last_name, email, subject, message } = formData;
	emailjs
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
				console.log(res.text);
			},
			error => {
				console.log('Email JS Error', error.text);
			}
		);
};
