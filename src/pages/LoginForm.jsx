import { Avatar, Box, Button, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import TextFields from '../component/TextField';

const schema = yup.object({
	email: yup.string().email().required('email is required'),
	password: yup.string().required('password is required'),
});

const LoginForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (e) => {
		console.log(e);
	};

	console.log(errors);

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
					<LoginIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>

				{/* form  */}
				<Box noValidate component="form" onSubmit={handleSubmit(onSubmit)}>
					<TextFields
						errors={errors}
						name="email"
						control={control}
						label="Email"
					/>
					<TextFields
						errors={errors}
						name="password"
						control={control}
						label="Password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Login
					</Button>
				</Box>
			</Box>
			<Typography>
				Don&apos;t have account: <NavLink to="/register/">Register?</NavLink>
			</Typography>
		</>
	);
};

export default LoginForm;
