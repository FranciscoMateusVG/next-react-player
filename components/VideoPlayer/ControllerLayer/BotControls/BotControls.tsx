import { Grid } from "@mui/material";
import { SeekSlider } from "./SeekSlider/SeekSlider";
import { LeftControls } from "./LeftControls/LeftControls";
import { RightControls } from "./RightControls/RightControls";

interface BotControlsProps {
	utils: any;
}

export const BotControls: React.FC<BotControlsProps> = ({ utils }) => {
	return (
		<>
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				style={{ padding: 16 }}
			>
				<SeekSlider utils={utils} />
				<LeftControls utils={utils} />
				<RightControls utils={utils} />
			</Grid>
		</>
	);
};
