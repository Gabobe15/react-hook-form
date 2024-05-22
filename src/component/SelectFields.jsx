import { FormControl, MenuItem, TextField } from '@mui/material';

const SelectFields = ({ label }) => {
	return (
		<FormControl fullWidth sx={{ mt: '1rem' }}>
			<TextField required label={label} variant="filled" select>
				<MenuItem>None</MenuItem>
				<MenuItem value='us'>US</MenuItem>
				<MenuItem value='kenya'>Kenya</MenuItem>
			</TextField>
		</FormControl>
	);
};

export default SelectFields;
