import { Container } from '@mui/material';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from './pages/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Container maxWidth="xs">
			<BrowserRouter>
				<Routes>
					<Route path="/login/" element={<LoginForm />} />
					<Route path="/register/" element={<RegistrationForm />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
