import { Checkbox, FormControlLabel } from "@mui/material";

const CheckBoxFields = () => {
	return (
		<FormControlLabel required control={<Checkbox />} label="I Agree to MyApp Terms and Privacy Policy" />
	);
};

export default CheckBoxFields;
