import { FormControl, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { addErrorIntoField } from '../utils/AddError';

const TextFields = ({ label, inputProps, name, control, errors }) => {
	return (
		<FormControl fullWidth sx={{ mt: '1rem' }}>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						{...addErrorIntoField(errors[name])}
						required
						label={label}
						variant="filled"
						InputProps={inputProps}
					/>
				)}
			/>
		</FormControl>
	);
};

export default TextFields;
