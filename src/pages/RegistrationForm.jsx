import { Avatar, Box, Button, InputAdornment, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from '../component/TextField';
import SelectFields from '../component/SelectFields';
import CheckBoxFields from '../component/CheckBoxFields';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
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
				<Box component="form">
					<TextFields name="fullName" label="Full Name" />
					<TextFields name="email" label="Email" />
					<TextFields
						name="phone"
						label="Mobile phone"
						inputProps={{
							startAdornment: (
								<InputAdornment position="start">+254</InputAdornment>
							),
						}}
						type="number"
					/>
					<SelectFields label="Country" />
					<TextFields name="password" label="Password" />
					<TextFields name="confirmPassword" label="Confirm Password" />
					<CheckBoxFields />
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
			<Typography >
				Have account: <NavLink to="/login/">Login</NavLink>
			</Typography>
		</>
	);
};

export default RegistrationForm;
