import { Avatar, Box, Button, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import TextFields from '../component/TextField';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
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
				<Box component="form">
					<TextFields name="email" label="Email" />
					<TextFields name="password" label="Password" />
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
