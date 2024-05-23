import { FormControl, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { addErrorIntoField } from '../utils/AddError';
import ErrorMessage from './ErrorMessage';

const TextFields = ({ label, inputProps, name, control, errors, }) => {
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
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
		</FormControl>
	);
};

export default TextFields;
