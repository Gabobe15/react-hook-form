import { Avatar, Box, Button, InputAdornment, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { NavLink } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';

import TextFields from '../component/TextField';
import SelectFields from '../component/SelectFields';
import CheckBoxFields from '../component/CheckBoxFields';
import { passwdRegExp, phoneRegExp } from '../utils/AddError';

const schema = yup.object({
	fullName: yup.string().required('Full name is required'),
	email: yup.string().required('email field is required').email(),
	mobile: yup
		.string()
		.required('mobile number is required')
		.matches(phoneRegExp, 'Phone number is not valid'),
	country: yup.string().required('country is required'),
	password: yup
		.string()
		.required('password is required')
		.matches(
			passwdRegExp,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and one special case Character'
		),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Password must match'),
	privacy: yup.bool().oneOf([true], 'Field must be checked'),
});

const RegistrationForm = () => {
	//
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			mobile: '',
			password: '',
			confirmPassword: '',
			privacy: false,
		},
		resolver: yupResolver(schema),
	});
	const onSubmit = (e) => {
		console.log(e);
		reset();
	};

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					mt: '4rem',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<HowToRegIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>

				{/* form  */}
				<Box noValidate component="form" onSubmit={handleSubmit(onSubmit)}>
					<TextFields
						errors={errors}
						control={control}
						name="fullName"
						label="Full Name"
					/>
					<TextFields
						errors={errors}
						control={control}
						name="email"
						label="Email"
					/>
					<TextFields
						errors={errors}
						control={control}
						name="mobile"
						label="Mobile phone"
						inputProps={{
							startAdornment: (
								<InputAdornment position="start">+254</InputAdornment>
							),
						}}
						type="number"
					/>
					<SelectFields
						errors={errors}
						control={control}
						name="country"
						label="Country"
					/>
					<TextFields
						errors={errors}
						control={control}
						name="password"
						label="Password"
					/>
					<TextFields
						errors={errors}
						control={control}
						name="confirmPassword"
						label="Confirm Password"
					/>

					<CheckBoxFields errors={errors} name="privacy" control={control} />
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
				</Box>
			</Box>
			<Typography>
				Have account: <NavLink to="/login/">Login</NavLink>
			</Typography>
		</>
	);
};

export default RegistrationForm;
