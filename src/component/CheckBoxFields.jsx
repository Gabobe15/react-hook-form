import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
// import { addErrorIntoField } from '../utils/AddError';

const CheckBoxFields = ({ control, name, errors }) => {
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<FormControlLabel
						required
						control={<Checkbox {...field} />}
						label="I Agree to MyApp Terms and Privacy Policy"
					/>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
		</>
	);
};

export default CheckBoxFields;
