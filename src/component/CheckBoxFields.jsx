import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

const CheckBoxFields = ({ control, name }) => {
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
		</>
	);
};

export default CheckBoxFields;
