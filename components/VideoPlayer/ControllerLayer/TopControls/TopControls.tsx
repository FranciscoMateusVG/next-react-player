import { Button, Grid, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

interface TopControlsProps {}

export const TopControls: React.FC<TopControlsProps> = () => {
	return (
		<Grid
			container
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			style={{ padding: 16 }}
		>
			<Grid item>
				<Typography variant="h5" style={{ color: "white" }}>
					Video Title
				</Typography>
			</Grid>
			<Grid item>
				<Button variant="contained" color="primary">
					BookMark
				</Button>
			</Grid>
		</Grid>
	);
};
