import { Avatar, Box, Button, InputAdornment, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from '../component/TextField';
import SelectFields from '../component/SelectFields';
import CheckBoxFields from '../component/CheckBoxFields';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
	//
	const { handleSubmit, control } = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			mobile: '',
			password: '',
			confirmPassword: '',
			privacy: false,
		},
	});
	const onSubmit = (e) => {
		console.log(e);
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
					<TextFields control={control} name="fullName" label="Full Name" />
					<TextFields control={control} name="email" label="Email" />
					<TextFields
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
					<SelectFields control={control} name="country" label="Country" />
					<TextFields control={control} name="password" label="Password" />
					<TextFields
						control={control}
						name="confirmPassword"
						label="Confirm Password"
					/>
					<CheckBoxFields name='privacy' control={control} />
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
