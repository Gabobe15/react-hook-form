import { FormControl, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { addErrorIntoField } from '../utils/AddError';
import ErrorMessage from './ErrorMessage';

const SelectFields = ({ label, name, control, errors }) => {
	const [listCountries, setListCountries] = useState([]);

	const countryNames = listCountries?.map((c) => c.name.common).sort();

	const fetchCountries = () => {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => setListCountries(data));
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	// console.log(listCountries);

	return (
		<FormControl fullWidth sx={{ mt: '1rem' }}>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<TextField
						{...addErrorIntoField(errors[name])}
						{...field}
						required
						label={label}
						variant="filled"
						select
					>
						<MenuItem>
							<em>None</em>
						</MenuItem>
						{countryNames?.map((country) => (
							<MenuItem key={country} value={country}>
								{country}
							</MenuItem>
						))}
					</TextField>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
		</FormControl>
	);
};

export default SelectFields;
