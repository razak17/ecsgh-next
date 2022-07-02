export const validateInput = {
	fname: {
		errorMessage: 'First Name should be at least 3 characters',
		pattern: '^[A-Za-z0-9 ]{3,36}$',
		required: true,
	},
	lname: {
		errorMessage: 'Last Name should be at least 3 characters',
		pattern: '^[A-Za-z0-9 ]{3,36}$',
		required: true,
	},
	email: {
		errorMessage: 'Please enter a valid email address',
		required: true,
	},
	subject: {
		errorMessage: 'Subject should be at least 3 characters',
		pattern: '^[A-Za-z0-9 ]{3,36}$',
		required: true,
	},
	message: {
		errorMessage: 'Message should not be empty',
		pattern: '^[A-Za-z0-9 ]{3,36}$',
		required: true,
	},
};
